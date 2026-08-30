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
        "group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800",
        className
      )}
    >
      <div className="mb-4 inline-flex rounded-xl bg-primary-50 p-3 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white dark:bg-slate-700 dark:text-primary-400 dark:group-hover:bg-primary-600 dark:group-hover:text-white">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
}
