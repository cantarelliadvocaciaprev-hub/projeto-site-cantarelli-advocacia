import { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Loader2, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import type { BlogArticle } from "@/data/blogArticles";

type Result = { summary: string; articles: { slug: string; reason: string }[] };

const ArticleAssistant = ({ articles }: { articles: BlogArticle[] }) => {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim().length < 10) {
      setError("Descreva sua dúvida com um pouco mais de detalhes.");
      return;
    }
    setLoading(true);
    setError(null);
    setResult(null);
    const { data, error: fnError } = await supabase.functions.invoke("recommend-articles", {
      body: {
        question,
        articles: articles.map((a) => ({
          slug: a.slug,
          title: a.title,
          category: a.category,
          excerpt: a.excerpt,
        })),
      },
    });
    setLoading(false);
    if (fnError || data?.error) {
      let msg = data?.error;
      try {
        msg = msg ?? (await (fnError as any)?.context?.json())?.error;
      } catch { /* ignore */ }
      setError(msg ?? "Não foi possível analisar sua dúvida agora. Tente novamente.");
      return;
    }
    setResult(data as Result);
  };

  const bySlug = new Map(articles.map((a) => [a.slug, a]));

  return (
    <section className="max-w-3xl mx-auto mb-10 rounded-2xl border border-primary/30 bg-card p-5 md:p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="w-5 h-5 text-primary" />
        <h2 className="text-lg md:text-xl font-display font-bold text-foreground">
          Conte sua dúvida e indicamos os artigos certos
        </h2>
      </div>
      <p className="text-sm text-muted-foreground font-body mb-4">
        Descreva sua situação com o INSS. Nosso assistente resume e indica os artigos do blog que mais ajudam.
      </p>
      <form onSubmit={submit} className="space-y-3">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          maxLength={1000}
          rows={3}
          placeholder="Ex.: Meu auxílio-doença foi cortado depois da perícia, o que pode ter acontecido?"
          className="w-full p-3 rounded-xl border border-border bg-background text-foreground font-body text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary/40"
          aria-label="Descreva sua dúvida previdenciária"
        />
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs text-muted-foreground">Não informe dados pessoais como CPF.</span>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 disabled:opacity-60 transition-colors"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
            {loading ? "Analisando..." : "Indicar artigos"}
          </button>
        </div>
      </form>

      {error && <p className="mt-4 text-sm text-destructive">{error}</p>}

      {result && (
        <div className="mt-5 space-y-4" aria-live="polite">
          <p className="text-sm md:text-base text-foreground font-body leading-relaxed">{result.summary}</p>
          {result.articles.length > 0 && (
            <ul className="space-y-3">
              {result.articles.map((r) => {
                const a = bySlug.get(r.slug);
                if (!a) return null;
                return (
                  <li key={r.slug}>
                    <Link
                      to={`/blog/${r.slug}`}
                      className="group flex gap-3 p-3 rounded-xl border border-border bg-background hover:border-primary transition-colors"
                    >
                      <img src={a.image} alt={a.imageAlt} className="w-20 h-14 object-cover rounded-md flex-shrink-0" loading="lazy" />
                      <div className="min-w-0">
                        <p className="text-sm font-display font-bold text-foreground group-hover:text-primary line-clamp-2">{a.title}</p>
                        <p className="text-xs text-muted-foreground font-body mt-1">{r.reason}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary self-center flex-shrink-0" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
          <a
            href="https://wa.me/5581983421727"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            Fale com especialista <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-[11px] text-muted-foreground">
            Resumo gerado automaticamente, apenas informativo. Não substitui a análise de um advogado.
          </p>
        </div>
      )}
    </section>
  );
};

export default ArticleAssistant;
