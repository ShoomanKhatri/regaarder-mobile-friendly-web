"use client";

import React from "react";
import { Star, TrendingUp, Trophy } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";
import { SearchBar } from "@/components/ui/SearchBar";
import { TabNavigation } from "@/components/ui/TabNavigation";
import { VideoCard } from "@/components/features/VideoCard";
import { FloatingActionButton } from "@/components/ui/FloatingActionButton";
import { Video, TabItem } from "@/types";
import { useRouter } from "next/navigation";

const tabs: TabItem[] = [
  {
    id: "recommended",
    label: "Recommended",
    icon: <Star className="w-4 h-4" />,
  },
  {
    id: "trending",
    label: "Trending Now",
    icon: <TrendingUp className="w-4 h-4" />,
  },
  {
    id: "challenges",
    label: "Challenges",
    icon: <Trophy className="w-4 h-4" />,
  },
];

const mockVideos: Video[] = [
  {
    id: "1",
    title: "What if the cold war went hot? an alternate history",
    thumbnail:
      "https://images.unsplash.com/photo-1758204054606-fb5d59ee5631?w=800&h=450&fit=crop",
    duration: "4:30",
    views: 12000,
    creator: {
      id: "krypton-t",
      name: "Krypton T",
      username: "kryptont",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      isVerified: true,
      isTopCreator: true,
      rating: 4.8,
    },
    requestedBy: "OceanDreamer",
    timestamp: "1 month ago",
    isRequested: true,
  },
  {
    id: "2",
    title: "The Future of AI and Machine Learning",
    thumbnail:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop",
    duration: "8:15",
    views: 25000,
    creator: {
      id: "tech-guru",
      name: "Tech Guru",
      username: "techguru",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
      isVerified: true,
      isTopCreator: false,
      rating: 4.5,
    },
    requestedBy: "AIEnthusiast",
    timestamp: "2 weeks ago",
    isRequested: true,
  },
];

export default function Home() {
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState("recommended");
  const [videos, setVideos] = React.useState(mockVideos);

  const handleCloseVideo = (id: string) => {
    setVideos(videos.filter((v) => v.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header notificationCount={6} />

      <main className="px-4 pt-4 space-y-4">
        <SearchBar placeholder="Discover videos..." />

        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <div className="space-y-4 pb-4">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onClose={() => handleCloseVideo(video.id)}
            />
          ))}
        </div>
      </main>

      {/* Floating Action Button */}
      <FloatingActionButton onClick={() => router.push("/ideas")} />

      <BottomNav />
    </div>
  );
}
