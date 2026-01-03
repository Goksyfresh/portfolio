
import { Link } from "react-router-dom";
import { blogPosts } from "../components/BlogPost";

export default function Blog() {
  return (
    <section className="flex flex-col gap-6 items-center mt-25">
      <h1 className=" [color:var(--heading_1_color)] lg:text-4xl text-xl uppercase">Blog</h1> 

      {blogPosts.map(post => (
        <article key={post.slug} className='flex flex-col gap-2 border-b border-[var(--text-color)] pb-4 w-[80%]'>
          <h2 className="[color:var(--heading_1_color)] lg:text-3xl text-xl">
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
          <p className="[color:var(--text-color)] text-sm">{post.date}</p>
          <p className="[color:var(--text-color)]">{post.excerpt}</p>
        </article>
      ))}
    </section>
  );
}
