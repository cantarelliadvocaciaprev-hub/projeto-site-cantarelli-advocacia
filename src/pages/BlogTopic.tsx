import { Link, useParams } from "react-router-dom";
import { topics, topicFor, sortUpdated } from "@/lib/blogEditorial.mjs";
import { useAllArticles } from "@/hooks/useAllArticles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import NotFound from "./NotFound";

export default function BlogTopic() {
  const { slug } = useParams();
  const topic = topics.find(item => item.slug === slug);
  const { articles } = useAllArticles();
  if (!topic) return <NotFound />;
  const posts = sortUpdated(articles.filter(article => topicFor(article).slug === topic.slug));
  return <div className="bg-background min-h-screen text-foreground"><SEO title={`${topic.title} | Cantarelli Advocacia`} description={topic.description} canonical={`https://cantarelliadvocacia.com.br/blog/tema/${topic.slug}`} /><Header />
    <main className="container mx-auto px-4 pt-28 pb-16"><Breadcrumb items={[{label:"Blog",href:"/blog"},{label:topic.title,href:`/blog/tema/${topic.slug}`}]} />
      <h1 className="text-3xl md:text-4xl font-display font-bold mt-8 mb-4">{topic.title}</h1><p className="text-muted-foreground max-w-3xl mb-6">{topic.description}</p>
      <Link className="text-primary underline" to={`/${topic.serviceSlug}`}>Orientação jurídica — atendimento online e em Recife</Link>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">{posts.map(post => <Link key={post.slug} to={`/blog/${post.slug}`} className="border border-border rounded-lg overflow-hidden bg-card"><img src={post.image} alt={post.imageAlt} width={1200} height={800} loading="lazy" decoding="async" className="w-full aspect-[3/2] object-cover" /><div className="p-5"><h2 className="font-display font-bold mb-3">{post.title}</h2><p className="text-sm text-muted-foreground">{post.excerpt}</p></div></Link>)}</div>
      <Link to="/blog" className="inline-block mt-8"><Button variant="outline">Todos os artigos</Button></Link>
    </main><Footer /></div>;
}