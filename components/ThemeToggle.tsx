"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Palette } from "lucide-react";
import { useEffect, useState } from "react";

const options = [
  { value: "light", label: "Tema claro", Icon: Sun },
  { value: "dark", label: "Tema oscuro", Icon: Moon },
  { value: "orange", label: "Tema naranja", Icon: Palette },
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className="flex items-center gap-1 rounded-full border border-primary-700 bg-primary-800/60 p-1"
      >
        {options.map(({ value, Icon }) => (
          <button
            key={value}
            disabled
            aria-label="Cambiar tema"
            className="rounded-full p-1.5 text-primary-100"
          >
            <Icon className="h-4 w-4" />
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-primary-700 bg-primary-800/60 p-1">
      {options.map(({ value, label, Icon }) => {
        const active = theme === value;
        return (
          <button
            key={value}
            type="button"
            aria-pressed={active}
            aria-label={label}
            title={label}
            onClick={() => setTheme(value)}
            className={`rounded-full p-1.5 ${
              active
                ? "bg-accent-500 text-white"
                : "text-primary-100 transition-colors hover:bg-primary-700 orange:text-orange-100 orange:hover:bg-orange-700"
            }`}
          >
            <Icon className="h-4 w-4" />
          </button>
        );
      })}
    </div>
  );
}
