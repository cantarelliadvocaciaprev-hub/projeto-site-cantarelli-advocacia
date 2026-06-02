import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  getCurrentManifest,
  diffManifests,
  type ContentManifest,
  type Divergence,
} from "@/lib/contentFingerprint";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  CheckCircle2,
  RefreshCw,
  Clock,
  PlusCircle,
  MinusCircle,
  FileWarning,
} from "lucide-react";

const TARGET_URL = "https://www.cantarelliadvocacia.com.br";

interface CheckResult {
  baseUrl: string;
  checkedAt: string;
  note: string | null;
  manifest: ContentManifest;
}

const DIVERGENCE_META: Record<
  Divergence["type"],
  { label: string; icon: typeof PlusCircle; className: string }
> = {
  missing: { label: "Não publicado", icon: PlusCircle, className: "text-amber-500" },
  extra: { label: "Removido no código", icon: MinusCircle, className: "text-destructive" },
  changed: { label: "Atualização divergente", icon: Clock, className: "text-blue-500" },
};

const DeployCheck = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<CheckResult | null>(null);
  const [divergences, setDivergences] = useState<Divergence[] | null>(null);

  const current = getCurrentManifest();

  const runCheck = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    setDivergences(null);
    try {
      const { data, error: fnError } = await supabase.functions.invoke("check-deployment", {
        body: { url: TARGET_URL },
      });
      if (fnError) throw fnError;
      if (data?.error) throw new Error(data.error);
      const res = data as CheckResult;
      setResult(res);
      setDivergences(diffManifests(current, res.manifest));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Falha na verificação.");
    } finally {
      setLoading(false);
    }
  };

  const isSynced = divergences !== null && divergences.length === 0;

  return (
    <main className="min-h-screen bg-background py-10 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
            Verificação de publicação
          </h1>
          <p className="text-muted-foreground font-body">
            Compara o conteúdo do código com o publicado em{" "}
            <span className="text-foreground">cantarelliadvocacia.com.br</span> e alerta
            sobre divergências.
          </p>
        </header>

        <Card className="p-5 md:p-6 mb-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="text-sm text-muted-foreground">Artigos no código (atual)</p>
              <p className="text-2xl font-display font-bold text-foreground">
                {current.articleCount}
              </p>
            </div>
            <Button onClick={runCheck} disabled={loading} className="gap-2">
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
              {loading ? "Verificando..." : "Verificar agora"}
            </Button>
          </div>
        </Card>

        {error && (
          <Card className="p-5 mb-6 border-destructive/40">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-display font-semibold text-foreground">Erro na verificação</p>
                <p className="text-sm text-muted-foreground">{error}</p>
              </div>
            </div>
          </Card>
        )}

        {result?.note && (
          <Card className="p-4 mb-6 border-amber-500/40">
            <div className="flex items-start gap-3">
              <FileWarning className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">{result.note}</p>
            </div>
          </Card>
        )}

        {result && divergences !== null && (
          <>
            <Card
              className={`p-5 md:p-6 mb-6 ${
                isSynced ? "border-green-500/40" : "border-amber-500/40"
              }`}
            >
              <div className="flex items-start gap-3">
                {isSynced ? (
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                )}
                <div className="flex-1">
                  <p className="font-display font-bold text-lg text-foreground">
                    {isSynced
                      ? "Tudo sincronizado"
                      : `${divergences.length} divergência(s) encontrada(s)`}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Publicado: {result.manifest.articleCount} artigo(s) · Código:{" "}
                    {current.articleCount} artigo(s) · Fonte:{" "}
                    {result.manifest.source === "version" ? "version.json" : "sitemap.xml"}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Verificado em {new Date(result.checkedAt).toLocaleString("pt-BR")}
                  </p>
                </div>
              </div>
            </Card>

            {divergences.length > 0 && (
              <div className="space-y-3">
                {divergences.map((d) => {
                  const meta = DIVERGENCE_META[d.type];
                  const Icon = meta.icon;
                  return (
                    <Card key={`${d.type}-${d.slug}`} className="p-4">
                      <div className="flex items-start gap-3">
                        <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${meta.className}`} />
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <Badge variant="outline" className={meta.className}>
                              {meta.label}
                            </Badge>
                            <span className="font-mono text-xs text-foreground break-all">
                              /blog/{d.slug}
                            </span>
                          </div>
                          {d.detail && (
                            <p className="text-sm text-muted-foreground mt-1">{d.detail}</p>
                          )}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default DeployCheck;
