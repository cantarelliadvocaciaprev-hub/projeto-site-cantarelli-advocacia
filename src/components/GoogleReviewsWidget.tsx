import { useEffect } from "react";

// 🔧 Cole aqui o ID do seu widget Elfsight (parte após "elfsight-app-")
// Exemplo: se o código do Elfsight for class="elfsight-app-abc123-def456",
// use: const ELFSIGHT_WIDGET_ID = "abc123-def456";
const ELFSIGHT_WIDGET_ID = "199ea5a9a1b74b98b1d0e033f25a7d98";

const GoogleReviewsWidget = () => {
  useEffect(() => {
    if (document.querySelector('script[src*="elfsight.com/platform"]')) return;
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const isConfigured =
    ELFSIGHT_WIDGET_ID && ELFSIGHT_WIDGET_ID !== "PASTE_YOUR_ELFSIGHT_ID_HERE";

  return (
    <div className="max-w-5xl mx-auto mt-12">
      <div className="text-center mb-6">
        <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
          Avaliações reais no Google
        </h3>
        <div className="w-16 h-1 bg-primary mx-auto mt-3"></div>
      </div>

      {isConfigured ? (
        <div
          className={`elfsight-app-${ELFSIGHT_WIDGET_ID}`}
          data-elfsight-app-lazy
        />
      ) : (
        <div className="border border-dashed border-border rounded-lg p-8 text-center bg-card">
          <p className="text-muted-foreground font-body">
            Widget de avaliações do Google pronto para configurar.
            <br />
            Cole o ID do Elfsight em{" "}
            <code className="text-primary">src/components/GoogleReviewsWidget.tsx</code>.
          </p>
        </div>
      )}
    </div>
  );
};

export default GoogleReviewsWidget;
