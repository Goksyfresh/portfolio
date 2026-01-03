import { useParams } from "react-router-dom";

import ReactMarkdown from "react-markdown";
import { blogPosts } from "../components/BlogPost";

export default function BlogPost() {
  const { slug } = useParams();

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <p>Post not found.</p>;
  }
  return (
    <article className="flex flex-col items-center mt-25 gap-2">
      <h1 className="[color:var(--heading_1_color)] lg:text-2xl text-xl">{post.title}</h1>
      <p className="[color:var(--text-color)] lg:text-xl text-sm ">{post.date}</p>
      <div className="[color:var(--heading_1_color)] lg:text-xl text-lg flex flex-col items-start px-10 lg:px-24 mb-10">
 <ReactMarkdown>
        {post.content}
      </ReactMarkdown>
      </div>
     
    </article>
  );
}
