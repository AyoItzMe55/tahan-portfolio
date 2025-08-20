import { Badge } from "@/components/ui/badge";

const tagStyles = {
  "Computer Science": "bg-indigo-100 text-indigo-800 border-indigo-200 dark:bg-indigo-900/20 dark:text-indigo-300 dark:border-indigo-800/30 hover:bg-indigo-200 dark:hover:bg-indigo-900/30",
  "Sustainability": "bg-teal-100 text-teal-800 border-teal-200 dark:bg-teal-900/20 dark:text-teal-300 dark:border-teal-800/30 hover:bg-teal-200 dark:hover:bg-teal-900/30",
  "Research": "bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-800/30 hover:bg-emerald-200 dark:hover:bg-emerald-900/30",
  "Community Service": "bg-rose-100 text-rose-800 border-rose-200 dark:bg-rose-900/20 dark:text-rose-300 dark:border-rose-800/30 hover:bg-rose-200 dark:hover:bg-rose-900/30",
  "Robotics": "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800/30 hover:bg-amber-200 dark:hover:bg-amber-900/30",
  "Education": "bg-sky-100 text-sky-800 border-sky-200 dark:bg-sky-900/20 dark:text-sky-300 dark:border-sky-800/30 hover:bg-sky-200 dark:hover:bg-sky-900/30",
  "Entrepreneurship": "bg-violet-100 text-violet-800 border-violet-200 dark:bg-violet-900/20 dark:text-violet-300 dark:border-violet-800/30 hover:bg-violet-200 dark:hover:bg-violet-900/30",
} as const;

const tagDotColors = {
  "Computer Science": "bg-indigo-500 dark:bg-indigo-400",
  "Sustainability": "bg-teal-500 dark:bg-teal-400", 
  "Research": "bg-emerald-500 dark:bg-emerald-400",
  "Community Service": "bg-rose-500 dark:bg-rose-400",
  "Robotics": "bg-amber-500 dark:bg-amber-400",
  "Education": "bg-sky-500 dark:bg-sky-400",
  "Entrepreneurship": "bg-violet-500 dark:bg-violet-400",
} as const;

interface TagBadgeProps {
  tag: string;
  className?: string;
}

export function TagBadge({ tag, className = "" }: TagBadgeProps) {
  const colorKey = tag as keyof typeof tagStyles;
  const badgeStyle = tagStyles[colorKey] || tagStyles["Computer Science"];
  const dotStyle = tagDotColors[colorKey] || tagDotColors["Computer Science"];
  
  return (
    <Badge 
      variant="secondary" 
      className={`
        inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1
        ${badgeStyle}
        transition-colors duration-200
        ${className}
      `}
    >
      <div className={`w-1.5 h-1.5 rounded-full ${dotStyle}`} />
      {tag}
    </Badge>
  );
}