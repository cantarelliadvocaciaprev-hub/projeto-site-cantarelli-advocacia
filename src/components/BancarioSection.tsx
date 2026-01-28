import { Shield, AlertTriangle, FileText, TrendingUp, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BancarioSection = () => {
  const { isVisible, elementRef } = useScrollAnimation(0.1);

  const comparisonData = [
    {
      criterion: "Tipo de Benefício",
      b31: "Auxílio-Doença (B31)",
      b91: "Auxílio-Acidente (B91)",
    },
    {
      criterion: "Natureza",
      b31: "Temporário - durante incapacidade",
      b91: "Permanente - indenização vitalícia",
    },
    {
      criterion: "Valor",
      b31: "91% da média salarial",
      b91: "50% do salário de benefício",
    },
    {
      criterion: "Depósitos FGTS",
      b31: "Mantidos durante afastamento",
      b91: "Mantidos + direito a recolhimento",
    },
    {
      criterion: "Estabilidade",
      b31: "12 meses após alta médica",
      b91: "Estabilidade provisória garantida",
    },
    {
      criterion: "Acúmulo",
      b31: "Não acumula com trabalho",
      b91: "Acumula com salário e aposentadoria",
    },
  ];

  const conditions = [
    {
      title: "LER/DORT",
      description: "Lesão por Esforço Repetitivo / Distúrbio Osteomuscular",
      technical: "CID M70-M79 - Doenças dos tecidos moles",
    },
    {
      title: "Síndrome de Burnout",
      description: "Esgotamento profissional por metas abusivas",
      technical: "CID-11 QD85 (anteriormente Z73.0)",
    },
    {
      title: "Transtornos de Ansiedade",
      description: "Causados por pressão e assédio moral",
      technical: "CID F41 - Transtornos ansiosos",
    },
    {
      title: "Depressão Ocupacional",
      description: "Decorrente do ambiente de trabalho bancário",
      technical: "CID F32/F33 - Episódios depressivos",
    },
  ];

  return (
    <section id="bancarios" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Direitos Previdenciários para Bancários
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
            Especialistas em Auxílio-Acidente e benefícios para trabalhadores do setor bancário 
            afastados por LER/DORT, Burnout e doenças ocupacionais.
          </p>
        </div>

        {/* AI Snippet Box - Snippet-First Architecture */}
        <div 
          id="ai-snippet-bancarios"
          className="max-w-4xl mx-auto mb-12 bg-[#f8f9fa] dark:bg-muted/30 border-l-4 border-primary rounded-lg p-6"
          itemScope
          itemType="https://schema.org/Article"
        >
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              Direto ao Ponto
            </span>
          </div>
          <p 
            className="text-lg md:text-xl text-foreground font-body leading-relaxed"
            itemProp="description"
            style={{ fontSize: '18px' }}
          >
            <strong>Bancários com LER/DORT ou Síndrome de Burnout têm direito ao Auxílio-Acidente (B91)</strong>, 
            benefício permanente que paga 50% do salário e acumula com aposentadoria. 
            O Nexo Concausal comprova a relação entre a doença e as metas abusivas do banco, 
            garantindo também estabilidade de 12 meses e continuidade dos depósitos de FGTS.
          </p>
          <div className="flex items-center gap-2 mt-4 pt-3 border-t border-primary/20">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-xs text-muted-foreground font-body">
              Revisado por <strong className="text-foreground">Dr. Thiago Cantarelli</strong> • Janeiro 2026
            </span>
          </div>
        </div>

        {/* Technical Keywords for SEO - Hidden but crawlable */}
        <div className="sr-only" aria-hidden="true">
          <span>Nexo Concausal</span>
          <span>CID-11 QD85 Burnout</span>
          <span>CID-11 Z73.0</span>
          <span>Metas Abusivas Bancários</span>
          <span>LER DORT Bancário</span>
          <span>Auxílio-Acidente Bancário</span>
          <span>B91 Benefício INSS</span>
        </div>

        {/* Conditions Grid */}
        <div 
          ref={elementRef}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 animate-slide-up-scroll' : 'opacity-0'
          }`}
        >
          {conditions.map((condition, index) => (
            <div 
              key={index}
              className="bg-background p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-lg font-display font-bold text-foreground mb-2">
                {condition.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body mb-3">
                {condition.description}
              </p>
              <div className="bg-primary/5 px-3 py-2 rounded text-xs font-mono text-primary">
                {condition.technical}
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table B31 vs B91 */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-2xl font-display font-bold text-foreground text-center mb-8">
            Comparativo: Auxílio-Doença (B31) vs Auxílio-Acidente (B91)
          </h3>
          <div className="bg-background rounded-xl border border-border overflow-hidden shadow-lg">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary/5">
                  <TableHead className="font-display font-bold text-foreground">Critério</TableHead>
                  <TableHead className="font-display font-bold text-foreground">Auxílio-Doença (B31)</TableHead>
                  <TableHead className="font-display font-bold text-primary">Auxílio-Acidente (B91)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow key={index} className="hover:bg-muted/50">
                    <TableCell className="font-semibold text-foreground">{row.criterion}</TableCell>
                    <TableCell className="text-muted-foreground">{row.b31}</TableCell>
                    <TableCell className="text-primary font-medium">{row.b91}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Rights Highlights */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-display font-bold text-foreground text-center mb-8">
            Seus Direitos como Bancário Afastado
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-lg border-2 border-primary/30 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-display font-bold text-foreground mb-2">
                FGTS Mantido
              </h4>
              <p className="text-sm text-muted-foreground font-body">
                Depósitos continuam durante todo o período de afastamento
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border-2 border-primary/30 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-display font-bold text-foreground mb-2">
                Estabilidade 12 Meses
              </h4>
              <p className="text-sm text-muted-foreground font-body">
                Proteção contra demissão após retorno ao trabalho
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border-2 border-primary/30 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-display font-bold text-foreground mb-2">
                Indenização 50%
              </h4>
              <p className="text-sm text-muted-foreground font-body">
                Auxílio-Acidente vitalício que acumula com salário
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={() => window.open("https://wa.me/5581995441368?text=Olá,%20sou%20bancário%20e%20gostaria%20de%20saber%20sobre%20meus%20direitos%20previdenciários.", "_blank")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
          >
            Avaliar meus direitos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BancarioSection;
