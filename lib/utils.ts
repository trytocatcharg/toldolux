import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const INSTAGRAM_URL = "https://www.instagram.com/toldo_lux";
export const SITE_URL = "https://toldo-lux.com";