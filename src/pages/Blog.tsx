import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { ArrowRight, Search, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { blogArticles } from "@/data/blogArticles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SEO from "@/components/SEO";

const ARTICLES_PER_PAGE = 12;

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const currentPage = Number(searchParams.get("page") || "1");

  const categories = useMemo(
    () => Array.from(new Set(blogArticles.map((a) => a.category))),
    []
  );

  const filtered = useMemo(() => {
    let list = blogArticles;
    if (selectedCategory) {
      list = list.filter((a) => a.category === selectedCategory);
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
  }, [search, selectedCategory]);

  const totalPages = Math.ceil(filtered.length / ARTICLES_PER_PAGE);
  const safePage = Math.min(Math.max(1, currentPage), totalPages || 1);

  const paginatedArticles = useMemo(
    () => filtered.slice((safePage - 1) * ARTICLES_PER_PAGE, safePage * ARTICLES_PER_PAGE),
    [filtered, safePage]
  );

  const goToPage = (page: number) => {
    if (page === 1) {
      searchParams.delete("page");
    } else {
      searchParams.set("page", String(page));
    }
    setSearchParams(searchParams, { replace: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory(null);
    searchParams.delete("page");
    setSearchParams(searchParams, { replace: true });
  };

  // Reset to page 1 when filters change
  const handleSearch = (value: string) => {
    setSearch(value);
    searchParams.delete("page");
    setSearchParams(searchParams, { replace: true });
  };

  const handleCategory = (cat: string | null) => {
    setSelectedCategory(cat);
    searchParams.delete("page");
    setSearchParams(searchParams, { replace: true });
  };

  const hasFilters = search || selectedCategory;

  const getPageNumbers = () => {
    const pages: (number | "ellipsis")[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (safePage > 3) pages.push("ellipsis");
      for (let i = Math.max(2, safePage - 1); i <= Math.min(totalPages - 1, safePage + 1); i++) {
        pages.push(i);
      }
      if (safePage < totalPages - 2) pages.push("ellipsis");
      pages.push(totalPages);
    }
    return pages;
  };

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
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-10 pr-10 py-3 rounded-xl border border-border bg-card text-foreground font-body text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
              />
              {search && (
                <button
                  onClick={() => handleSearch("")}
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
                onClick={() => handleCategory(null)}
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
                  onClick={() => handleCategory(selectedCategory === cat ? null : cat)}
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
          {paginatedArticles.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
                {paginatedArticles.map((post) => (
                  <Link to={`/blog/${post.slug}`} key={post.slug} className="group">
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
                        <h2 className="text-sm md:text-base font-display font-bold text-foreground mb-2 leading-tight line-clamp-3 group-hover:text-primary transition-colors">
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

              {/* Pagination */}
              {totalPages > 1 && (
                <nav aria-label="Paginação do blog" className="flex justify-center items-center gap-1 mt-10">
                  <button
                    onClick={() => goToPage(safePage - 1)}
                    disabled={safePage <= 1}
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent disabled:opacity-40 disabled:pointer-events-none transition-colors"
                    aria-label="Página anterior"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Anterior</span>
                  </button>

                  {getPageNumbers().map((p, i) =>
                    p === "ellipsis" ? (
                      <span key={`e${i}`} className="w-9 h-9 flex items-center justify-center text-muted-foreground">
                        …
                      </span>
                    ) : (
                      <button
                        key={p}
                        onClick={() => goToPage(p)}
                        aria-current={p === safePage ? "page" : undefined}
                        className={`w-9 h-9 rounded-md text-sm font-medium transition-colors ${
                          p === safePage
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "text-muted-foreground hover:bg-accent hover:text-foreground"
                        }`}
                      >
                        {p}
                      </button>
                    )
                  )}

                  <button
                    onClick={() => goToPage(safePage + 1)}
                    disabled={safePage >= totalPages}
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent disabled:opacity-40 disabled:pointer-events-none transition-colors"
                    aria-label="Próxima página"
                  >
                    <span className="hidden sm:inline">Próxima</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </nav>
              )}
            </>
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
