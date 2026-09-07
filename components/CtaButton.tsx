"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CtaButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
}

export function CtaButton({
  children,
  variant = "primary",
  className,
  onClick,
}: CtaButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 active:scale-95 orange:focus:ring-orange-100",
        variant === "primary"
          ? "bg-accent-500 text-white shadow-lg hover:bg-accent-600 orange:bg-orange-950 orange:text-orange-50 orange:shadow-orange-950/40 orange:hover:bg-orange-800"
          : "border-2 border-accent-500 text-accent-700 hover:bg-accent-50 dark:border-accent-400 dark:text-accent-300 dark:hover:bg-primary-800 orange:border-orange-800 orange:text-orange-800 orange:hover:bg-orange-100",
        className,
      )}
    >
      {children}
    </button>
  );
}
