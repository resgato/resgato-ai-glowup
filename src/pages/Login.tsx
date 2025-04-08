
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AlertCircle } from 'lucide-react';

const authSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

type AuthFormValues = z.infer<typeof authSchema>;

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
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
  
  useEffect(() => {
    // Check if user is already logged in
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        navigate('/admin');
      }
    };
    
    checkSession();
    
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate('/admin');
      }
    });
    
    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);
  
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
      let authResponse;
      
      if (mode === 'login') {
        authResponse = await supabase.auth.signInWithPassword({
          email: data.email,
          password: data.password,
        });
      } else {
        authResponse = await supabase.auth.signUp({
          email: data.email,
          password: data.password,
          options: {
            emailRedirectTo: window.location.origin + '/login',
          }
        });
      }
      
      if (authResponse.error) {
        throw authResponse.error;
      }
      
      if (mode === 'signup' && authResponse.data.user && !authResponse.data.session) {
        toast({
          title: 'Verification email sent',
          description: 'Please check your email to verify your account',
        });
        setMode('login');
      } else if (authResponse.data.session) {
        toast({
          title: mode === 'login' ? 'Logged in successfully' : 'Account created successfully',
        });
        navigate('/admin');
      }
    } catch (error: any) {
      console.error('Auth error:', error);
      setErrorMessage(error.message || 'An error occurred during authentication');
      toast({
        title: 'Authentication error',
        description: error.message || 'An error occurred during authentication',
        variant: 'destructive',
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
              <CardTitle className="text-2xl">
                {mode === 'login' ? 'Admin Login' : 'Create Admin Account'}
              </CardTitle>
              <CardDescription>
                {mode === 'login' 
                  ? 'Enter your credentials to access the admin dashboard' 
                  : 'Create an account to access the admin dashboard'}
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
              
              <Tabs value={mode} onValueChange={(value) => setMode(value as 'login' | 'signup')} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                
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
                      {isLoading ? 'Processing...' : mode === 'login' ? 'Login' : 'Sign Up'}
                    </Button>
                  </form>
                </Form>
              </Tabs>
            </CardContent>
            <CardFooter className="text-center text-sm justify-center">
              {mode === 'login' ? (
                <span>
                  Don't have an account?{' '}
                  <Button variant="link" className="p-0 h-auto" onClick={() => setMode('signup')}>
                    Sign up
                  </Button>
                </span>
              ) : (
                <span>
                  Already have an account?{' '}
                  <Button variant="link" className="p-0 h-auto" onClick={() => setMode('login')}>
                    Login
                  </Button>
                </span>
              )}
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
