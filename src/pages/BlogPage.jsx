import { useParams, Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { blogPosts } from "../components/BlogPost";

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-gray-500">Post not found.</p>
      </div>
    );
  }

  return (
    <article className="font-montserrat max-w-4xl mx-auto px-4 mt-10 sm:px-6 lg:px-8 py-12">

      {/* Navigation Link */}
      <nav className=" mt-6 mb-8">
        <Link 
          to="/blog" 
        >
          <svg 
            className="w-5 h-5 mr-2 [color:var(--text-color)] " 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 19l-7-7m0 0l7-7m-7 7h18" 
            />
          </svg>
        
        </Link>
      </nav>

      {/* Header Section */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold [color:var(--heading_1_color)] mb-4 leading-tight">
          {post.title}
        </h1>
        <time className="text-lg [color:var(--text-color)] opacity-70">
          {post.date}
        </time>
      </header>

      {/* Content Section */}
      <div className="prose prose-lg max-w-none [color:var(--text-color)]">
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => (
              <h1 className="text-3xl md:text-4xl font-bold [color:var(--heading_1_color)] mt-12 mb-6" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="text-2xl md:text-3xl font-bold [color:var(--heading_1_color)] mt-10 mb-5" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="text-xl md:text-2xl font-semibold [color:var(--heading_1_color)] mt-8 mb-4" {...props} />
            ),
            p: ({ node, ...props }) => (
              <p className="text-base md:text-lg leading-relaxed mb-6 [color:var(--text-color)]" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul className="list-disc list-inside mb-6 space-y-2 ml-4" {...props} />
            ),
            ol: ({ node, ...props }) => (
              <ol className="list-decimal list-inside mb-6 space-y-2 ml-4" {...props} />
            ),
            li: ({ node, ...props }) => (
              <li className="text-base md:text-lg leading-relaxed [color:var(--text-color)]" {...props} />
            ),
            a: ({ node, ...props }) => (
              <a 
                className="text-blue-600 hover:text-blue-800 underline transition-colors" 
                target="_blank" 
                rel="noopener noreferrer" 
                {...props} 
              />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote 
                className="border-l-4 border-gray-300 pl-6 py-2 my-6 italic [color:var(--text-color)] opacity-80" 
                {...props} 
              />
            ),
            code: ({ node, inline, ...props }) => (
              inline ? (
                <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono" {...props} />
              ) : (
                <code className="block bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono my-6" {...props} />
              )
            ),
            img: ({ node, ...props }) => (
              <img className="rounded-lg shadow-lg my-8 w-full" alt={props.alt || ""} {...props} />
            ),
            hr: ({ node, ...props }) => (
              <hr className="my-12 border-t-2 border-gray-200" {...props} />
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
