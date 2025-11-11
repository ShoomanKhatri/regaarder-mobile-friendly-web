"use client";

import { useEffect, useState } from "react";

type Creator = {
  name?: string;
  avatar?: string;
};

type HomePageProps = {
  onCreatorClick?: (creator: Creator) => void;
  onNavigate?: (page: string) => void;
};
import { Search, Bell, Settings, MoreVertical } from "lucide-react";
import BottomNav from "@/app/components/bottom-nav";

export default function HomePage({
  onCreatorClick,
  onNavigate,
}: HomePageProps) {
  const [activeTab, setActiveTab] = useState("recommended");

  const videos = [
    {
      id: 1,
      title: "What if the cold war went hot? an alternate history",
      creator: "Krypton T",
      duration: "4:30",
      thumbnail:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop",
      badge: "Requested",
      creatorAvatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      timeAgo: "1 month ago",
      requestedBy: "OceanDreamer",
    },
    {
      id: 2,
      title: "Future of Technology",
      creator: "Tech Talk Daily",
      duration: "8:45",
      thumbnail:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop",
      badge: "Trending",
      creatorAvatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      timeAgo: "2 days ago",
    },
    {
      id: 3,
      title: "10 Programming Languages You Should Learn in 2025",
      creator: "Code Master",
      duration: "12:15",
      thumbnail:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
      badge: "Trending",
      creatorAvatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      timeAgo: "5 hours ago",
    },
    {
      id: 4,
      title: "The Rise of Artificial Intelligence",
      creator: "AI Insights",
      duration: "15:30",
      thumbnail:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      badge: "Requested",
      creatorAvatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      timeAgo: "3 days ago",
      requestedBy: "TechEnthusiast",
    },
    {
      id: 5,
      title: "Space Exploration: Mars Mission 2025",
      creator: "Space Channel",
      duration: "20:45",
      thumbnail:
        "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=500&h=300&fit=crop",
      creatorAvatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      timeAgo: "1 week ago",
    },
    {
      id: 6,
      title: "Cooking Masterclass: Italian Cuisine",
      creator: "Chef Maria",
      duration: "18:20",
      thumbnail:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop",
      badge: "Trending",
      creatorAvatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
      timeAgo: "2 days ago",
    },
  ];

  // real-time clock for status bar
  const [now, setNow] = useState<Date>(() => new Date());
  useEffect(() => {
    const tick = () => setNow(new Date());
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-white w-full h-full flex justify-center overflow-hidden">
      <div className="w-[90%] max-w-7xl h-full flex flex-col">
        {/* Status Bar */}
        <div className="bg-white py-3 flex justify-between items-center border-b border-gray-100 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-sm leading-none">●</span>
            <span className="text-sm font-semibold text-gray-700">
              {now.toLocaleTimeString(undefined, {
                hour: "numeric",
                minute: "2-digit",
              })}
            </span>
          </div>
          <div className="flex gap-2">
            <div className="w-4 h-2 bg-black rounded-sm"></div>
            <div className="w-6 h-3 border border-black rounded-sm"></div>
          </div>
        </div>

        {/* Header */}
        <div className="bg-white py-0 border-b border-gray-100 shrink-0">
          <div className="flex justify-between items-center">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <span className="text-2xl">☰</span>
            </button>
            <div className="flex gap-4 items-center">
              <div className="relative">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Bell className="w-6 h-6 text-gray-700" />
                  <span className="absolute top-0 right-0 bg-amber-500 rounded-full w-4 h-4 flex items-center justify-center text-white text-[10px] font-bold">
                    2
                  </span>
                </button>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="px-0 py-2 bg-white shrink-0">
          <div className="flex items-center bg-gray-50 rounded-xl px-4 py-2 border border-gray-200">
            <Search className="w-5 h-5 text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="search requested videos..."
              className="bg-transparent ml-3 w-full outline-none text-gray-700 placeholder-gray-400 text-base font-normal"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="py-1 bg-white border-b border-gray-100 flex gap-3 justify-start shrink-0">
          <button
            onClick={() => setActiveTab("recommended")}
            style={{
              padding: activeTab === "recommended" ? "12px 40px" : "12px 32px",
            }}
            className={`rounded-full font-medium text-sm transition-all ${
              activeTab === "recommended"
                ? "bg-amber-500 text-white shadow-lg"
                : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"
            }`}
          >
            ⭐ Recommended
          </button>
          <button
            onClick={() => setActiveTab("trending")}
            style={{
              padding: activeTab === "trending" ? "6px 10px" : "6px 10px",
            }}
            className={`rounded-full font-medium text-sm transition-all ${
              activeTab === "trending"
                ? "bg-amber-500 text-white shadow-lg"
                : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"
            }`}
          >
            → Trending Now
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
            {videos.map((video) => (
              <div key={video.id} className="mb-2 sm:mb-0">
                <div className="relative mb-3">
                  <div className="w-full h-48 sm:h-52 lg:h-56 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    {video.badge && (
                      <div className="absolute top-3 right-3 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        ◐ {video.badge}
                      </div>
                    )}
                    <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-semibold">
                      {video.duration}
                    </div>
                  </div>
                </div>

                <h3 className="font-bold text-gray-900 text-base mb-2.5 line-clamp-2 leading-snug">
                  {video.title}
                </h3>

                <div className="flex items-center gap-2.5 mb-2">
                  <img
                    src={video.creatorAvatar || "/placeholder.svg"}
                    alt={video.creator}
                    className="w-9 h-9 rounded-full shrink-0 object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-amber-600 truncate">
                      by {video.creator}
                    </p>
                    <p className="text-xs text-gray-500">{video.timeAgo}</p>
                  </div>
                  <button
                    onClick={() =>
                      onCreatorClick?.({
                        name: video.creator,
                        avatar: video.creatorAvatar,
                      })
                    }
                    className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <MoreVertical className="w-4 h-4 text-gray-400 shrink-0" />
                  </button>
                </div>

                {video.requestedBy && (
                  <p className="text-xs text-gray-500">
                    Requested by {video.requestedBy}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNav activeTab="home" onNavigate={onNavigate} />
      </div>
    </div>
  );
}
