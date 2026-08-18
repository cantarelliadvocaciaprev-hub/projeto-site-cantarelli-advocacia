import { createClient } from "https://esm.sh/@supabase/supabase-js@2.58.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

type PostPayload = {
  id?: string;
  slug?: string;
  title?: string;
  excerpt?: string;
  seo_title?: string | null;
  meta_description?: string | null;
  category?: string;
  tags?: string[];
  read_time?: string;
  image_url?: string | null;
  image_alt?: string | null;
  author?: string | null;
  body?: string;
  key_takeaways?: string[];
  faq?: { question: string; answer: string }[];
  published?: boolean;
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 120);

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const expected = Deno.env.get("REVIEW_STATS_PASSWORD");
    if (!expected) return json({ error: "Painel não configurado." }, 500);

    const { password, action, post } = (await req.json()) as {
      password?: string;
      action?: string;
      post?: PostPayload;
    };

    if (!password || password !== expected) {
      return json({ error: "Senha inválida." }, 401);
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    if (action === "list") {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("updated_at", { ascending: false });
      if (error) {
        console.error("list failed:", error.message);
        return json({ error: "Não foi possível carregar os artigos." }, 500);
      }
      return json({ posts: data ?? [] });
    }

    if (action === "save") {
      if (!post?.title?.trim()) {
        return json({ error: "Informe o título do artigo." }, 400);
      }
      if (!post?.body?.trim()) {
        return json({ error: "Informe o conteúdo do artigo." }, 400);
      }

      const slug = slugify(post.slug?.trim() || post.title);
      if (!slug) return json({ error: "Endereço (slug) inválido." }, 400);

      const record = {
        slug,
        title: post.title.trim().slice(0, 200),
        excerpt: (post.excerpt ?? "").trim().slice(0, 500),
        seo_title: post.seo_title?.trim() || null,
        meta_description: post.meta_description?.trim() || null,
        category: (post.category ?? "").trim() || "Previdenciário",
        tags: Array.isArray(post.tags) ? post.tags.slice(0, 20) : [],
        read_time: (post.read_time ?? "").trim() || "5 min",
        image_url: post.image_url?.trim() || null,
        image_alt: post.image_alt?.trim() || null,
        author: post.author?.trim() || "Thiago Cantarelli",
        body: post.body,
        key_takeaways: Array.isArray(post.key_takeaways)
          ? post.key_takeaways.slice(0, 12)
          : [],
        faq: Array.isArray(post.faq) ? post.faq.slice(0, 20) : [],
        published: !!post.published,
        published_at: post.published ? new Date().toISOString() : null,
      };

      if (post.id) {
        const { data: existing } = await supabase
          .from("blog_posts")
          .select("published_at, published")
          .eq("id", post.id)
          .maybeSingle();
        if (existing?.published && existing.published_at && record.published) {
          record.published_at = existing.published_at;
        }
        const { data, error } = await supabase
          .from("blog_posts")
          .update(record)
          .eq("id", post.id)
          .select()
          .maybeSingle();
        if (error) {
          console.error("update failed:", error.message);
          return json(
            { error: error.message.includes("duplicate") ? "Já existe um artigo com esse endereço." : "Não foi possível salvar." },
            400,
          );
        }
        return json({ post: data });
      }

      const { data, error } = await supabase
        .from("blog_posts")
        .insert(record)
        .select()
        .maybeSingle();
      if (error) {
        console.error("insert failed:", error.message);
        return json(
          { error: error.message.includes("duplicate") ? "Já existe um artigo com esse endereço." : "Não foi possível criar o artigo." },
          400,
        );
      }
      return json({ post: data });
    }

    if (action === "delete") {
      if (!post?.id) return json({ error: "Artigo não informado." }, 400);
      const { error } = await supabase
        .from("blog_posts")
        .delete()
        .eq("id", post.id);
      if (error) {
        console.error("delete failed:", error.message);
        return json({ error: "Não foi possível excluir o artigo." }, 500);
      }
      return json({ ok: true });
    }

    return json({ error: "Ação inválida." }, 400);
  } catch (e) {
    console.error("blog-admin error:", e instanceof Error ? e.message : e);
    return json({ error: "Erro inesperado." }, 500);
  }
});
