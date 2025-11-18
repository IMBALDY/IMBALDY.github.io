import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { Calendar, Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import MDXComponents from "@/components/MDXComponents";
import Comments from "@/components/Comments";
import TableOfContents from "@/components/TableOfContents";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - Chen Jiajun`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <ArrowLeft size={20} />
          Back to Blog
        </Link>

        {/* Article Header */}
        <article>
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
              <span className="flex items-center gap-2">
                <Calendar size={18} />
                {post.date}
              </span>
              
              {post.author && (
                <span>by {post.author}</span>
              )}
              
              {post.tags && post.tags.length > 0 && (
                <span className="flex items-center gap-2">
                  <Tag size={18} />
                  {post.tags.join(", ")}
                </span>
              )}
            </div>
          </header>

          {/* Table of Contents */}
          <TableOfContents content={post.content} />

          {/* Article Content */}
          <div className="prose dark:prose-invert prose-lg max-w-none">
            <MDXRemote
              source={post.content}
              components={MDXComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm, remarkMath],
                  rehypePlugins: [
                    rehypeKatex,
                    [
                      rehypePrettyCode,
                      {
                        theme: "github-dark",
                        keepBackground: true,
                      },
                    ],
                  ],
                },
              }}
            />
          </div>
        </article>

        {/* Comments Section */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <Comments />
        </div>
      </div>
    </div>
  );
}

