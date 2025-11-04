"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "orange" | "green" | "gray" | "blue";
  className?: string;
}

export function Badge({ children, variant = "orange", className }: BadgeProps) {
  const variants = {
    orange: "bg-orange-500 text-white",
    green: "bg-green-500 text-white",
    gray: "bg-gray-200 text-gray-700",
    blue: "bg-blue-100 text-blue-700",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
