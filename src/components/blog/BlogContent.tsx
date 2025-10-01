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

    // Convert h1 headers (# Header)
    processedContent = processedContent.replace(
      /^#\s+([^\n]+)/gm,
      '<h1 class="text-3xl font-bold my-5">$1</h1>'
    );

    // Convert h2 headers (## Header)
    processedContent = processedContent.replace(
      /^##\s+([^\n]+)/gm,
      '<h2 class="text-2xl font-bold my-4">$1</h2>'
    );

    // Convert h3 headers (### Header)
    processedContent = processedContent.replace(
      /^###\s+([^\n]+)/gm,
      '<h3 class="text-xl font-bold my-3">$1</h3>'
    );

    // Convert standalone # that might be used for styling
    // This must be processed after the headers to avoid conflicts
    processedContent = processedContent.replace(
      /^#\s+(?![#\s])/gm,
      '<div class="text-lg font-semibold my-3">'
    );

    // Convert bold text (**text**)
    processedContent = processedContent.replace(
      /\*\*([^*]+)\*\*/g,
      '<strong>$1</strong>'
    );

    // Convert links - [text](url)
    processedContent = processedContent.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class="text-resgato-blue hover:underline" target="_blank" rel="noopener noreferrer">$1</a>'
    );

    // Process unordered lists
    // First, identify list items
    processedContent = processedContent.replace(
      /^-\s+([^\n]+)/gm,
      '<li>$1</li>'
    );

    // Then wrap consecutive list items in a ul tag
    // This regex finds consecutive list items and wraps them in a ul
    processedContent = processedContent.replace(
      /(<li>.*?<\/li>(\s*<li>.*?<\/li>)*)/gs,
      '<ul class="list-disc pl-6 my-4">$1</ul>'
    );

    // Convert paragraphs - each double newline becomes a paragraph
    processedContent = processedContent.replace(
      /\n\n/g,
      '</p><p class="my-4">'
    );

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
    ALLOWED_TAGS: [
      'h1',
      'h2',
      'h3',
      'p',
      'a',
      'strong',
      'em',
      'ul',
      'ol',
      'li',
      'blockquote',
      'div',
    ],
    ALLOWED_ATTR: ['href', 'target', 'rel', 'class'],
  });

  return <div className="blog-content">{parse(sanitizedContent)}</div>;
};

export default BlogContent;
