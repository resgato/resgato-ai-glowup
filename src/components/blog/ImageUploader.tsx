import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { Upload, Image as ImageIcon, Loader2 } from 'lucide-react';

interface ImageUploaderProps {
  value: string;
  onChange: (url: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ value, onChange }) => {
  const [uploading, setUploading] = useState(false);
  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [loadingImages, setLoadingImages] = useState(false);
  const { toast } = useToast();

  // Load existing images when the browse tab is selected
  const handleLoadExistingImages = async () => {
    try {
      setLoadingImages(true);

      // Check if blog_images bucket exists, if not this is the first upload
      const { data: buckets } = await supabase.storage.listBuckets();
      const blogBucket = buckets?.find(bucket => bucket.name === 'blog_images');

      if (blogBucket) {
        const { data, error } = await supabase.storage
          .from('blog_images')
          .list();

        if (error) throw error;

        if (data) {
          const imageUrls = data
            .filter(item => !item.id.includes('/'))
            .map(
              item =>
                supabase.storage.from('blog_images').getPublicUrl(item.name)
                  .data.publicUrl
            );

          setExistingImages(imageUrls);
        }
      } else {
        // First time usage
        setExistingImages([]);
      }
    } catch (error) {
      console.error('Error loading images:', error);
      toast({
        variant: 'destructive',
        title: 'Failed to load images',
        description: 'There was an error loading the existing images.',
      });
    } finally {
      setLoadingImages(false);
    }
  };

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (!event.target.files || event.target.files.length === 0) {
        return;
      }

      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2, 15)}.${fileExt}`;

      setUploading(true);

      // Upload file directly - bucket should exist now due to the SQL migration
      const { data, error } = await supabase.storage
        .from('blog_images')
        .upload(fileName, file, {
          upsert: true,
          cacheControl: '3600',
        });

      if (error) throw error;

      // Get the public URL
      const { data: urlData } = supabase.storage
        .from('blog_images')
        .getPublicUrl(data?.path || fileName);

      // Call the onChange prop with the new image URL
      onChange(urlData.publicUrl);

      toast({
        title: 'Image uploaded successfully',
        description:
          'The image has been uploaded and selected as your cover image.',
      });
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'An error occurred while uploading the image';
      toast({
        variant: 'destructive',
        title: 'Error',
        description: errorMessage,
      });
    } finally {
      setUploading(false);
    }
  };

  const handleSelectImage = (url: string) => {
    onChange(url);
    toast({
      title: 'Image selected',
      description: 'The image has been selected as your cover image.',
    });
  };

  return (
    <div className="space-y-4">
      <Tabs defaultValue="upload" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upload">Upload New</TabsTrigger>
          <TabsTrigger value="browse" onClick={handleLoadExistingImages}>
            Browse Existing
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="space-y-4">
          <div className="relative flex h-40 flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-300 p-6">
            {uploading ? (
              <div className="text-center">
                <Loader2 className="mx-auto h-8 w-8 animate-spin text-blue-500" />
                <p className="mt-2">Uploading...</p>
              </div>
            ) : (
              <>
                <Upload className="mb-2 h-10 w-10 text-gray-400" />
                <p className="mb-2 text-sm text-gray-500">
                  Drag & drop or click to upload
                </p>
                <Button variant="outline" size="sm" className="relative z-10">
                  Select File
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleUpload}
                    disabled={uploading}
                    className="absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0"
                    aria-label="Upload image"
                  />
                </Button>
              </>
            )}
          </div>
        </TabsContent>

        <TabsContent value="browse">
          {loadingImages ? (
            <div className="flex justify-center p-8">
              <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
            </div>
          ) : existingImages.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {existingImages.map((url, index) => (
                <div
                  key={`image-${index}`}
                  className={`relative aspect-video cursor-pointer overflow-hidden rounded-md border-2 
                    ${url === value ? 'border-blue-500 ring-2 ring-blue-300' : 'border-gray-200 hover:border-gray-300'}`}
                  onClick={() => handleSelectImage(url)}
                >
                  <img
                    src={url}
                    alt={`Uploaded image ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-md border p-8 text-center text-gray-500">
              <ImageIcon className="mx-auto mb-2 h-10 w-10 text-gray-400" />
              <p>No images have been uploaded yet.</p>
              <p className="mt-1 text-sm">
                Switch to the Upload tab to add images.
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>

      {value && (
        <div className="mt-4">
          <p className="mb-2 text-sm font-medium">Current Cover Image:</p>
          <div className="aspect-video max-h-48 overflow-hidden rounded-md border border-gray-200">
            <img
              src={value}
              alt="Selected cover"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      )}

      <Input
        placeholder="Or enter image URL manually"
        value={value || ''}
        onChange={e => onChange(e.target.value)}
        className="mt-2"
      />
    </div>
  );
};

export default ImageUploader;
