"use client"

import { useState } from "react"
import { Menu, Bell, Settings, Search } from "lucide-react"
import VideoCard from "./video-card"
import BottomNav from "./bottom-nav"

export default function VideoDiscoveryApp() {
  const [activeTab, setActiveTab] = useState("recommended")
  const [notificationCount] = useState(2)

  const videos = [
    {
      id: 1,
      title: "What if the cold war went hot? an alternate history",
      creator: "Krypton T",
      timeAgo: "1 month ago",
      requestedBy: "OceanDreamer",
      duration: "4:30",
      thumbnail: "/black-and-white-soldiers-historical.jpg",
      isRequested: true,
    },
    {
      id: 2,
      title: "The Evolution of Modern Technology",
      creator: "Tech Master",
      timeAgo: "2 weeks ago",
      requestedBy: "PixelDreamer",
      duration: "8:15",
      thumbnail: "/technology-innovation-future.png",
      isRequested: true,
    },
  ]

  return (
    <div className="w-full max-w-sm bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-screen max-h-screen">
      {/* Status Bar */}
      <div className="bg-white px-4 py-2 flex justify-between items-center text-xs font-medium text-black border-b border-gray-200">
        <span>9:23</span>
        <div className="flex gap-1">
          <div className="w-4 h-3 border border-black rounded-sm"></div>
          <div className="w-5 h-3 border border-black rounded-sm flex items-center justify-end pr-0.5">
            <div className="w-2 h-2 bg-black rounded-sm"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white px-4 py-4 border-b border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <button className="p-1 hover:bg-gray-100 rounded-lg">
            <Menu size={24} className="text-black" />
          </button>
          <div className="flex gap-3">
            <button className="relative p-1 hover:bg-gray-100 rounded-lg">
              <Bell size={24} className="text-black" />
              {notificationCount > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-amber-400 rounded-full text-xs font-bold flex items-center justify-center text-black">
                  {notificationCount}
                </span>
              )}
            </button>
            <button className="p-1 hover:bg-gray-100 rounded-lg">
              <Settings size={24} className="text-black" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Discover videos..."
            className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-full text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white px-4 py-3 flex gap-2 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("recommended")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all ${
            activeTab === "recommended" ? "bg-amber-400 text-black" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          ⭐ Recommended
        </button>
        <button
          onClick={() => setActiveTab("trending")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all ${
            activeTab === "trending" ? "bg-amber-400 text-black" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          📈 Trending Now
        </button>
      </div>

      {/* Video Feed */}
      <div className="flex-1 overflow-y-auto bg-white px-4 py-4 space-y-4">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  )
}
