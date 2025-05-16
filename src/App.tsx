
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useState, useEffect } from "react";
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
import BlogAdmin from "./pages/BlogAdmin";
import BlogEditor from "./pages/BlogEditor";
import ContentStrategy from "./pages/ContentStrategy";
import UtahRealEstateMarketing from "./pages/UtahRealEstateMarketing";
import ScrollToTop from "@/components/ScrollToTop";

// Create a new query client with error handling
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      onError: (error) => {
        console.error("Query error:", error);
      }
    },
  }
});

const App = () => {
  const [isAppReady, setIsAppReady] = useState(false);
  const [initError, setInitError] = useState<Error | null>(null);
  
  // Add a safety mechanism to ensure the app always renders even if there are initialization errors
  useEffect(() => {
    const initApp = async () => {
      try {
        // Any app initialization can go here
        
        // Mark app as ready
        setIsAppReady(true);
      } catch (error) {
        console.error("Error initializing app:", error);
        // Capture error for potential display
        setInitError(error instanceof Error ? error : new Error("Unknown initialization error"));
        // Ensure the app renders even if there's an error
        setIsAppReady(true);
      }
    };
    
    // Add timeout to prevent hanging on initialization
    const timeoutId = setTimeout(() => {
      if (!isAppReady) {
        console.warn("App initialization timed out, rendering anyway");
        setIsAppReady(true);
      }
    }, 5000);
    
    initApp();
    
    return () => clearTimeout(timeoutId);
  }, []);

  // Show a minimal fallback if the app is not ready yet
  if (!isAppReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Loading application...</p>
        </div>
      </div>
    );
  }

  // Show error message if initialization failed
  if (initError) {
    console.warn("Rendering app with initialization error:", initError);
  }

  return (
    <HelmetProvider>
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
              <Route path="/admin/blogs" element={<BlogAdmin />} />
              <Route path="/admin/blogs/new" element={<BlogEditor />} />
              <Route path="/admin/blogs/edit/:id" element={<BlogEditor />} />
              <Route path="/utah-real-estate-marketing" element={<UtahRealEstateMarketing />} />
              <Route path="/blog/utah-real-estate-marketing" element={<Navigate to="/utah-real-estate-marketing" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
