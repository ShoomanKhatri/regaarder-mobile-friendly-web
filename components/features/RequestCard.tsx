"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Share2 } from "lucide-react";
import { Request } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface RequestCardProps {
  request: Request;
  onClose?: () => void;
  className?: string;
}

export function RequestCard({ request, onClose, className }: RequestCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn("bg-white rounded-lg shadow-md p-4 relative", className)}
    >
      <div className="flex gap-3 mb-3">
        <Link href={`/creator/${request.creator.id}`}>
          <Image
            src={request.creator.avatar}
            alt={request.creator.name}
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <Link href={`/creator/${request.creator.id}`}>
              <span className="font-semibold text-gray-900 hover:text-orange-500 transition-colors">
                {request.creator.name}
              </span>
            </Link>
            {request.creator.isVerified && (
              <Badge variant="blue" className="text-xs">
                ✓ verified
              </Badge>
            )}
          </div>
          <p className="text-xs text-gray-500">{request.timestamp}</p>
        </div>

        <div className="flex items-start gap-2">
          {request.isTrending && (
            <Badge variant="orange" className="flex items-center gap-1">
              🔥 Trending
            </Badge>
          )}
          {request.amount && (
            <Badge variant="green" className="font-bold">
              ${request.amount.toFixed(2)}
            </Badge>
          )}
        </div>
      </div>

      <h3 className="font-bold text-gray-900 text-base mb-2">
        {request.title}
      </h3>

      <p
        className={cn(
          "text-sm text-gray-600 mb-3",
          !isExpanded && "line-clamp-2"
        )}
      >
        {request.description}
      </p>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-sm text-orange-500 hover:text-orange-600 font-medium mb-3"
      >
        {isExpanded ? "See less..." : "See more..."}
      </button>

      <div className="flex items-center gap-2">
        <Button variant="primary" size="sm" className="flex items-center gap-2">
          <Share2 className="w-4 h-4" />
          Share to boost
        </Button>

        {request.isSponsored && <Badge variant="gray">Sponsored</Badge>}
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </motion.div>
  );
}
