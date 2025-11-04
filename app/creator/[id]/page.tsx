"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";
import { CreatorProfile } from "@/components/features/CreatorProfile";
import { Creator } from "@/types";

export default function CreatorProfilePage() {
  const params = useParams();

  // Mock data - in production, fetch based on params.id
  const creator: Creator = {
    id: params.id as string,
    name: "Krypton T",
    username: "kryptont",
    avatar: "/placeholder-avatar.jpg",
    isVerified: true,
    isTopCreator: true,
    rating: 4.8,
    bio: 'Creator of "What if the cold war went hot? an alternate history" and other amazing content.',
    stats: {
      videos: 24,
      fulfilled: 18,
      followers: 1200,
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header notificationCount={6} />

      <main>
        <CreatorProfile creator={creator} />
      </main>

      <BottomNav />
    </div>
  );
}
