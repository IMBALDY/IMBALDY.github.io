import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { Calendar, Tag } from "lucide-react";

export const metadata = {
  title: "Blog - Chen Jiajun",
  description: "Research blog and technical writings",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Blog</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
        Thoughts on research, technology, and learning
      </p>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">
            No blog posts yet. Check back soon!
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border-b border-gray-200 dark:border-gray-800 pb-8 last:border-b-0"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {post.date}
                  </span>
                  {post.tags && post.tags.length > 0 && (
                    <span className="flex items-center gap-1">
                      <Tag size={16} />
                      {post.tags.join(", ")}
                    </span>
                  )}
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {post.description}
                </p>
                
                <span className="inline-block mt-4 text-blue-600 dark:text-blue-400 group-hover:underline">
                  Read more →
                </span>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

