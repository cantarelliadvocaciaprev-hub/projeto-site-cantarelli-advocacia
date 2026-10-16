import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, Loader2, Search, Smartphone, Tablet, Monitor, AlertCircle } from "lucide-react";
import { useAllArticles } from "@/hooks/useAllArticles";

const FUNCTIONS_URL = `https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.supabase.co/functions/v1/assistant-questions`;

type Question = {
  id: string;
  question: string;
  summary: string | null;
  matched_slugs: string[];
  matched_count: number;
  device_type: string | null;
  created_at: string;
};

const deviceIcon = (d: string | null) => {
  if (d === "mobile") return <Smartphone className="w-3.5 h-3.5" />;
  if (d === "tablet") return <Tablet className="w-3.5 h-3.5" />;
  return <Monitor className="w-3.5 h-3.5" />;
};

const AssistantQuestions = () => {
  const [password, setPassword] = useState("");
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "unanswered" | "answered">("all");

  const { articles } = useAllArticles();
  const articlesBySlug = useMemo(() => {
    const map = new Map<string, { title: string; category: string }>();
    for (const a of articles) map.set(a.slug, { title: a.title, category: a.category });
    return map;
  }, [articles]);

  const fetchQuestions = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(FUNCTIONS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Erro ao carregar dúvidas.");
        setQuestions(null);
      } else {
        setQuestions(data.questions ?? []);
      }
    } catch {
      setError("Falha de conexão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const stats = useMemo(() => {
    if (!questions) return null;
    const now = Date.now();
    const sevenDays = 7 * 24 * 60 * 60 * 1000;
    const last7d = questions.filter((q) => now - new Date(q.created_at).getTime() <= sevenDays).length;
    const unanswered = questions.filter((q) => q.matched_count === 0).length;
    const categoryCounts = new Map<string, number>();
    for (const q of questions) {
      for (const slug of q.matched_slugs) {
        const art = articlesBySlug.get(slug);
        if (art) categoryCounts.set(art.category, (categoryCounts.get(art.category) ?? 0) + 1);
      }
    }
    const topCategories = Array.from(categoryCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8);
    return { total: questions.length, last7d, unanswered, topCategories };
  }, [questions, articlesBySlug]);

  const filteredQuestions = useMemo(() => {
    if (!questions) return [];
    const term = search.trim().toLowerCase();
    return questions.filter((q) => {
      if (filter === "unanswered" && q.matched_count !== 0) return false;
      if (filter === "answered" && q.matched_count === 0) return false;
      if (!term) return true;
      const hay = `${q.question} ${q.summary ?? ""}`.toLowerCase();
      return hay.includes(term);
    });
  }, [questions, search, filter]);

  return (
    <div className="min-h-screen bg-background py-12 sm:py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground flex items-center gap-2">
            <HelpCircle className="w-6 h-6" />
            Dúvidas dos visitantes
          </h1>
          <Button variant="outline" size="sm" asChild>
            <Link to="/admin/painel">Voltar ao painel</Link>
          </Button>
        </div>
        <p className="text-muted-foreground font-body mb-8 text-sm sm:text-base">
          Perguntas enviadas no assistente do blog, com o resumo que o visitante recebeu e as categorias
          mais buscadas. Perguntas sem artigo correspondente são candidatas a virar novo conteúdo.
        </p>

        <form onSubmit={fetchQuestions} className="flex flex-col sm:flex-row gap-3 mb-10">
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha de acesso"
            required
            className="sm:max-w-xs"
          />
          <Button type="submit" disabled={loading}>
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Ver dúvidas"}
          </Button>
        </form>

        {error && (
          <p className="text-destructive font-body mb-8" role="alert">{error}</p>
        )}

        {questions && stats && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="p-5">
                <p className="text-xs font-body uppercase text-muted-foreground mb-1">Total de dúvidas</p>
                <p className="text-2xl font-display font-bold">{stats.total}</p>
              </Card>
              <Card className="p-5">
                <p className="text-xs font-body uppercase text-muted-foreground mb-1">Últimos 7 dias</p>
                <p className="text-2xl font-display font-bold">{stats.last7d}</p>
              </Card>
              <Card className="p-5 border-destructive/30">
                <p className="text-xs font-body uppercase text-destructive mb-1">Sem artigo correspondente</p>
                <p className="text-2xl font-display font-bold text-destructive">{stats.unanswered}</p>
                <p className="text-xs text-muted-foreground font-body mt-1">
                  Candidatas a virar novo post.
                </p>
              </Card>
            </div>

            {stats.topCategories.length > 0 && (
              <Card className="p-5 sm:p-6">
                <h2 className="font-display font-semibold mb-3">Categorias mais procuradas</h2>
                <div className="flex flex-wrap gap-2">
                  {stats.topCategories.map(([cat, n]) => (
                    <Badge key={cat} variant="secondary" className="font-body">
                      {cat} <span className="ml-1 text-muted-foreground">· {n}</span>
                    </Badge>
                  ))}
                </div>
              </Card>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar na dúvida ou no resumo..."
                  className="pl-9"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant={filter === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter("all")}
                >
                  Todas ({stats.total})
                </Button>
                <Button
                  type="button"
                  variant={filter === "unanswered" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter("unanswered")}
                >
                  Sem artigo ({stats.unanswered})
                </Button>
                <Button
                  type="button"
                  variant={filter === "answered" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter("answered")}
                >
                  Com artigo ({stats.total - stats.unanswered})
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {filteredQuestions.length === 0 ? (
                <p className="text-muted-foreground font-body text-sm">Nenhuma dúvida encontrada.</p>
              ) : (
                filteredQuestions.map((q) => {
                  const unanswered = q.matched_count === 0;
                  return (
                    <Card
                      key={q.id}
                      className={`p-5 ${unanswered ? "border-destructive/40" : ""}`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <p className="font-display font-semibold text-foreground flex-1">
                          {q.question}
                        </p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground font-body shrink-0">
                          {deviceIcon(q.device_type)}
                          <span>
                            {new Date(q.created_at).toLocaleString("pt-BR", {
                              day: "2-digit",
                              month: "2-digit",
                              year: "2-digit",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                      </div>

                      {q.summary && (
                        <p className="text-sm text-muted-foreground font-body mb-3 whitespace-pre-wrap">
                          {q.summary}
                        </p>
                      )}

                      {unanswered ? (
                        <div className="flex items-center gap-2 text-sm text-destructive font-body">
                          <AlertCircle className="w-4 h-4" />
                          Nenhum artigo correspondente — considerar criar conteúdo.
                        </div>
                      ) : (
                        <div className="flex flex-wrap gap-2">
                          {q.matched_slugs.map((slug) => {
                            const art = articlesBySlug.get(slug);
                            return (
                              <Link
                                key={slug}
                                to={`/blog/${slug}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex flex-col gap-0.5 px-3 py-2 rounded-md bg-muted hover:bg-muted/70 transition-colors max-w-full"
                              >
                                <span className="text-xs text-muted-foreground font-body">
                                  {art?.category ?? "Categoria desconhecida"}
                                </span>
                                <span className="text-sm font-body text-foreground truncate">
                                  {art?.title ?? slug}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </Card>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssistantQuestions;
