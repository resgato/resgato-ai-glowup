import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CriticalCSS from '@/components/CriticalCSS';
import Index from './pages/Index';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import AuthorBio from './pages/AuthorBio';
import NotFound from './pages/NotFound';
import SEO from './pages/SEO';
import PPC from './pages/PPC';
import EmailMarketing from './pages/EmailMarketing';
import StrategicConsulting from './pages/StrategicConsulting';
import AIConsulting from './pages/AIConsulting';
import SocialMediaMarketing from './pages/SocialMediaMarketing';
import Login from './pages/Login';
import Admin from './pages/Admin';
import BlogAdmin from './pages/BlogAdmin';
import BlogEditor from './pages/BlogEditor';
import ContentStrategy from './pages/ContentStrategy';
import WebsiteDevelopment from './pages/WebsiteDevelopment';
import ITSupport from './pages/ITSupport';
import UtahRealEstateMarketing from './pages/UtahRealEstateMarketing';
import UtahMarketingFirms from './pages/UtahMarketingFirms';
import UtahMarketingAgency from './pages/UtahMarketingAgency';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import ScrollToTop from '@/components/ScrollToTop';
import LocalBusinessAudit from './pages/LocalBusinessAudit';
import YetiPlumbingCaseStudy from './pages/YetiPlumbingCaseStudy';
import DailyShiftsCaseStudy from './pages/DailyShiftsCaseStudy';
import MLDCaseStudy from './pages/MLDCaseStudy';
import DealershipMarketing from './pages/DealershipMarketing';

// Updated QueryClient configuration to be compatible with React Query v5
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
    mutations: {
      onError: error => {
        console.error('Mutation error:', error);
      },
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CriticalCSS />
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
          <Route
            path="/strategic-consulting"
            element={<StrategicConsulting />}
          />
          <Route path="/ai-consulting" element={<AIConsulting />} />
          <Route
            path="/social-media-marketing"
            element={<SocialMediaMarketing />}
          />
          <Route path="/content-strategy" element={<ContentStrategy />} />
          <Route path="/website-development" element={<WebsiteDevelopment />} />
          <Route path="/it-support" element={<ITSupport />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/blogs" element={<BlogAdmin />} />
          <Route path="/admin/blogs/new" element={<BlogEditor />} />
          <Route path="/admin/blogs/edit/:id" element={<BlogEditor />} />
          <Route
            path="/utah-real-estate-marketing"
            element={<UtahRealEstateMarketing />}
          />
          <Route
            path="/utah-marketing-firms"
            element={<UtahMarketingFirms />}
          />
          <Route
            path="/utahmarketingagency"
            element={<UtahMarketingAgency />}
          />
          <Route
            path="/local-business-audit"
            element={<LocalBusinessAudit />}
          />
          <Route
            path="/case-studies/yeti-plumbing"
            element={<YetiPlumbingCaseStudy />}
          />
          <Route
            path="/case-studies/daily-shifts"
            element={<DailyShiftsCaseStudy />}
          />
          <Route path="/case-studies/mld" element={<MLDCaseStudy />} />
          <Route
            path="/dealershipmarketing"
            element={<DealershipMarketing />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route
            path="/blog/utah-real-estate-marketing"
            element={<Navigate to="/utah-real-estate-marketing" replace />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
