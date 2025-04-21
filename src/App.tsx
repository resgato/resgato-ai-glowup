import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AuthorBio from "./pages/AuthorBio";
import NotFound from "./pages/NotFound";
import SEO from "./pages/SEO";
import PPC from "./pages/PPC";
import EmailMarketing from "./pages/EmailMarketing";
import StrategicConsulting from "./pages/StrategicConsulting";
import AIConsulting from "./pages/AIConsulting";
import SocialMediaMarketing from "./pages/SocialMediaMarketing";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import ContentStrategy from "./pages/ContentStrategy";
import UtahRealEstateMarketing from "./pages/UtahRealEstateMarketing";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/author/:authorId" element={<AuthorBio />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/ppc" element={<PPC />} />
          <Route path="/email-marketing" element={<EmailMarketing />} />
          <Route path="/strategic-consulting" element={<StrategicConsulting />} />
          <Route path="/ai-consulting" element={<AIConsulting />} />
          <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="/content-strategy" element={<ContentStrategy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/utah-real-estate-marketing" element={<UtahRealEstateMarketing />} />
          <Route path="/blog/utah-real-estate-marketing" element={<Navigate to="/utah-real-estate-marketing" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
