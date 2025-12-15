"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface CounterProps {
  count: number;
  duration?: number;
  title: string;
  separator?: string;
  className?: string;
}

const Counter = ({
  title,
  count,
  separator = "+",
  className,
  duration = 1000,
}: CounterProps) => {
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(count / (duration / 16));

    const timer = setInterval(() => {
      start += increment;
      if (start >= count) {
        setDisplayCount(count);
        clearInterval(timer);
      } else {
        setDisplayCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [count, duration]);

  // 🔒 lock width based on final number
  const maxDigits = count.toString().length + separator.length;

  return (
    <div
      className={cn(
        "flex items-center border p-4 rounded-2xl gap-2",
        className
      )}
    >
      <span
        className="text-6xl font-semibold text-right"
        style={{ width: `${maxDigits}ch` }}
      >
        {displayCount}
        {separator}
      </span>

      <p className="leading-tight">{title}</p>
    </div>
  );
};

export default Counter;
