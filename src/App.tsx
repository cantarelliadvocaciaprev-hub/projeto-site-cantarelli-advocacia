import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { MotionConfig } from "framer-motion";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import PageViewTracker from "./components/PageViewTracker";

const TrabalheConosco = lazy(() => import("./pages/TrabalheConosco"));
const Seguranca = lazy(() => import("./pages/Seguranca"));
const Contato = lazy(() => import("./pages/Contato"));
const BlogArticle = lazy(() => import("./pages/BlogArticle"));
const BlogPage = lazy(() => import("./pages/Blog"));
const DeployCheck = lazy(() => import("./pages/DeployCheck"));
const ReviewStats = lazy(() => import("./pages/ReviewStats"));
const ArticleStats = lazy(() => import("./pages/ArticleStats"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const BlogAdmin = lazy(() => import("./pages/BlogAdmin"));
const NotFound = lazy(() => import("./pages/NotFound"));



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <MotionConfig reducedMotion="user">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <PageViewTracker />
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
                <Route path="/seguranca" element={<Seguranca />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogArticle />} />
                <Route path="/verificacao-deploy" element={<DeployCheck />} />
                <Route path="/admin/avaliacoes" element={<ReviewStats />} />
                <Route path="/admin/artigos" element={<ArticleStats />} />
                <Route path="/admin/painel" element={<Dashboard />} />
                <Route path="/admin/blog" element={<BlogAdmin />} />

                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>

          </BrowserRouter>
        </TooltipProvider>
      </MotionConfig>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
