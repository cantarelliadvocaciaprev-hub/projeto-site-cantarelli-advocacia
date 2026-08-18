import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Eye, Share2, Loader2, CalendarDays } from "lucide-react";

const FUNCTIONS_URL = `https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.supabase.co/functions/v1/article-stats`;

type ArticleRow = {
  slug: string;
  title: string | null;
  views: number;
  views7d: number;
  views30d: number;
  mobile: number;
  tablet: number;
  desktop: number;
  shares: number;
};

type Stats = {
  totals: { views: number; views7d: number; views30d: number; shares: number };
  articles: ArticleRow[];
  sharesByNetwork: Record<string, number>;
};

const ArticleStats = () => {
  const [password, setPassword] = useState("");
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchStats = async (e: React.FormEvent) => {
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
        setError(data.error || "Erro ao carregar dados.");
        setStats(null);
      } else {
        setStats(data);
      }
    } catch {
      setError("Falha de conexão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-display font-bold text-foreground mb-2">
          Blog — Leituras por artigo
        </h1>
        <p className="text-muted-foreground font-body mb-8">
          Veja quais artigos os visitantes mais leem, por período, dispositivo e
          quantidade de compartilhamentos.
        </p>

        <form onSubmit={fetchStats} className="flex flex-col sm:flex-row gap-3 mb-10">
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha de acesso"
            required
          />
          <Button type="submit" disabled={loading}>
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Ver dados"}
          </Button>
        </form>

        {error && <p className="text-destructive font-body mb-6">{error}</p>}

        {stats && (
          <div className="space-y-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="p-5">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">Leituras (total)</span>
                </div>
                <p className="text-3xl font-bold text-foreground">{stats.totals.views}</p>
              </Card>
              <Card className="p-5">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <CalendarDays className="w-4 h-4" />
                  <span className="text-sm">Últimos 7 dias</span>
                </div>
                <p className="text-3xl font-bold text-foreground">{stats.totals.views7d}</p>
              </Card>
              <Card className="p-5">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <CalendarDays className="w-4 h-4" />
                  <span className="text-sm">Últimos 30 dias</span>
                </div>
                <p className="text-3xl font-bold text-foreground">{stats.totals.views30d}</p>
              </Card>
              <Card className="p-5">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Share2 className="w-4 h-4" />
                  <span className="text-sm">Compartilhamentos</span>
                </div>
                <p className="text-3xl font-bold text-foreground">{stats.totals.shares}</p>
              </Card>
            </div>

            {Object.keys(stats.sharesByNetwork).length > 0 && (
              <Card className="p-5">
                <h2 className="font-display font-bold text-foreground mb-4">
                  Compartilhamentos por rede
                </h2>
                <div className="flex flex-wrap gap-3">
                  {Object.entries(stats.sharesByNetwork).map(([network, count]) => (
                    <span
                      key={network}
                      className="px-3 py-1.5 rounded-full border border-border bg-card text-sm font-body text-foreground"
                    >
                      {network}: <strong>{count}</strong>
                    </span>
                  ))}
                </div>
              </Card>
            )}

            <Card className="p-5">
              <h2 className="font-display font-bold text-foreground mb-4">
                Ranking de artigos
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-muted-foreground border-b border-border">
                      <th className="py-2 font-medium">Artigo</th>
                      <th className="py-2 font-medium text-right">Leituras</th>
                      <th className="py-2 font-medium text-right">7d</th>
                      <th className="py-2 font-medium text-right">30d</th>
                      <th className="py-2 font-medium text-right">Celular</th>
                      <th className="py-2 font-medium text-right">Desktop</th>
                      <th className="py-2 font-medium text-right">Compart.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats.articles.map((a) => (
                      <tr key={a.slug} className="border-b border-border/60">
                        <td className="py-2 pr-4">
                          <a
                            href={`/blog/${a.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-primary font-body"
                          >
                            {a.title ?? a.slug}
                          </a>
                        </td>
                        <td className="py-2 text-right font-semibold">{a.views}</td>
                        <td className="py-2 text-right">{a.views7d}</td>
                        <td className="py-2 text-right">{a.views30d}</td>
                        <td className="py-2 text-right">{a.mobile}</td>
                        <td className="py-2 text-right">{a.desktop}</td>
                        <td className="py-2 text-right">{a.shares}</td>
                      </tr>
                    ))}
                    {stats.articles.length === 0 && (
                      <tr>
                        <td colSpan={7} className="py-6 text-center text-muted-foreground">
                          Ainda não há leituras registradas.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleStats;
