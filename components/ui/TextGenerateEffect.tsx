"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  // Split by newlines first, then by spaces
  const lines = words.split("\n");

  useEffect(() => {
    animate("span", { opacity: 1 }, { duration: 2, delay: stagger(0.2) });
  }, [scope]);

  const renderWords = () => (
    <motion.div ref={scope}>
      {lines.map((line, lineIndex) => (
        <div key={lineIndex}>
          {line.split(/(\s+)/).map((word, wordIndex) =>
            word.trim() === "" ? (
              " " // preserve spaces
            ) : (
              <motion.span
                key={`${lineIndex}-${wordIndex}`}
                className="opacity-0 inline-block"
              >
                {word}&nbsp;
              </motion.span>
            )
          )}
          {lineIndex < lines.length - 1 && <br />}
        </div>
      ))}
    </motion.div>
  );

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4 leading-snug tracking-wide">{renderWords()}</div>
    </div>
  );
};
