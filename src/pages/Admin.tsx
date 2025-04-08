
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from '@/components/ui/pagination';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';

type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  message: string;
  created_at: string;
};

const ITEMS_PER_PAGE = 5;

const Admin = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is logged in
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      
      if (!data.session) {
        navigate('/login');
      } else {
        fetchSubmissions(currentPage);
        fetchTotalCount();
      }
    };
    
    checkSession();
    
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      if (!session) {
        navigate('/login');
      }
    });
    
    return () => {
      subscription?.unsubscribe();
    };
  }, [navigate, currentPage]);
  
  const fetchTotalCount = async () => {
    try {
      const { count, error } = await supabase
        .from('contact_submissions')
        .select('*', { count: 'exact', head: true });
      
      if (error) throw error;
      
      if (count !== null) {
        setTotalCount(count);
        setTotalPages(Math.max(1, Math.ceil(count / ITEMS_PER_PAGE)));
      }
    } catch (error) {
      console.error('Error fetching total count:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch total submission count',
        variant: 'destructive',
      });
    }
  };
  
  const fetchSubmissions = async (page: number) => {
    try {
      setLoading(true);
      const from = (page - 1) * ITEMS_PER_PAGE;
      const to = from + ITEMS_PER_PAGE - 1;
      
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false })
        .range(from, to);
      
      if (error) throw error;
      setSubmissions(data || []);
    } catch (error) {
      console.error('Error fetching submissions:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch contact submissions',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };
  
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };
  
  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'MMM d, yyyy h:mm a');
  };
  
  const renderPaginationItems = () => {
    const items = [];
    const maxPagesToShow = 5;
    
    // Calculate range of pages to show
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    
    // Adjust if we're near the end
    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    
    // First page
    if (startPage > 1) {
      items.push(
        <PaginationItem key="1">
          <PaginationLink onClick={() => handlePageChange(1)}>1</PaginationLink>
        </PaginationItem>
      );
      
      // Ellipsis if needed
      if (startPage > 2) {
        items.push(
          <PaginationItem key="ellipsis1">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
    }
    
    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink 
            isActive={currentPage === i} 
            onClick={() => handlePageChange(i)}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    // Last page
    if (endPage < totalPages) {
      // Ellipsis if needed
      if (endPage < totalPages - 1) {
        items.push(
          <PaginationItem key="ellipsis2">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
      
      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink onClick={() => handlePageChange(totalPages)}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    return items;
  };
  
  if (!session) {
    return null; // Don't render anything while checking authentication
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-center md:text-left">
                Admin Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="contacts">
                <TabsList className="mb-6">
                  <TabsTrigger value="contacts">Contact Submissions</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                
                <TabsContent value="contacts" className="space-y-4">
                  <div className="rounded-md">
                    {loading ? (
                      <div className="text-center py-10">
                        <p>Loading submissions...</p>
                      </div>
                    ) : submissions.length === 0 ? (
                      <div className="text-center py-10">
                        <p>No contact form submissions yet.</p>
                      </div>
                    ) : (
                      <>
                        <div className="overflow-x-auto">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Company</TableHead>
                                <TableHead>Phone</TableHead>
                                <TableHead>Message</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {submissions.map((submission) => (
                                <TableRow key={submission.id}>
                                  <TableCell className="whitespace-nowrap">
                                    {formatDate(submission.created_at)}
                                  </TableCell>
                                  <TableCell>{submission.name}</TableCell>
                                  <TableCell>{submission.email}</TableCell>
                                  <TableCell>{submission.company || '-'}</TableCell>
                                  <TableCell>{submission.phone || '-'}</TableCell>
                                  <TableCell className="max-w-xs truncate">
                                    {submission.message}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                        
                        {totalPages > 1 && (
                          <div className="mt-6">
                            <Pagination>
                              <PaginationContent>
                                <PaginationItem>
                                  <PaginationPrevious 
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    aria-disabled={currentPage === 1}
                                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                                  />
                                </PaginationItem>
                                
                                {renderPaginationItems()}
                                
                                <PaginationItem>
                                  <PaginationNext 
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    aria-disabled={currentPage === totalPages}
                                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                                  />
                                </PaginationItem>
                              </PaginationContent>
                            </Pagination>
                            
                            <div className="text-center text-sm text-muted-foreground mt-2">
                              Showing {submissions.length} of {totalCount} results
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="settings">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Account Settings</h3>
                    <Button 
                      variant="destructive" 
                      onClick={async () => {
                        await supabase.auth.signOut();
                        navigate('/login');
                      }}
                    >
                      Sign Out
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;

