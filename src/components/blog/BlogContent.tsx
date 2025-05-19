
import React from 'react';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

interface BlogContentProps {
  content: string;
}

const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  // Function to convert markdown-like syntax to HTML
  const processContent = (text: string) => {
    if (!text) return '';
    
    let processedContent = text;
    
    // Convert h2 headers (## Header)
    processedContent = processedContent.replace(/##\s+([^\n]+)/g, '<h2 class="text-2xl font-bold my-4">$1</h2>');
    
    // Convert h3 headers (### Header)
    // The issue was likely with the regex pattern for h3 - let's ensure it properly matches
    processedContent = processedContent.replace(/###\s+([^\n]+)/g, '<h3 class="text-xl font-bold my-3">$1</h3>');
    
    // Convert links - [text](url)
    processedContent = processedContent.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-resgato-blue hover:underline" target="_blank" rel="noopener noreferrer">$1</a>');
    
    // Convert paragraphs - each double newline becomes a paragraph
    processedContent = processedContent.replace(/\n\n/g, '</p><p class="my-4">');
    
    // Wrap everything in a paragraph if not already
    if (!processedContent.startsWith('<')) {
      processedContent = `<p class="my-4">${processedContent}</p>`;
    }
    
    return processedContent;
  };
  
  // Add console logging to help debug the regex patterns
  console.log('Original content:', content);
  const processed = processContent(content);
  console.log('Processed content:', processed);
  
  // Process and sanitize content
  const sanitizedContent = DOMPurify.sanitize(processed, {
    ALLOWED_TAGS: ['h2', 'h3', 'p', 'a', 'strong', 'em', 'ul', 'ol', 'li', 'blockquote'],
    ALLOWED_ATTR: ['href', 'target', 'rel', 'class'],
  });
  
  return <div className="blog-content">{parse(sanitizedContent)}</div>;
};

export default BlogContent;
