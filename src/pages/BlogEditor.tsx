
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { blogService } from '@/services/blogService';
import { BlogPost } from '@/types/blog';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Navbar from '@/components/Navbar';
import Footer from '@/components/FooterAdminLink';
import RichTextEditor from '@/components/RichTextEditor';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { ArrowLeft, Save } from 'lucide-react';

const blogSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  slug: z.string().min(3, 'Slug must be at least 3 characters').regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens'),
  excerpt: z.string().min(20, 'Excerpt must be at least 20 characters'),
  category: z.string().min(2, 'Category is required'),
  cover: z.string().min(2, 'Cover image URL is required'),
  author: z.string().min(2, 'Author name is required'),
  readTime: z.string().min(2, 'Read time is required'),
  content: z.string().min(50, 'Content must be at least 50 characters'),
});

type BlogFormValues = z.infer<typeof blogSchema>;

const BlogEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const isEditMode = !!id;

  const form = useForm<BlogFormValues>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: '',
      slug: '',
      excerpt: '',
      category: '',
      cover: '',
      author: '',
      readTime: '',
      content: '',
    },
  });

  // Generate slug from title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special chars
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .trim();
  };

  // Auto-update slug when title changes (only if slug is empty or hasn't been manually edited)
  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === 'title' && (!form.getValues('slug') || form.getValues('slug') === generateSlug(form.getValues('title')))) {
        form.setValue('slug', generateSlug(value.title || ''), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [form]);

  // Load post data if in edit mode
  useEffect(() => {
    const checkSession = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      
      if (!sessionData.session) {
        navigate('/login');
        return;
      }
    };
    
    checkSession();
    
    if (isEditMode && id) {
      const fetchPost = async () => {
        setIsLoading(true);
        try {
          const data = await blogService.getPostById(parseInt(id));
            
          if (data) {
            form.reset(data);
          } else {
            toast({
              variant: "destructive",
              title: "Error",
              description: "Blog post not found",
            });
            navigate('/admin/blogs');
          }
        } catch (error) {
          console.error('Error fetching post:', error);
          toast({
            variant: "destructive",
            title: "Error",
            description: "Failed to load blog post",
          });
        } finally {
          setIsLoading(false);
        }
      };
      
      fetchPost();
    }
  }, [id, isEditMode, navigate]);

  const onSubmit = async (values: BlogFormValues) => {
    setIsLoading(true);
    
    // Set current date if creating a new post
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    try {
      if (isEditMode && id) {
        // Update existing post
        const updated = await blogService.updatePost(parseInt(id), values);
          
        if (!updated) throw new Error("Failed to update blog post");
        
        toast({
          title: "Success",
          description: "Blog post updated successfully",
        });
      } else {
        // Create new post
        const created = await blogService.createPost({
          ...values,
          date: currentDate,
        } as BlogPost);
          
        if (!created) throw new Error("Failed to create blog post");
        
        toast({
          title: "Success",
          description: "Blog post created successfully",
        });
      }
      
      navigate('/admin/blogs');
    } catch (error: any) {
      console.error('Error saving post:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to save blog post",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="flex items-center mb-6">
          <Button 
            variant="outline" 
            onClick={() => navigate('/admin/blogs')}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Posts
          </Button>
          <h1 className="text-3xl font-bold">
            {isEditMode ? 'Edit Blog Post' : 'Create New Blog Post'}
          </h1>
        </div>
        
        {isLoading && !form.formState.isSubmitting ? (
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-700"></div>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter blog title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="slug"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Slug (URL Path)</FormLabel>
                      <FormControl>
                        <Input placeholder="enter-blog-slug" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="author"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Author</FormLabel>
                      <FormControl>
                        <Input placeholder="Author name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <Input placeholder="Category" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="readTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Read Time</FormLabel>
                      <FormControl>
                        <Input placeholder="5 min read" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="cover"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cover Image URL</FormLabel>
                    <FormControl>
                      <Input placeholder="/path/to/image.jpg" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="excerpt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Excerpt</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="A brief summary of the blog post" 
                        className="h-24"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content</FormLabel>
                    <FormControl>
                      <RichTextEditor 
                        content={field.value} 
                        onChange={field.onChange} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="flex justify-end pt-4">
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="flex items-center gap-2"
                >
                  {isLoading && <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>}
                  <Save className="h-4 w-4" />
                  {isEditMode ? 'Update Post' : 'Publish Post'}
                </Button>
              </div>
            </form>
          </Form>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BlogEditor;
