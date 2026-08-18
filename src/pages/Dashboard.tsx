import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Eye,
  Share2,
  Star,
  Loader2,
  Smartphone,
  Tablet,
  Monitor,
  Globe,
} from "lucide-react";

const FUNCTIONS_URL = `https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.supabase.co/functions/v1/dashboard-stats`;

type PageRow = {
  slug: string;
  title: string | null;
  views: number;
  views7d: number;
  views30d: number;
  shares: number;
};

type Stats = {
  totals: {
    views: number;
    views7d: number;
    views30d: number;
    shares: number;
    shares7d: number;
    reviewsTotal: number;
    reviews7d: number;
    siteVisits: number;
    siteVisits7d: number;
  };
  pages: PageRow[];
  sharesByNetwork: Record<string, number>;
  devices: Record<string, number>;
  sources: { source: string; total: number; last7d: number }[];
  campaigns: { campaign: string; count: number }[];
  topPaths: { path: string; title: string | null; visits: number; visits7d: number }[];
  referrers: { source: string; count: number }[];
  daily: { date: string; views: number; shares: number }[];
};

const networkLabels: Record<string, string> = {
  whatsapp: "WhatsApp",
  facebook: "Facebook",
  linkedin: "LinkedIn",
  twitter: "X (Twitter)",
  telegram: "Telegram",
  email: "E-mail",
  copy: "Copiar link",
  native: "Compartilhar",
};

