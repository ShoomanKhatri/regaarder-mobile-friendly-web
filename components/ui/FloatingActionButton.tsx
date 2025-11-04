"use client";

import React from "react";
import { Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingActionButtonProps {
  onClick?: () => void;
  className?: string;
}

export function FloatingActionButton({
  onClick,
  className,
}: FloatingActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "fixed right-6 bottom-24 z-40 w-14 h-14 bg-accent hover:bg-accent/90 text-black rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group",
        className
      )}
      aria-label="Ideas"
    >
      <Lightbulb className="w-6 h-6 group-hover:scale-110 transition-transform" />
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20"></span>
    </button>
  );
}
