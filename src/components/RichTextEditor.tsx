
import React, { useCallback, useState } from 'react';
import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import { supabase } from '@/integrations/supabase/client';
import { 
  Bold, 
  Italic, 
  List, 
  ListOrdered, 
  Heading1, 
  Heading2, 
  Link as LinkIcon, 
  Image as ImageIcon,
  Undo,
  Redo,
  Code
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface RichTextEditorProps {
  content: string;
  onChange: (value: string) => void;
}

const RichTextEditor = ({ content, onChange }: RichTextEditorProps) => {
  const { toast } = useToast();
  const [linkUrl, setLinkUrl] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-600 underline cursor-pointer',
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'max-w-full h-auto rounded-lg',
        },
      }),
      Placeholder.configure({
        placeholder: 'Write your content here...',
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  const handleImageUpload = useCallback(async (file: File) => {
    if (!file) return;
    
    setIsUploading(true);
    
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2, 15)}-${Date.now()}.${fileExt}`;
      const filePath = `/lovable-uploads/${fileName}`;

      // In a real implementation with Supabase, we would upload like this:
      // const { error } = await supabase.storage
      //   .from('blog-images')
      //   .upload(filePath, file);
      
      // if (error) throw error;
      
      // const { data } = supabase.storage.from('blog-images').getPublicUrl(filePath);
      // const imageUrl = data.publicUrl;

      // For now, we'll simulate a successful upload and return a path
      // that would work with the public directory in the project
      const imageUrl = `/lovable-uploads/${fileName}`;
      
      // Insert image at current cursor position
      if (editor) {
        editor.chain().focus().setImage({ src: imageUrl, alt: file.name }).run();
      }
      
      toast({
        title: "Success",
        description: "Image uploaded successfully",
      });
    } catch (error) {
      console.error('Error uploading image:', error);
      toast({
        variant: "destructive",
        title: "Upload Failed",
        description: "There was an error uploading your image",
      });
    } finally {
      setIsUploading(false);
    }
  }, [editor, toast]);

  const setLink = useCallback(() => {
    if (!editor) return;
    
    // If there's no text selected, return
    if (editor.state.selection.empty) {
      toast({
        variant: "destructive",
        title: "Selection Required",
        description: "Please select text to convert to link",
      });
      return;
    }

    // Check if URL is valid
    try {
      // Add https if not present
      const url = linkUrl.startsWith('http') ? linkUrl : `https://${linkUrl}`;
      new URL(url);
      
      editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: url })
        .run();
        
      setLinkUrl('');
      toast({
        title: "Link Added",
        description: "Link has been successfully added",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Invalid URL",
        description: "Please enter a valid URL",
      });
    }
  }, [editor, linkUrl, toast]);

  if (!editor) {
    return null;
  }

  return (
    <div className="border border-gray-200 rounded-lg">
      <div className="flex flex-wrap gap-2 p-2 border-b bg-gray-50">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'bg-gray-200' : ''}
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'bg-gray-200' : ''}
        >
          <Italic className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'bg-gray-200' : ''}
        >
          <Heading1 className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'bg-gray-200' : ''}
        >
          <Heading2 className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'bg-gray-200' : ''}
        >
          <List className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'bg-gray-200' : ''}
        >
          <ListOrdered className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive('codeBlock') ? 'bg-gray-200' : ''}
        >
          <Code className="h-4 w-4" />
        </Button>
        
        <Popover>
          <PopoverTrigger asChild>
            <Button 
              variant="ghost" 
              size="sm" 
              className={editor.isActive('link') ? 'bg-gray-200' : ''}
            >
              <LinkIcon className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Insert Link</h4>
                <p className="text-sm text-muted-foreground">
                  First select text, then add a link to it
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="link">URL</Label>
                <Input 
                  id="link" 
                  placeholder="https://example.com" 
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      setLink();
                    }
                  }}
                />
              </div>
              <Button onClick={setLink}>Apply Link</Button>
            </div>
          </PopoverContent>
        </Popover>

        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => document.getElementById('image-upload')?.click()}
            disabled={isUploading}
          >
            <ImageIcon className="h-4 w-4" />
            {isUploading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 rounded-md">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-700"></div>
              </div>
            )}
          </Button>
          <input
            type="file"
            id="image-upload"
            className="hidden"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                handleImageUpload(e.target.files[0]);
                e.target.value = ''; // Reset input
              }
            }}
          />
        </div>

        <div className="ml-auto flex gap-1">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
          >
            <Undo className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
          >
            <Redo className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <EditorContent 
        editor={editor} 
        className="prose max-w-none p-4 min-h-[300px] focus:outline-none"
      />
      
      {editor && editor.isActive('link') && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <div className="flex bg-white shadow-lg rounded-md overflow-hidden border">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                if (editor) {
                  editor.chain().focus().unsetLink().run();
                }
              }}
            >
              Unlink
            </Button>
          </div>
        </BubbleMenu>
      )}
    </div>
  );
};

export default RichTextEditor;
