import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import {
  Loader2,
  Plus,
  Pencil,
  Trash2,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

const FUNCTIONS_URL = `https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.supabase.co/functions/v1/blog-admin`;

type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  seo_title: string | null;
  meta_description: string | null;
  category: string;
  tags: string[];
  read_time: string;
  image_url: string | null;
  image_alt: string | null;
  author: string | null;
  body: string;
  key_takeaways: string[];
  faq: { question: string; answer: string }[];
  published: boolean;
  published_at: string | null;
  updated_at: string;
};

type Draft = {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  seo_title: string;
  meta_description: string;
  category: string;
  tags: string;
  read_time: string;
  image_url: string;
  image_alt: string;
  author: string;
  body: string;
  key_takeaways: string;
  faq: string;
  published: boolean;
};

const emptyDraft: Draft = {
  slug: "",
  title: "",
  excerpt: "",
  seo_title: "",
  meta_description: "",
  category: "Previdenciário",
  tags: "",
  read_time: "5 min",
  image_url: "",
  image_alt: "",
  author: "Thiago Cantarelli",
  body: "",
  key_takeaways: "",
  faq: "",
  published: false,
};

const toDraft = (p: Post): Draft => ({
  id: p.id,
  slug: p.slug,
  title: p.title,
  excerpt: p.excerpt ?? "",
  seo_title: p.seo_title ?? "",
  meta_description: p.meta_description ?? "",
  category: p.category ?? "",
  tags: (p.tags ?? []).join(", "),
  read_time: p.read_time ?? "",
  image_url: p.image_url ?? "",
  image_alt: p.image_alt ?? "",
  author: p.author ?? "",
  body: p.body ?? "",
  key_takeaways: (p.key_takeaways ?? []).join("\n"),
  faq: (p.faq ?? []).map((f) => `${f.question} :: ${f.answer}`).join("\n"),
  published: p.published,
});

const parseList = (value: string, sep: RegExp) =>
  value
    .split(sep)
    .map((s) => s.trim())
    .filter(Boolean);

