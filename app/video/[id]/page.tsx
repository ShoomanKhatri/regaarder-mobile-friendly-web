"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronLeft, X, Lightbulb, CheckCircle } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";

export default function VideoDetailPage() {
  const params = useParams();
  const router = useRouter();

  // Mock data - in production, fetch based on params.id
  const video = {
    id: params.id,
    title: "What if the cold war went hot? an alternate history",
    thumbnail: "/placeholder-video.jpg",
    duration: "4:30",
    creator: {
      name: "Krypton T",
      username: "kryptont",
      isVerified: true,
    },
    timestamp: "1 month ago",
    requestedBy: "OceanDreamer",
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header notificationCount={6} />

      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative aspect-video bg-gray-900">
            <Image
              src={video.thumbnail}
              alt={video.title}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/80 text-white text-sm px-3 py-1 rounded">
              {video.duration}
            </div>
            <button
              onClick={() => router.back()}
              className="absolute top-4 left-4 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 transition-colors"
              aria-label="Go back"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4">
            <h1 className="text-xl font-bold text-gray-900 mb-2">
              {video.title}
            </h1>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm text-orange-500">
                by {video.creator.name}
              </span>
              {video.creator.isVerified && (
                <Badge variant="blue" className="text-xs">
                  ✓
                </Badge>
              )}
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <span>{video.timestamp}</span>
              {video.requestedBy && (
                <div className="flex items-center gap-1">
                  <span>Requested by</span>
                  <span className="text-orange-500 font-medium">
                    {video.requestedBy}
                  </span>
                  <CheckCircle className="w-4 h-4 text-green-500" />
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-4">
                An exploration of alternate historical timelines where the Cold
                War escalated into a full-scale conflict. This documentary
                examines the potential outcomes and consequences of such a
                scenario.
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      <div className="fixed bottom-20 right-4 flex flex-col gap-2">
        <button
          className="bg-orange-500 text-white rounded-full p-4 shadow-lg hover:bg-orange-600 transition-colors"
          aria-label="Share idea"
        >
          <Lightbulb className="w-6 h-6" />
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
