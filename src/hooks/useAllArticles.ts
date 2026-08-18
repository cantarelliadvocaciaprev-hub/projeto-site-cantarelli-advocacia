import { useQuery } from "@tanstack/react-query";
import { blogArticles, type BlogArticle } from "@/data/blogArticles";
import { fetchPublishedPosts } from "@/lib/dbBlog";

/**
 * Artigos estáticos do repositório + artigos publicados pelo painel.
 * Os posts do painel aparecem primeiro; em caso de slug repetido, o do painel vence.
 */
export const useAllArticles = () => {
  const { data: dbArticles = [], isLoading } = useQuery({
    queryKey: ["blog-posts-published"],
    queryFn: fetchPublishedPosts,
    staleTime: 60_000,
  });

  const dbSlugs = new Set(dbArticles.map((a) => a.slug));
  const articles: BlogArticle[] = [
    ...dbArticles,
    ...blogArticles.filter((a) => !dbSlugs.has(a.slug)),
  ];

  return { articles, isLoading };
};
