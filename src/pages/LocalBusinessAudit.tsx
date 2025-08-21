import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHelmet from '@/components/PageHelmet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
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
      console.log('Submitting audit form...', formData);

      // Store submission in the contact_submissions table
      const { data: submissionData, error: dbError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.businessName,
            phone: formData.phone,
            message: `Local Business Marketing Audit Request\n\nBusiness: ${formData.businessName}\nContact: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nThis is a request for a free local business marketing audit.`,
            service: 'Local Business Marketing Audit',
          },
        ])
        .select()
        .single();

      if (dbError) {
        console.error('Database error:', dbError);
        throw new Error(
          `Failed to submit your audit request: ${dbError.message}`
        );
      }

      console.log('Audit form submitted to database:', submissionData);

      // Send email notification via edge function
      try {
        console.log('Sending audit email notification...');
        const emailResponse = await fetch(
          'https://bopzgxqujuqosdexnppj.supabase.co/functions/v1/send-contact-email',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvcHpneHF1anVxb3NkZXhucHBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwODYwODMsImV4cCI6MjA1OTY2MjA4M30.sa4gGVfa2JpvlOQaouVYArBR_Urv9zh3CGzOKcFY-RQ',
            },
            body: JSON.stringify(submissionData),
          }
        );

        if (!emailResponse.ok) {
          const emailError = await emailResponse.text();
          console.warn('Email notification failed:', emailError);
          // Continue despite email error - at least the submission is stored
        } else {
          console.log('Audit email notification sent successfully');
        }
      } catch (emailError) {
        console.error('Error sending audit email notification:', emailError);
        // Continue despite email error - at least the submission is stored
      }

      toast({
        title: 'Success!',
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
        title: 'Error',
        description:
          error instanceof Error
            ? error.message
            : 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHelmet
        title="Free Local Business Marketing Audit | Utah's #1 Digital Marketing Agency | Resgato"
        description="Get a comprehensive free audit of your local business marketing, including website performance, SEO, ads, and Google My Business profile. Start growing your business today."
        canonicalUrl="/local-business-audit"
      />
      <Navbar />
      <main className="flex-grow">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              Free Local Business Marketing Audit
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Get a comprehensive analysis of your local business marketing
              strategy and discover opportunities for growth.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  What's Included in Your Free Audit
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Search className="mt-1 h-6 w-6 flex-shrink-0 text-resgato-blue" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        Website Performance & SEO Audit
                      </h3>
                      <p className="mt-1 text-gray-600">
                        We'll analyze your website's speed, mobile
                        responsiveness, and SEO optimization to ensure you're
                        ranking well in local searches.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <BarChart3 className="mt-1 h-6 w-6 flex-shrink-0 text-resgato-blue" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        Ads Performance Audit
                      </h3>
                      <p className="mt-1 text-gray-600">
                        Get insights into your current ad campaigns and discover
                        opportunities to improve ROI and reach more local
                        customers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="mt-1 h-6 w-6 flex-shrink-0 text-resgato-blue" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        Google My Business Profile Audit
                      </h3>
                      <p className="mt-1 text-gray-600">
                        We'll review your Google Business Profile to ensure
                        you're maximizing your local visibility and attracting
                        more customers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Why Choose Resgato?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-resgato-blue" />
                    <span className="text-gray-600">
                      Expert local marketing specialists
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-resgato-blue" />
                    <span className="text-gray-600">
                      Data-driven recommendations
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-resgato-blue" />
                    <span className="text-gray-600">
                      Actionable insights you can implement
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-resgato-blue" />
                    <span className="text-gray-600">
                      No obligation, completely free
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="rounded-lg bg-white p-8 shadow-sm">
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
                  className="w-full bg-resgato-blue text-white hover:bg-resgato-navy"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Get My Free Audit'}
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
