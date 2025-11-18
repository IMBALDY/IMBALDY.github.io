import Image from "next/image";
import { 
  Mail, 
  Github, 
  ExternalLink,
  Briefcase,
  FileText 
} from "lucide-react";
import Timeline from "@/components/Timeline";
import { personalInfo } from "@/lib/config";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-gray-200 dark:border-gray-700">
            <Image
              src="/profile.jpg"
              alt="Chen Jiajun"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              {personalInfo.name}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              {personalInfo.title}
            </p>
            
            {/* Contact Links */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
              >
                <Mail size={20} />
                <span>Email</span>
              </a>
              
              <a 
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              
              <a 
                href={personalInfo.orcid}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
              >
                <ExternalLink size={20} />
                <span>ORCID</span>
              </a>
              
              {personalInfo.scholar && (
                <a 
                  href={personalInfo.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <GraduationCap size={20} />
                  <span>Scholar</span>
                </a>
              )}
              
              {personalInfo.openreview && (
                <a 
                  href={personalInfo.openreview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <ExternalLink size={20} />
                  <span>OpenReview</span>
                </a>
              )}
              
              <a 
                href={personalInfo.bluesky}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
              >
                <ExternalLink size={20} />
                <span>Bluesky</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-serif font-bold mb-6">About Me</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed">
            I am a research intern at the{" "}
            <a 
              href={personalInfo.cvmlLabUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
            >
              Computer Vision and Machine Learning (CVML) Lab
            </a>{" "}
            at National University of Singapore, working under the supervision of Prof. Angela Yao and Dr. Junbin Xiao (Postdoctoral Research Fellow). 
            My research interests lie in <strong>video understanding</strong>, <strong>long-term memory</strong>, and <strong>world models</strong>. 
            I am actively seeking PhD opportunities to further explore these areas and contribute to 
            advancing artificial intelligence through innovative approaches to temporal reasoning and visual learning.
          </p>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-3">
          <Briefcase className="text-blue-600 dark:text-blue-400" />
          Education & Experience
        </h2>
        <Timeline items={[...personalInfo.education, ...personalInfo.experience]} />
      </section>

      {/* Publications Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-3">
          <FileText className="text-blue-600 dark:text-blue-400" />
          Publications
        </h2>
        <div className="space-y-6">
          {personalInfo.publications.map((pub, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              {/* Title */}
              <h3 className="text-xl font-serif font-semibold text-gray-900 dark:text-gray-100 mb-3">
                {pub.title}
              </h3>
              
              {/* Authors */}
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                {pub.authors.split(',').map((author, i) => {
                  const trimmedAuthor = author.trim();
                  const isYou = trimmedAuthor.startsWith('Jiajun Chen');
                  return (
                    <span key={i}>
                      {i > 0 && ', '}
                      <span className={isYou ? 'font-semibold' : ''}>
                        {trimmedAuthor}
                      </span>
                    </span>
                  );
                })}
              </p>
              
              {/* Venue and Year */}
              <div className="flex flex-wrap items-center gap-3 text-sm mb-2">
                <span className="text-gray-600 dark:text-gray-400">
                  <strong>{pub.venue}</strong> {pub.year}
                </span>
                
                {pub.highlight && (
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs font-semibold">
                    {pub.highlight}
                  </span>
                )}
                
                {pub.status === "accepted" && (
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs font-semibold">
                    ✓ Accepted
                  </span>
                )}
                
                {pub.status === "submitted" && (
                  <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded text-xs font-semibold">
                    Under Review
                  </span>
                )}
              </div>
              
              {/* Note */}
              {pub.note && (
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  {pub.note}
                </p>
              )}
              
              {/* Links */}
              {(pub.pdf || pub.code) && (
                <div className="flex gap-3 mt-3">
                  {pub.pdf && (
                    <a 
                      href={pub.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      [arXiv]
                    </a>
                  )}
                  {pub.code && (
                    <a 
                      href={pub.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      [Code]
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

