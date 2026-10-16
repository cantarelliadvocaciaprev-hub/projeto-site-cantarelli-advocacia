import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Loader2,
  Search,
  Sparkles,
  ExternalLink,
  TrendingUp,
  Copy,
  Check,
} from "lucide-react";

const FUNCTIONS_URL = `https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.supabase.co/functions/v1/search-queries`;

type Query = {
  query: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
};

type Page = {
  page: string;
  clicks: number;
  impressions: number;
  avgPosition: number;
  queries: Query[];
};

type Suggestion = { title: string; description: string; rationale: string };

const SearchQueries = () => {
  const [password, setPassword] = useState("");
  const [pages, setPages] = useState<Page[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [suggesting, setSuggesting] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<Record<string, Suggestion>>({});
  const [sugErrors, setSugErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState<string | null>(null);

  const callApi = async (bodyExtra: Record<string, unknown> = {}) => {
    const res = await fetch(FUNCTIONS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({ password, ...bodyExtra }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Erro ao chamar a API.");
    return data;
  };

  const fetchData = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const data = await callApi({ action: "list" });
      setPages(data.pages ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao carregar dados.");
      setPages(null);
    } finally {
      setLoading(false);
    }
  };

  const requestSuggestion = async (page: Page) => {
    setSuggesting(page.page);
    setSugErrors((prev) => ({ ...prev, [page.page]: "" }));
    try {
      const data = await callApi({
        action: "suggest",
        page: page.page,
        queries: page.queries,
      });
      setSuggestions((prev) => ({ ...prev, [page.page]: data.suggestion }));
    } catch (err) {
      setSugErrors((prev) => ({
        ...prev,
        [page.page]: err instanceof Error ? err.message : "Erro ao gerar sugestão.",
      }));
    } finally {
      setSuggesting(null);
    }
  };

  const copyText = async (key: string, value: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(key);
    setTimeout(() => setCopied((c) => (c === key ? null : c)), 1500);
  };

  const relPath = (url: string) => {
    try { return new URL(url).pathname; } catch { return url; }
  };

  return (
    <div className="min-h-screen bg-background py-12 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground flex items-center gap-2">
            <Search className="w-6 h-6" />
            Buscas do Google por artigo
          </h1>
          <Button variant="outline" size="sm" asChild>
            <Link to="/admin/painel">Voltar ao painel</Link>
          </Button>
        </div>
        <p className="text-muted-foreground font-body mb-8 text-sm sm:text-base">
          Para cada artigo do blog, as buscas do Google que mais trouxeram visitantes nos últimos 28 dias.
          Clique em "Sugerir título e descrição" para a IA propor um novo título e meta descrição com base
          nessas buscas, respeitando as regras da OAB.
        </p>

        <form onSubmit={fetchData} className="flex flex-col sm:flex-row gap-3 mb-10">
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha de acesso"
            required
            className="sm:max-w-xs"
          />
          <Button type="submit" disabled={loading}>
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Ver buscas"}
          </Button>
        </form>

        {error && (
          <p className="text-destructive font-body mb-8" role="alert">{error}</p>
        )}

        {pages && pages.length === 0 && (
          <p className="text-muted-foreground font-body">
            Ainda não há dados do Google Search Console para os artigos. Pode levar alguns dias para o
            Google indexar e começar a reportar buscas.
          </p>
        )}

        {pages && pages.length > 0 && (
          <div className="space-y-5">
            {pages.map((p) => {
              const suggestion = suggestions[p.page];
              const sugErr = sugErrors[p.page];
              const isLoading = suggesting === p.page;
              return (
                <Card key={p.page} className="p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div className="min-w-0">
                      <a
                        href={p.page}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display font-semibold text-foreground hover:text-primary inline-flex items-center gap-1 break-all"
                      >
                        {relPath(p.page)}
                        <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                      </a>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="secondary" className="font-body">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          {p.impressions} impressões
                        </Badge>
                        <Badge variant="secondary" className="font-body">
                          {p.clicks} cliques
                        </Badge>
                        <Badge variant="secondary" className="font-body">
                          Posição média {p.avgPosition.toFixed(1)}
                        </Badge>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => requestSuggestion(p)}
                      disabled={isLoading}
                      className="shrink-0"
                    >
                      {isLoading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 mr-1.5" />
                          {suggestion ? "Gerar nova sugestão" : "Sugerir título e descrição"}
                        </>
                      )}
                    </Button>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-xs font-body uppercase text-muted-foreground mb-2">
                      Buscas que mais trouxeram esta página
                    </h3>
                    <ul className="space-y-1 font-body text-sm">
                      {p.queries.map((q) => (
                        <li
                          key={q.query}
                          className="flex items-center justify-between gap-2 border-b border-border/40 pb-1"
                        >
                          <span className="truncate">{q.query}</span>
                          <span className="text-xs text-muted-foreground shrink-0">
                            {q.impressions} impr. · {q.clicks} cliques · pos. {q.position.toFixed(1)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {sugErr && (
                    <p className="text-destructive text-sm font-body">{sugErr}</p>
                  )}

                  {suggestion && (
                    <div className="rounded-md border border-primary/30 bg-primary/5 p-4 space-y-3">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-xs font-body uppercase text-muted-foreground">
                            Título sugerido · {suggestion.title.length} caracteres
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyText(`t:${p.page}`, suggestion.title)}
                          >
                            {copied === `t:${p.page}` ? (
                              <Check className="w-3.5 h-3.5" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </Button>
                        </div>
                        <p className="font-display font-semibold text-foreground">
                          {suggestion.title}
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-xs font-body uppercase text-muted-foreground">
                            Meta descrição · {suggestion.description.length} caracteres
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyText(`d:${p.page}`, suggestion.description)}
                          >
                            {copied === `d:${p.page}` ? (
                              <Check className="w-3.5 h-3.5" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </Button>
                        </div>
                        <p className="font-body text-sm text-foreground">
                          {suggestion.description}
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground font-body italic">
                        {suggestion.rationale}
                      </p>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchQueries;
