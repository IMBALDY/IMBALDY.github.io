import { TimelineItem } from "@/lib/types";

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
      {items.map((item, index) => (
        <div key={index} className="mb-10 relative">
          {/* Dot */}
          <div className="absolute -left-[37px] w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900"></div>
          
          {/* Content */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-serif font-semibold text-gray-900 dark:text-gray-100">
                {item.title}
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
                {item.period}
              </span>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">
              {item.organization}
            </p>
            
            {item.description && (
              <p className="text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            )}
            
            {item.location && (
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                📍 {item.location}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

