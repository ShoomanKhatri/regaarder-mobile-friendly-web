"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { Video } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface VideoCardProps {
  video: Video;
  onClose?: () => void;
  className?: string;
}

export function VideoCard({ video, onClose, className }: VideoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "relative bg-card rounded-2xl overflow-hidden shadow-md border-0",
        className
      )}
    >
      <Link href={`/video/${video.id}`}>
        <div className="relative aspect-[16/10] bg-gray-200">
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            className="object-cover"
            unoptimized
          />

          {/* Duration Badge */}
          <div className="absolute bottom-3 right-3 bg-black/85 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-md">
            {video.duration}
          </div>

          {/* Requested Badge */}
          {video.isRequested && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-accent text-white font-semibold px-3 py-1.5 shadow-lg border-0 text-xs">
                📝 Requested
              </Badge>
            </div>
          )}
        </div>
      </Link>

      <div className="p-4 space-y-2">
        <Link href={`/video/${video.id}`}>
          <h3 className="font-semibold text-card-foreground text-[15px] leading-snug line-clamp-2 hover:text-accent transition-colors">
            {video.title}
          </h3>
        </Link>
        <p className="text-sm text-accent font-medium">
          by {video.creator.name}
        </p>
        <div className="flex items-center justify-between text-xs text-muted-foreground pt-0.5">
          <span>{video.timestamp}</span>
          {video.requestedBy && (
            <span className="text-muted-foreground">
              Requested by{" "}
              <span className="text-card-foreground font-medium underline decoration-dotted">
                {video.requestedBy}
              </span>
            </span>
          )}
        </div>
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white rounded-full p-2 hover:bg-black/85 transition-colors z-10 shadow-lg"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
      )}

      {/* Floating Idea Bulb Button */}
      <button className="absolute bottom-4 right-4 bg-accent hover:bg-accent/90 text-white rounded-full p-3.5 shadow-2xl transition-all transform hover:scale-110 z-10">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.33.47 2.48 1.5 3.5.76.76 1.23 1.52 1.41 2.5" />
        </svg>
      </button>
    </motion.div>
  );
}
