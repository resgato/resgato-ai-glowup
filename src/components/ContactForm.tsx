
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { executeRecaptcha } from '@/utils/recaptcha';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';

// Define validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
  service: z.string().optional()
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  initialService?: string | null;
}

const ContactForm = ({ initialService }: ContactFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  // Initialize form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
      service: initialService || ''
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    if (isSubmitting) return; // Prevent multiple submissions
    
    setIsSubmitting(true);
    
    try {
      console.log("Submitting contact form...", data);
      
      // Get reCAPTCHA token
      const recaptchaToken = await executeRecaptcha('contact_form_submit');
      
      if (!recaptchaToken) {
        throw new Error('CAPTCHA verification failed. Please try again.');
      }
      
      // Store submission in the database
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: data.name,
          email: data.email,
          company: data.company || null,
          phone: data.phone || null,
          message: data.message,
          recaptcha_token: recaptchaToken // Store the token for reference
        }]);
      
      if (error) {
        console.error('Database error:', error);
        throw new Error(`Failed to submit your message: ${error.message}`);
      }
      
      // Send email notification directly through the edge function
      try {
        const response = await fetch(`https://bopzgxqujuqosdexnppj.functions.supabase.co/new-contact-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            company: data.company,
            phone: data.phone,
            message: data.message,
            recaptchaToken: recaptchaToken // Include token for verification
          }),
        });
        
        if (!response.ok) {
          const result = await response.json();
          console.warn('Email notification issue:', result);
          // Continue despite email error - at least the submission is stored
        }
      } catch (emailError) {
        console.error('Error sending email notification:', emailError);
        // Continue despite email error - at least the submission is stored
      }
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form after successful submission
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: error instanceof Error ? error.message : "Unable to send your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Load reCAPTCHA script when component mounts
  React.useEffect(() => {
    const loadRecaptcha = async () => {
      await executeRecaptcha('page_load');
    };
    loadRecaptcha();
  }, []);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {initialService && (
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <input type="hidden" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        )}
        
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input placeholder="Your Company" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+1 (555) 123-4567" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us about your project and how we can help..." 
                  rows={5} 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button
          type="submit"
          className="w-full bg-resgato-purple hover:bg-resgato-deep-purple text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
        
        {/* Invisible reCAPTCHA badge notice */}
        <div className="text-xs text-gray-500 text-center mt-2">
          This site is protected by reCAPTCHA and the
          <a href="https://policies.google.com/privacy" className="text-resgato-purple hover:underline mx-1" target="_blank" rel="noopener noreferrer">Privacy Policy</a>and
          <a href="https://policies.google.com/terms" className="text-resgato-purple hover:underline mx-1" target="_blank" rel="noopener noreferrer">Terms of Service</a>apply.
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
