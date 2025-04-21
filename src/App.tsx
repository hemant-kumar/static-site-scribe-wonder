
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BlogPost from "./pages/BlogPost";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import SearchResults from "./pages/SearchResults";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="bg-[#F2FCE2] min-h-screen flex flex-col">
          <Toaster />
          <BrowserRouter>
            <Header />
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
