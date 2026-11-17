import type { BlogArticle } from "@/data/blogArticles";
import { Link } from "react-router-dom";
import { isoDate } from "@/lib/blogEditorial.mjs";

export const ArticleDates = ({ article }: { article: BlogArticle }) => {
  const published = isoDate(article.publishedAt);
  const updated = isoDate(article.updatedAt);
  return <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mb-4">
    {article.author && <span>Por {article.author}</span>}
    {published && <span>Publicado em <time dateTime={published}>{published.split("-").reverse().join("/")}</time></span>}
    {updated && <span>Atualizado em <time dateTime={updated}>{updated.split("-").reverse().join("/")}</time></span>}
  </div>;
};
export const QuickAnswer = ({ article }: { article: BlogArticle }) => article.quickAnswer ? <aside className="border-l-4 border-primary bg-primary/5 p-5 mb-6"><h2 className="font-display font-bold text-lg mb-2">Resposta rápida</h2><p className="text-foreground leading-relaxed">{article.quickAnswer}</p></aside> : null;
export const ArticleSources = ({ article }: { article: BlogArticle }) => <section className="container mx-auto px-4 py-6"><div className="max-w-4xl mx-auto">
  {(article.sources?.length ?? 0) > 0 && <><h2 className="text-xl font-display font-bold mb-4">Fontes e base legal</h2><ul className="space-y-3 mb-6">{article.sources?.map(source => <li key={source.url}><a className="text-primary underline break-words" href={source.url} target="_blank" rel="noopener noreferrer">{source.title}</a></li>)}</ul></>}
  {article.asOf && article.asOfSource && <p className="text-sm text-muted-foreground mb-6">Valores e regras em vigor em {article.asOf} — fonte: <a className="text-primary underline" href={article.asOfSource}>Fonte oficial</a></p>}
  <aside className="border-l-4 border-primary bg-muted p-5"><h2 className="font-display font-bold mb-2">Aviso</h2><p>Este conteúdo é informativo e não substitui a análise individual do seu caso.</p></aside>
  {article.reviewedBy && isoDate(article.reviewedAt) && <div className="border-t border-border mt-6 pt-6"><p>Conteúdo revisado por {article.reviewedBy}</p><p className="text-sm text-muted-foreground">Revisado em {article.reviewedAt}</p><Link to="/#sobre" className="text-primary underline">Conheça o escritório</Link></div>}
</div></section>;