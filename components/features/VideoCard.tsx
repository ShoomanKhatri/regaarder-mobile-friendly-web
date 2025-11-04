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
        "relative bg-white rounded-lg overflow-hidden border border-border",
        className
      )}
    >
      <Link href={`/video/${video.id}`}>
        <div className="relative aspect-video bg-gray-100">
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            className="object-cover"
            unoptimized
          />

          {/* Duration Badge */}
          <div className="absolute bottom-3 right-3 bg-black/90 text-white text-xs font-semibold px-2 py-1 rounded">
            {video.duration}
          </div>

          {/* Requested Badge */}
          {video.isRequested && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-orange-100 text-orange-600 border-orange-200 font-medium shadow-sm">
                📝 Requested
              </Badge>
            </div>
          )}
        </div>
      </Link>

      <div className="p-4 space-y-1">
        <Link href={`/video/${video.id}`}>
          <h3 className="font-semibold text-foreground text-base leading-tight line-clamp-2 hover:text-accent transition-colors">
            {video.title}
          </h3>
        </Link>
        <p className="text-sm text-accent font-medium">
          by {video.creator.name}
        </p>
        <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
          <span>{video.timestamp}</span>
          {video.requestedBy && (
            <span>
              Requested by{" "}
              <span className="text-foreground font-medium underline">
                {video.requestedBy}
              </span>
            </span>
          )}
        </div>
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-foreground rounded-full p-1.5 hover:bg-white transition-colors z-10 shadow-md"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </motion.div>
  );
}
