import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { ArrowRight, Search, X, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { blogArticles } from "@/data/blogArticles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SEO from "@/components/SEO";

const Blog = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [showAllTags, setShowAllTags] = useState(false);

  const categories = useMemo(
    () => Array.from(new Set(blogArticles.map((a) => a.category))),
    []
  );

  const allTags = useMemo(
    () => Array.from(new Set(blogArticles.flatMap((a) => a.tags ?? []))).sort(),
    []
  );

  const filtered = useMemo(() => {
    let list = blogArticles;
    if (selectedCategory) {
      list = list.filter((a) => a.category === selectedCategory);
    }
    if (selectedTag) {
      list = list.filter((a) => a.tags?.includes(selectedTag));
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q) ||
          a.tags?.some((t) => t.toLowerCase().includes(q))
      );
    }
    return list;
  }, [search, selectedCategory, selectedTag]);

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory(null);
    setSelectedTag(null);
    setShowAllTags(false);
  };

  const hasFilters = search || selectedCategory || selectedTag;

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEO
        title="Blog | Cantarelli Advocacia - Notícias sobre Direito Previdenciário"
        description="Artigos, notícias e atualizações sobre Direito Previdenciário, INSS, aposentadorias, BPC/LOAS e mais. Conteúdo atualizado por especialistas."
        keywords="blog direito previdenciário, notícias INSS 2026, aposentadoria blog, BPC LOAS artigos, reforma previdenciária"
        canonical="https://cantarelliadvocacia.com.br/blog"
      />
      <Header />
      <main className="pt-24 pb-16 md:pt-28 md:pb-20 bg-background min-h-[80vh]">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8 md:mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Blog
            </h1>
            <div className="w-16 md:w-20 h-1 bg-primary mx-auto mb-4 md:mb-6"></div>
            <p className="text-base md:text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Novidades do INSS, regras de aposentadoria e dicas para garantir seus direitos.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Pesquisar..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-10 py-3 rounded-xl border border-border bg-card text-foreground font-body text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Limpar busca"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Categories */}
          <div className="max-w-5xl mx-auto mb-4">
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-all ${
                  !selectedCategory
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card border border-border text-muted-foreground hover:border-primary hover:text-foreground"
                }`}
              >
                Todos
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() =>
                    setSelectedCategory(selectedCategory === cat ? null : cat)
                  }
                  className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-card border border-border text-muted-foreground hover:border-primary hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="max-w-5xl mx-auto mb-8">
            <div className="flex flex-wrap gap-1.5 justify-center">
              {(showAllTags ? allTags : allTags.slice(0, 12)).map((tag) => (
                <button
                  key={tag}
                  onClick={() =>
                    setSelectedTag(selectedTag === tag ? null : tag)
                  }
                  className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] md:text-xs font-medium transition-all ${
                    selectedTag === tag
                      ? "bg-primary/15 text-primary border border-primary/30"
                      : "bg-muted/30 text-muted-foreground hover:bg-muted/50 hover:text-foreground border border-transparent"
                  }`}
                >
                  <Tag className="w-2.5 h-2.5" />
                  {tag}
                </button>
              ))}
            </div>
            {allTags.length > 12 && (
              <div className="text-center mt-2">
                <button
                  onClick={() => setShowAllTags(!showAllTags)}
                  className="text-xs text-primary hover:text-primary/80 font-semibold transition-colors"
                >
                  {showAllTags ? "Ver menos tags ▲" : `Ver todas as tags (${allTags.length}) ▼`}
                </button>
              </div>
            )}
          </div>

          {/* Active filters indicator */}
          {hasFilters && (
            <div className="max-w-7xl mx-auto mb-6 flex items-center justify-between">
              <p className="text-sm text-muted-foreground font-body">
                {filtered.length} {filtered.length === 1 ? "artigo encontrado" : "artigos encontrados"}
              </p>
              <button
                onClick={clearFilters}
                className="text-sm text-primary hover:text-primary/80 font-semibold flex items-center gap-1 transition-colors"
              >
                <X className="w-3 h-3" />
                Limpar filtros
              </button>
            </div>
          )}

          {/* Articles Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
              {filtered.map((post) => (
                <Link
                  to={`/blog/${post.slug}`}
                  key={post.slug}
                  className="group"
                >
                  <Card className="overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-2 left-2">
                        <span className="inline-block px-2 py-0.5 bg-primary text-primary-foreground text-[10px] md:text-xs font-semibold rounded-full shadow-lg">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 md:p-5 flex flex-col flex-1">
                      <h2 className="text-sm md:text-base font-display font-bold text-foreground mb-2 leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-xs md:text-sm text-muted-foreground font-body line-clamp-3 mb-3 flex-1">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-1 text-primary text-xs md:text-sm font-semibold mt-auto group-hover:gap-2 transition-all">
                        <span>Leia Mais</span>
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 max-w-md mx-auto">
              <Search className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
              <h2 className="text-lg font-display font-bold text-foreground mb-2">
                Nenhum artigo encontrado
              </h2>
              <p className="text-sm text-muted-foreground font-body mb-4">
                Tente ajustar os filtros ou buscar por outro termo.
              </p>
              <button
                onClick={clearFilters}
                className="text-sm text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
};

export default Blog;
