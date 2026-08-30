"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CtaButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
}

export function CtaButton({ children, variant = "primary", className, onClick }: CtaButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 active:scale-95",
        variant === "primary"
          ? "bg-primary-600 text-white shadow-lg hover:bg-primary-700"
          : "border-2 border-primary-600 text-primary-700 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-300 dark:hover:bg-slate-800",
        className
      )}
    >
      {children}
    </button>
  );
}
