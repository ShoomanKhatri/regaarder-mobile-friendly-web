"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";
import { VideoCard } from "@/components/features/VideoCard";
import { Video } from "@/types";

export default function CreatorVideosPage() {
  const params = useParams();

  // Mock data
  const videos: Video[] = [
    {
      id: "1",
      title: "What if the cold war went hot? an alternate history",
      thumbnail: "/placeholder-video.jpg",
      duration: "4:30",
      views: 12000,
      creator: {
        id: params.id as string,
        name: "Krypton T",
        username: "kryptont",
        avatar: "/placeholder-avatar.jpg",
        isVerified: true,
        isTopCreator: true,
      },
      timestamp: "1 month ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header notificationCount={6} />

      <div className="px-4 py-4">
        <div className="flex items-center gap-3 mb-6">
          <Link href={`/creator/${params.id}`}>
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </Link>
          <h1 className="text-xl font-bold text-gray-900">All Videos</h1>
        </div>

        <div className="space-y-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
