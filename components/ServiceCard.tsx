import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function ServiceCard({ icon, title, description, className }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group rounded-2xl border border-primary-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-primary-700 dark:bg-primary-800",
        className
      )}
    >
      <div className="mb-4 inline-flex rounded-xl bg-accent-50 p-3 text-accent-600 transition-colors group-hover:bg-accent-500 group-hover:text-white dark:bg-primary-700 dark:text-accent-400 dark:group-hover:bg-accent-500 dark:group-hover:text-white">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold text-primary-900 dark:text-white">{title}</h3>
      <p className="text-primary-600 dark:text-primary-200">{description}</p>
    </div>
  );
}
