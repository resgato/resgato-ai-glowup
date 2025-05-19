import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from '@/components/ui/alert';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AlertCircle } from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';

const authSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

type AuthFormValues = z.infer<typeof authSchema>;

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { isAuthenticated } = useAuth();
  
  // Check for error parameters in URL
  useEffect(() => {
    const hash = location.hash;
    if (hash.includes('error=')) {
      const errorParams = new URLSearchParams(hash.substring(1));
      const error = errorParams.get('error');
      const errorDescription = errorParams.get('error_description');
      
      if (error && errorDescription) {
        setErrorMessage(decodeURIComponent(errorDescription.replace(/\+/g, ' ')));
        toast({
          title: 'Authentication Error',
          description: decodeURIComponent(errorDescription.replace(/\+/g, ' ')),
          variant: 'destructive',
        });
      }
    }
  }, [location, toast]);
  
  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin');
    }
  }, [isAuthenticated, navigate]);
  
  // Initialize form
  const form = useForm<AuthFormValues>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  
  const onSubmit = async (data: AuthFormValues) => {
    setIsLoading(true);
    setErrorMessage(null);
    
    try {
      const authResponse = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });
      
      if (authResponse.error) {
        throw authResponse.error;
      }
      
      if (authResponse.data.session) {
        toast({
          title: 'Logged in successfully',
        });
        navigate('/admin');
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "An error occurred during sign in";
      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-12">
        <div className="w-full max-w-md px-4">
          <Card className="shadow-xl border-none">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Admin Login</CardTitle>
              <CardDescription>
                Enter your credentials to access the admin dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              {errorMessage && (
                <Alert variant="destructive" className="mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{errorMessage}</AlertDescription>
                </Alert>
              )}
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-resgato-purple hover:bg-resgato-deep-purple text-white" 
                    disabled={isLoading}
                  >
                    {isLoading ? 'Processing...' : 'Login'}
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="text-center text-sm justify-center">
              <p className="text-gray-500">
                Contact your administrator if you need access
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
