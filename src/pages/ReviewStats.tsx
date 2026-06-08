import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Smartphone, Tablet, Monitor, MousePointerClick, CheckCircle2, Loader2 } from "lucide-react";

const FUNCTIONS_URL = `https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.supabase.co/functions/v1/review-stats`;

type DeviceBreakdown = { mobile: number; tablet: number; desktop: number; total: number };
type Stats = {
  clicks: DeviceBreakdown;
  returns: DeviceBreakdown;
  conversion: DeviceBreakdown;
  totalEvents: number;
};

const deviceMeta = [
  { key: "mobile" as const, label: "Celular", Icon: Smartphone },
  { key: "tablet" as const, label: "Tablet", Icon: Tablet },
  { key: "desktop" as const, label: "Desktop", Icon: Monitor },
];

const ReviewStats = () => {
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
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-display font-bold text-foreground mb-2">
          Avaliações no Google — Cliques & Conclusões
        </h1>
        <p className="text-muted-foreground font-body mb-8">
          Acompanhe quantas pessoas clicam no botão "Avaliar no Google" e quantas voltam ao
          site após avaliar (estimativa de conclusão), separado por dispositivo.
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="p-5">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <MousePointerClick className="w-4 h-4" />
                  <span className="text-sm">Total de cliques</span>
                </div>
                <p className="text-3xl font-bold text-foreground">{stats.clicks.total}</p>
              </Card>
              <Card className="p-5">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-sm">Conclusões estimadas</span>
                </div>
                <p className="text-3xl font-bold text-foreground">{stats.returns.total}</p>
              </Card>
              <Card className="p-5">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <span className="text-sm">Taxa de conclusão</span>
                </div>
                <p className="text-3xl font-bold text-foreground">{stats.conversion.total}%</p>
              </Card>
            </div>

            <Card className="p-5">
              <h2 className="font-display font-bold text-foreground mb-4">Por dispositivo</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-muted-foreground border-b border-border">
                      <th className="py-2 font-medium">Dispositivo</th>
                      <th className="py-2 font-medium text-right">Cliques</th>
                      <th className="py-2 font-medium text-right">Conclusões</th>
                      <th className="py-2 font-medium text-right">Taxa</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deviceMeta.map(({ key, label, Icon }) => (
                      <tr key={key} className="border-b border-border/50">
                        <td className="py-3 flex items-center gap-2 text-foreground">
                          <Icon className="w-4 h-4 text-primary" /> {label}
                        </td>
                        <td className="py-3 text-right text-foreground">{stats.clicks[key]}</td>
                        <td className="py-3 text-right text-foreground">{stats.returns[key]}</td>
                        <td className="py-3 text-right text-foreground">{stats.conversion[key]}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <p className="text-xs text-muted-foreground font-body">
              "Conclusões estimadas" = pessoas que voltaram ao site em até 30 min após clicar.
              A conclusão real da avaliação acontece dentro do Google e não pode ser medida
              com 100% de certeza.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewStats;
