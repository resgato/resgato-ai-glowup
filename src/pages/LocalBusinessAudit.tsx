import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHelmet from '@/components/PageHelmet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/supabase';
import { CheckCircle2, Search, BarChart3, MapPin } from 'lucide-react';

const LocalBusinessAudit = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('marketing_audit_leads')
        .insert([
          {
            business_name: formData.businessName,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            created_at: new Date().toISOString(),
          },
        ]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "We'll be in touch shortly to schedule your free audit.",
      });

      // Reset form
      setFormData({
        businessName: '',
        name: '',
        email: '',
        phone: '',
      });

      // Redirect to thank you page or home
      navigate('/');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHelmet 
        title="Free Local Business Marketing Audit | Resgato"
        description="Get a comprehensive free audit of your local business marketing, including website performance, SEO, ads, and Google My Business profile. Start growing your business today."
        canonicalUrl="/local-business-audit"
      />
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Free Local Business Marketing Audit
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get a comprehensive analysis of your local business marketing strategy and discover opportunities for growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">What's Included in Your Free Audit</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Search className="w-6 h-6 text-resgato-blue flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Website Performance & SEO Audit</h3>
                      <p className="text-gray-600 mt-1">
                        We'll analyze your website's speed, mobile responsiveness, and SEO optimization to ensure you're ranking well in local searches.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <BarChart3 className="w-6 h-6 text-resgato-blue flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Ads Performance Audit</h3>
                      <p className="text-gray-600 mt-1">
                        Get insights into your current ad campaigns and discover opportunities to improve ROI and reach more local customers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-resgato-blue flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Google My Business Profile Audit</h3>
                      <p className="text-gray-600 mt-1">
                        We'll review your Google Business Profile to ensure you're maximizing your local visibility and attracting more customers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Resgato?</h2>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-resgato-blue" />
                    <span className="text-gray-600">Expert local marketing specialists</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-resgato-blue" />
                    <span className="text-gray-600">Data-driven recommendations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-resgato-blue" />
                    <span className="text-gray-600">Actionable insights you can implement</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-resgato-blue" />
                    <span className="text-gray-600">No obligation, completely free</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-resgato-blue hover:bg-resgato-navy text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Try it Now'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LocalBusinessAudit; 