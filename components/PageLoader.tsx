"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const LOADER_DURATION = 1800;

export function PageLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(true);
      return;
    }
    const timer = setTimeout(() => setDone(true), LOADER_DURATION);
    return () => clearTimeout(timer);
  }, []);

  if (done) return null;

  return (
    <div
      aria-hidden
      className="loader-overlay fixed inset-0 z-[100] overflow-hidden bg-primary-950"
    >
      {/* Luz ambiental naranja suave detrás del logo */}
      <div className="loader-glow absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/15 blur-3xl" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
        {/* Logo */}
        <div className="loader-logo rounded-full bg-primary-950/60 p-6 ring-1 ring-white/10 sm:p-8">
          <Image
            src="/images/header-removebg.png"
            alt="Toldo Lux"
            width={150}
            height={138}
            priority
            className="h-auto w-32 sm:w-40"
          />
        </div>

        {/* Línea fina que se dibuja bajo el logo */}
        <div className="loader-line h-[2px] w-28 origin-center rounded-full bg-accent-500" />
      </div>
    </div>
  );
}
