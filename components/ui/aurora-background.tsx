"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center bg-zinc-900 dark:bg-zinc-950 text-gray-200 transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `
    [--black-gradient:repeating-linear-gradient(100deg,#1a1a1a_0%,#1a1a1a_7%,var(--transparent)_10%,var(--transparent)_12%,#1a1a1a_16%)]
    [--dark-aurora:repeating-linear-gradient(100deg,#0a0a1a_10%,#1a0a2a_15%,#2a0a3a_20%,#0a1a3a_25%,#1a0a3a_30%)]
    [background-image:var(--black-gradient),var(--dark-aurora)]
    [background-size:300%,_200%]
    [background-position:50%_50%,50%_50%]
    filter blur-[10px]
    after:content-[""] after:absolute after:inset-0 after:[background-image:var(--black-gradient),var(--dark-aurora)] 
    after:[background-size:200%,_100%] 
    after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
    pointer-events-none absolute -inset-[10px] opacity-60 will-change-transform`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,#1a1a1a_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