const Dashboard = () => {
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

  const maxDaily = stats
    ? Math.max(1, ...stats.daily.map((d) => d.views + d.shares))
    : 1;

  return (
    <div className="min-h-screen bg-background py-12 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-2">
          Painel de desempenho
        </h1>
        <p className="text-muted-foreground font-body mb-8 text-sm sm:text-base">
          Visitas, compartilhamentos, avaliações e páginas mais visitadas.
        </p>

        <form onSubmit={fetchStats} className="flex flex-col sm:flex-row gap-3 mb-10">
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha de acesso"
            required
            className="sm:max-w-xs"
          />
          <Button type="submit" disabled={loading}>
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Ver dados"}
          </Button>
        </form>

        {error && (
          <p className="text-destructive font-body mb-8" role="alert">
            {error}
          </p>
        )}

        {stats && (
          <div className="space-y-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="p-5">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Eye className="w-4 h-4" />
                  <span className="text-xs font-body uppercase">Visitas totais</span>
                </div>
                <p className="text-2xl font-display font-bold">{stats.totals.views}</p>
                <p className="text-xs text-muted-foreground font-body mt-1">
                  {stats.totals.views7d} nos últimos 7 dias
                </p>
              </Card>
              <Card className="p-5">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Eye className="w-4 h-4" />
                  <span className="text-xs font-body uppercase">Últimos 30 dias</span>
                </div>
                <p className="text-2xl font-display font-bold">{stats.totals.views30d}</p>
              </Card>
              <Card className="p-5">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Share2 className="w-4 h-4" />
                  <span className="text-xs font-body uppercase">Compartilhamentos</span>
                </div>
                <p className="text-2xl font-display font-bold">{stats.totals.shares}</p>
                <p className="text-xs text-muted-foreground font-body mt-1">
                  {stats.totals.shares7d} nos últimos 7 dias
                </p>
              </Card>
              <Card className="p-5">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Star className="w-4 h-4" />
                  <span className="text-xs font-body uppercase">Cliques em avaliar</span>
                </div>
                <p className="text-2xl font-display font-bold">{stats.totals.reviewsTotal}</p>
                <p className="text-xs text-muted-foreground font-body mt-1">
                  {stats.totals.reviews7d} nos últimos 7 dias
                </p>
              </Card>
            </div>

            <Card className="p-5 sm:p-6">
              <h2 className="font-display font-semibold mb-4">
                Atividade diária (30 dias)
              </h2>
              {stats.daily.length === 0 ? (
                <p className="text-muted-foreground font-body text-sm">Sem dados ainda.</p>
              ) : (
                <div className="flex items-end gap-1 h-40 overflow-x-auto">
                  {stats.daily.map((d) => (
                    <div
                      key={d.date}
                      className="flex flex-col justify-end items-center gap-1 min-w-[14px] flex-1 h-full"
                      title={`${d.date}: ${d.views} visitas, ${d.shares} compartilhamentos`}
                    >
                      <div
                        className="w-full bg-primary/70 rounded-t"
                        style={{ height: `${(d.views / maxDaily) * 100}%` }}
                      />
                      <div
                        className="w-full bg-accent rounded-t"
                        style={{ height: `${(d.shares / maxDaily) * 100}%` }}
                      />
                    </div>
                  ))}
                </div>
              )}
              <div className="flex gap-4 mt-3 text-xs font-body text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded bg-primary/70 inline-block" /> Visitas
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded bg-accent inline-block" /> Compartilhamentos
                </span>
              </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <Card className="p-5">
                <h2 className="font-display font-semibold mb-4">Dispositivos</h2>
                <ul className="space-y-2 font-body text-sm">
                  <li className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4 text-muted-foreground" /> Celular
                    </span>
                    <strong>{stats.devices.mobile ?? 0}</strong>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Tablet className="w-4 h-4 text-muted-foreground" /> Tablet
                    </span>
                    <strong>{stats.devices.tablet ?? 0}</strong>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Monitor className="w-4 h-4 text-muted-foreground" /> Computador
                    </span>
                    <strong>{stats.devices.desktop ?? 0}</strong>
                  </li>
                </ul>
              </Card>

              <Card className="p-5">
                <h2 className="font-display font-semibold mb-4">Compartilhamentos por rede</h2>
                {Object.keys(stats.sharesByNetwork).length === 0 ? (
                  <p className="text-muted-foreground font-body text-sm">Sem dados ainda.</p>
                ) : (
                  <ul className="space-y-2 font-body text-sm">
                    {Object.entries(stats.sharesByNetwork)
                      .sort((a, b) => b[1] - a[1])
                      .map(([network, count]) => (
                        <li key={network} className="flex items-center justify-between">
                          <span>{networkLabels[network] ?? network}</span>
                          <strong>{count}</strong>
                        </li>
                      ))}
                  </ul>
                )}
              </Card>

              <Card className="p-5">
                <h2 className="font-display font-semibold mb-4">Campanhas (UTM)</h2>
                {stats.campaigns.length === 0 ? (
                  <p className="text-muted-foreground font-body text-sm">Sem campanhas ainda.</p>
                ) : (
                  <ul className="space-y-2 font-body text-sm">
                    {stats.campaigns.map((c) => (
                      <li key={c.campaign} className="flex items-center justify-between gap-2">
                        <span className="truncate">{c.campaign}</span>
                        <strong>{c.count}</strong>
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            </div>

            <Card className="p-5 sm:p-6">
              <h2 className="font-display font-semibold mb-1">Origem do tráfego</h2>
              <p className="text-xs text-muted-foreground font-body mb-4">
                De onde os visitantes chegam (Google, Facebook, WhatsApp, direto...).
              </p>
              {stats.sources.length === 0 ? (
                <p className="text-muted-foreground font-body text-sm">
                  Sem dados ainda — as visitas começam a ser registradas após a publicação.
                </p>
              ) : (
                <ul className="space-y-3 font-body text-sm">
                  {stats.sources.map((s) => {
                    const pct = stats.totals.siteVisits
                      ? Math.round((s.total / stats.totals.siteVisits) * 100)
                      : 0;
                    return (
                      <li key={s.source}>
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="flex items-center gap-2 truncate">
                            <Globe className="w-4 h-4 text-muted-foreground shrink-0" />
                            <span className="truncate">{s.source}</span>
                          </span>
                          <span className="text-muted-foreground shrink-0">
                            {s.last7d} em 7d · <strong className="text-foreground">{s.total}</strong>{" "}
                            ({pct}%)
                          </span>
                        </div>
                        <div className="h-2 rounded bg-muted overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: `${pct}%` }} />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </Card>

            <Card className="p-5 sm:p-6">
              <h2 className="font-display font-semibold mb-4">Páginas do site mais visitadas</h2>
              {stats.topPaths.length === 0 ? (
                <p className="text-muted-foreground font-body text-sm">Sem dados ainda.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm font-body">
                    <thead>
                      <tr className="text-left text-muted-foreground border-b border-border">
                        <th className="py-2 pr-4">Página</th>
                        <th className="py-2 px-2 text-right">Visitas</th>
                        <th className="py-2 pl-2 text-right">7d</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stats.topPaths.map((p) => (
                        <tr key={p.path} className="border-b border-border/50">
                          <td className="py-2 pr-4">
                            <a
                              href={p.path}
                              className="hover:underline text-foreground"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {p.title || p.path}
                            </a>
                            <span className="block text-xs text-muted-foreground">{p.path}</span>
                          </td>
                          <td className="py-2 px-2 text-right font-semibold">{p.visits}</td>
                          <td className="py-2 pl-2 text-right">{p.visits7d}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </Card>

            <Card className="p-5 sm:p-6">
              <h2 className="font-display font-semibold mb-4">Páginas mais visitadas</h2>
              {stats.pages.length === 0 ? (
                <p className="text-muted-foreground font-body text-sm">Sem dados ainda.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm font-body">
                    <thead>
                      <tr className="text-left text-muted-foreground border-b border-border">
                        <th className="py-2 pr-4">Página</th>
                        <th className="py-2 px-2 text-right">Visitas</th>
                        <th className="py-2 px-2 text-right">7d</th>
                        <th className="py-2 px-2 text-right">30d</th>
                        <th className="py-2 pl-2 text-right">Compart.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stats.pages.map((p) => (
                        <tr key={p.slug} className="border-b border-border/50">
                          <td className="py-2 pr-4">
                            <a
                              href={`/blog/${p.slug}`}
                              className="hover:underline text-foreground"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {p.title || p.slug}
                            </a>
                          </td>
                          <td className="py-2 px-2 text-right font-semibold">{p.views}</td>
                          <td className="py-2 px-2 text-right">{p.views7d}</td>
                          <td className="py-2 px-2 text-right">{p.views30d}</td>
                          <td className="py-2 pl-2 text-right">{p.shares}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