const BlogAdmin = () => {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [draft, setDraft] = useState<Draft | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const call = async (action: string, post?: unknown) => {
    const res = await fetch(FUNCTIONS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({ password, action, post }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Erro inesperado.");
    return data;
  };

  const loadPosts = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setLoading(true);
    setError("");
    try {
      const data = await call("list");
      setPosts(data.posts ?? []);
      setAuthed(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro inesperado.");
      setAuthed(false);
    } finally {
      setLoading(false);
    }
  };

  const savePost = async () => {
    if (!draft) return;
    setSaving(true);
    try {
      await call("save", {
        id: draft.id,
        slug: draft.slug,
        title: draft.title,
        excerpt: draft.excerpt,
        seo_title: draft.seo_title,
        meta_description: draft.meta_description,
        category: draft.category,
        tags: parseList(draft.tags, /,/),
        read_time: draft.read_time,
        image_url: draft.image_url,
        image_alt: draft.image_alt,
        author: draft.author,
        body: draft.body,
        key_takeaways: parseList(draft.key_takeaways, /\n/),
        faq: parseList(draft.faq, /\n/)
          .map((line) => {
            const [question, ...rest] = line.split("::");
            return {
              question: (question ?? "").trim(),
              answer: rest.join("::").trim(),
            };
          })
          .filter((f) => f.question && f.answer),
        published: draft.published,
      });
      toast.success(draft.published ? "Artigo publicado." : "Rascunho salvo.");
      setDraft(null);
      await loadPosts();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Erro ao salvar.");
    } finally {
      setSaving(false);
    }
  };

  const deletePost = async (post: Post) => {
    if (!window.confirm(`Excluir definitivamente "${post.title}"?`)) return;
    try {
      await call("delete", { id: post.id });
      toast.success("Artigo excluído.");
      await loadPosts();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Erro ao excluir.");
    }
  };

  if (!authed) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <Card className="w-full max-w-md p-8">
          <h1 className="text-2xl font-display font-bold text-foreground mb-2">
            Administração do Blog
          </h1>
          <p className="text-muted-foreground font-body text-sm mb-6">
            Informe a senha do painel para publicar, editar e excluir artigos.
          </p>
          <form onSubmit={loadPosts} className="space-y-3">
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha de acesso"
              required
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Entrar"}
            </Button>
          </form>
        </Card>
      </div>
    );
  }

  if (draft) {
    return (
      <div className="min-h-screen bg-background py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => setDraft(null)}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar para a lista
          </button>

          <h1 className="text-2xl font-display font-bold text-foreground mb-6">
            {draft.id ? "Editar artigo" : "Novo artigo"}
          </h1>

          <div className="space-y-5">
            <div>
              <Label htmlFor="title">Título</Label>
              <Input
                id="title"
                value={draft.title}
                onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                placeholder="Título do artigo"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="slug">Endereço (deixe vazio para gerar)</Label>
                <Input
                  id="slug"
                  value={draft.slug}
                  onChange={(e) => setDraft({ ...draft, slug: e.target.value })}
                  placeholder="meu-artigo-2026"
                />
              </div>
              <div>
                <Label htmlFor="category">Categoria</Label>
                <Input
                  id="category"
                  value={draft.category}
                  onChange={(e) => setDraft({ ...draft, category: e.target.value })}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="excerpt">Resumo (aparece na listagem)</Label>
              <Textarea
                id="excerpt"
                rows={3}
                value={draft.excerpt}
                onChange={(e) => setDraft({ ...draft, excerpt: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="body">
                Conteúdo — use "## " para título, "### " para subtítulo, "- " para lista e "&gt; " para destaque
              </Label>
              <Textarea
                id="body"
                rows={16}
                value={draft.body}
                onChange={(e) => setDraft({ ...draft, body: e.target.value })}
                placeholder={"Parágrafo de abertura.\n\n## Um título\n\nOutro parágrafo.\n\n- item da lista\n- outro item"}
                className="font-mono text-sm"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="image">URL da imagem de capa</Label>
                <Input
                  id="image"
                  value={draft.image_url}
                  onChange={(e) => setDraft({ ...draft, image_url: e.target.value })}
                  placeholder="https://..."
                />
              </div>
              <div>
                <Label htmlFor="imageAlt">Descrição da imagem</Label>
                <Input
                  id="imageAlt"
                  value={draft.image_alt}
                  onChange={(e) => setDraft({ ...draft, image_alt: e.target.value })}
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="readTime">Tempo de leitura</Label>
                <Input
                  id="readTime"
                  value={draft.read_time}
                  onChange={(e) => setDraft({ ...draft, read_time: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="author">Autor</Label>
                <Input
                  id="author"
                  value={draft.author}
                  onChange={(e) => setDraft({ ...draft, author: e.target.value })}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="tags">Palavras-chave (separadas por vírgula)</Label>
              <Input
                id="tags"
                value={draft.tags}
                onChange={(e) => setDraft({ ...draft, tags: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="takeaways">Pontos-chave (um por linha)</Label>
              <Textarea
                id="takeaways"
                rows={4}
                value={draft.key_takeaways}
                onChange={(e) => setDraft({ ...draft, key_takeaways: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="faq">Perguntas frequentes (uma por linha: pergunta :: resposta)</Label>
              <Textarea
                id="faq"
                rows={4}
                value={draft.faq}
                onChange={(e) => setDraft({ ...draft, faq: e.target.value })}
                placeholder="Quem tem direito? :: Depende da análise do caso concreto."
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="seoTitle">Título para o Google (opcional)</Label>
                <Input
                  id="seoTitle"
                  value={draft.seo_title}
                  onChange={(e) => setDraft({ ...draft, seo_title: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="metaDesc">Descrição para o Google (opcional)</Label>
                <Input
                  id="metaDesc"
                  value={draft.meta_description}
                  onChange={(e) =>
                    setDraft({ ...draft, meta_description: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="flex items-center gap-3 py-2">
              <Switch
                id="published"
                checked={draft.published}
                onCheckedChange={(v) => setDraft({ ...draft, published: v })}
              />
              <Label htmlFor="published">
                {draft.published ? "Publicado no site" : "Rascunho (não aparece no site)"}
              </Label>
            </div>

            <div className="flex gap-3">
              <Button onClick={savePost} disabled={saving}>
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : "Salvar"}
              </Button>
              <Button variant="outline" onClick={() => setDraft(null)}>
                Cancelar
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Administração do Blog
            </h1>
            <p className="text-muted-foreground font-body text-sm">
              {posts.length} {posts.length === 1 ? "artigo criado" : "artigos criados"} pelo painel
            </p>
          </div>
          <Button onClick={() => setDraft({ ...emptyDraft })}>
            <Plus className="w-4 h-4 mr-2" /> Novo artigo
          </Button>
        </div>

        {posts.length === 0 ? (
          <Card className="p-8 text-center text-muted-foreground font-body">
            Nenhum artigo criado pelo painel ainda. Clique em "Novo artigo" para começar.
          </Card>
        ) : (
          <div className="space-y-3">
            {posts.map((post) => (
              <Card key={post.id} className="p-4 flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                        post.published
                          ? "bg-primary/15 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {post.published ? "Publicado" : "Rascunho"}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.category}</span>
                  </div>
                  <h2 className="font-display font-semibold text-foreground truncate mt-1">
                    {post.title}
                  </h2>
                  <p className="text-xs text-muted-foreground truncate">/blog/{post.slug}</p>
                </div>
                <div className="flex items-center gap-2">
                  {post.published && (
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/blog/${post.slug}`} target="_blank">
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </Button>
                  )}
                  <Button variant="outline" size="sm" onClick={() => setDraft(toDraft(post))}>
                    <Pencil className="w-4 h-4 mr-1" /> Editar
                  </Button>
                  <Button variant="destructive" size="sm" onClick={() => deletePost(post)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogAdmin;
