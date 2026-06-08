import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { MotionConfig } from "framer-motion";
import Index from "./pages/Index";
import TrabalheConosco from "./pages/TrabalheConosco";
import Seguranca from "./pages/Seguranca";
import BlogArticle from "./pages/BlogArticle";
import BlogPage from "./pages/Blog";
import DeployCheck from "./pages/DeployCheck";
import ReviewStats from "./pages/ReviewStats";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <MotionConfig reducedMotion="user">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
              <Route path="/seguranca" element={<Seguranca />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogArticle />} />
              <Route path="/verificacao-deploy" element={<DeployCheck />} />
              <Route path="/admin/avaliacoes" element={<ReviewStats />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </MotionConfig>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
