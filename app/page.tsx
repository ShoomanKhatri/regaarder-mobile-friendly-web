"use client";

import React from "react";
import { Star, TrendingUp, CheckCircle } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";
import { TabNavigation } from "@/components/ui/TabNavigation";
import { VideoCard } from "@/components/features/VideoCard";
import { Video, TabItem } from "@/types";

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
    id: "requested",
    label: "Requested",
    icon: <CheckCircle className="w-4 h-4" />,
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
    title: "The Evolution of Modern Technology",
    thumbnail:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=450&fit=crop",
    duration: "8:15",
    views: 15000,
    creator: {
      id: "tech-master",
      name: "Tech Master",
      username: "techmaster",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      isVerified: true,
      isTopCreator: false,
      rating: 4.5,
    },
    requestedBy: "PixelDreamer",
    timestamp: "2 weeks ago",
    isRequested: true,
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = React.useState("recommended");
  const [videos, setVideos] = React.useState(mockVideos);

  const handleCloseVideo = (id: string) => {
    setVideos(videos.filter((v) => v.id !== id));
  };

  return (
    <div className="w-full max-w-sm bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl shadow-2xl overflow-hidden flex flex-col min-h-screen mx-auto">
      <Header notificationCount={2} />

      {/* Tab Navigation */}
      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Video Feed */}
      <div className="flex-1 overflow-y-auto bg-white px-4 py-4 space-y-4">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
