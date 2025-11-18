import Image from "next/image";
import Link from "next/link";

const MDXComponents = {
  // Custom Image component
  img: (props: any) => (
    <Image
      {...props}
      width={800}
      height={600}
      className="rounded-lg my-8"
      alt={props.alt || "Blog image"}
    />
  ),
  
  // Custom Link component
  a: (props: any) => {
    const href = props.href;
    const isInternal = href && (href.startsWith("/") || href.startsWith("#"));
    
    if (isInternal) {
      return <Link href={href} {...props} />;
    }
    
    return (
      <a
        {...props}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 hover:underline"
      />
    );
  },
  
  // Custom heading components with anchor links
  h1: (props: any) => (
    <h1 id={props.children?.toString().toLowerCase().replace(/\s+/g, "-")} {...props} />
  ),
  h2: (props: any) => (
    <h2 id={props.children?.toString().toLowerCase().replace(/\s+/g, "-")} {...props} />
  ),
  h3: (props: any) => (
    <h3 id={props.children?.toString().toLowerCase().replace(/\s+/g, "-")} {...props} />
  ),
  
  // Custom code block
  pre: (props: any) => (
    <pre className="overflow-x-auto rounded-lg p-4 my-6" {...props} />
  ),
  
  // Custom inline code
  code: (props: any) => (
    <code className="text-sm" {...props} />
  ),
  
  // Custom blockquote
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-blue-600 dark:border-blue-400 pl-4 italic my-6" {...props} />
  ),
  
  // Custom table
  table: (props: any) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700" {...props} />
    </div>
  ),
};

export default MDXComponents;

