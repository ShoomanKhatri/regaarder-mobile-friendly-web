"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Share2 } from "lucide-react";
import { Creator } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CreatorProfileProps {
  creator: Creator;
  className?: string;
}

export function CreatorProfile({ creator, className }: CreatorProfileProps) {
  const [isFollowing, setIsFollowing] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn("bg-white", className)}
    >
      <div className="p-4">
        <div className="flex items-start gap-4 mb-4">
          <Image
            src={creator.avatar}
            alt={creator.name}
            width={80}
            height={80}
            className="rounded-full ring-4 ring-orange-100"
          />

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-xl font-bold text-gray-900">
                {creator.name}
              </h1>
              {creator.isTopCreator && creator.rating && (
                <Badge variant="orange" className="flex items-center gap-1">
                  ⭐ {creator.rating}
                </Badge>
              )}
            </div>
            <p className="text-sm text-gray-500 mb-2">@{creator.username}</p>

            <div className="flex flex-wrap gap-2">
              {creator.isVerified && <Badge variant="blue">✓ verified</Badge>}
              {creator.isTopCreator && (
                <Badge variant="orange">👑 top creator</Badge>
              )}
            </div>
          </div>
        </div>

        {creator.bio && (
          <p className="text-sm text-gray-600 mb-4">{creator.bio}</p>
        )}

        {creator.stats && (
          <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {creator.stats.videos}
              </div>
              <div className="text-xs text-gray-500">Videos</div>
            </div>
            <div className="text-center bg-green-100 rounded-lg py-2">
              <div className="text-2xl font-bold text-green-700">
                {creator.stats.fulfilled}
              </div>
              <div className="text-xs text-green-600">Fulfilled</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {creator.stats.followers}
              </div>
              <div className="text-xs text-gray-500">Followers</div>
            </div>
          </div>
        )}

        <div className="flex gap-2">
          <Button
            variant={isFollowing ? "secondary" : "primary"}
            className="flex-1 flex items-center justify-center gap-2"
            onClick={() => setIsFollowing(!isFollowing)}
          >
            <span className="text-lg">👤</span>
            {isFollowing ? "Following" : "Follow"}
          </Button>

          <Button
            variant="secondary"
            className="flex-1 flex items-center justify-center gap-2"
          >
            <span className="text-lg">💲</span>
            Tip
          </Button>

          <Button variant="ghost" size="md" className="px-4">
            <Share2 className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="px-4 pb-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-gray-900">Recent Videos</h2>
          <Link
            href={`/creator/${creator.id}/videos`}
            className="text-sm text-orange-500 hover:text-orange-600 font-medium"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {/* Placeholder for video thumbnails */}
          {[12000, 8000, 15000].map((views, idx) => (
            <div
              key={idx}
              className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                  👁 {views >= 1000 ? `${(views / 1000).toFixed(0)}K` : views}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
