export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>
            © {currentYear} Chen Jiajun. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Built with Next.js, Tailwind CSS, and MDX
          </p>
        </div>
      </div>
    </footer>
  );
}

