"use client";

import { ChevronLeft, Star, Share2 } from "lucide-react";
import BottomNav from "@/app/components/bottom-nav";

export default function CreatorProfilePage({ creator, onNavigate, onBack }) {
  const videos = [
    {
      id: 1,
      thumbnail:
        "url(https://images.unsplash.com/photo-1533050487297-86b450e76b73?w=500&h=300&fit=crop)",
      views: "12K",
    },
    {
      id: 2,
      thumbnail:
        "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop)",
      views: "8K",
    },
    {
      id: 3,
      thumbnail:
        "url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=300&fit=crop)",
      views: "15K",
    },
  ];

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-2xl h-screen max-h-[812px] lg:max-h-screen lg:h-auto lg:min-h-screen flex flex-col">
      {/* Status Bar */}
      <div className="bg-white px-6 py-3 flex justify-between items-center border-b border-gray-100">
        <span className="text-sm font-semibold text-green-500">● 9:23</span>
        <div className="flex gap-2">
          <div className="w-4 h-2 bg-black rounded-sm"></div>
          <div className="w-6 h-3 border border-black rounded-sm"></div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white px-6 py-4 border-b border-gray-100 flex items-center">
        <button onClick={onBack}>
          <ChevronLeft className="w-6 h-6 text-gray-900" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 lg:px-8 py-6">
        <div className="max-w-2xl mx-auto">
          {/* Creator Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="relative">
                <img
                  src={
                    creator?.avatar ||
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                  }
                  alt={creator?.name}
                  className="w-16 h-16 rounded-full border-4 border-amber-500 flex-shrink-0"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg lg:text-xl font-bold text-gray-900">
                    {creator?.name || "Krypton T"}
                  </h2>
                  <Star className="w-5 h-5 fill-amber-500 text-amber-500 flex-shrink-0" />
                </div>
                <p className="text-gray-500 text-sm">@kryptont</p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    ✓ verified
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    🏆 top creator
                  </span>
                </div>
              </div>
              <span className="font-bold text-gray-900 text-lg">4.8</span>
            </div>

            <p className="text-gray-600 text-sm mb-4">
              Creator of "What if the cold war went hot? an alternate history"
              and other amazing content.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <div className="text-center">
                <p className="text-2xl lg:text-3xl font-bold text-gray-900">
                  24
                </p>
                <p className="text-gray-500 text-sm">Videos</p>
              </div>
              <div className="text-center bg-green-50 rounded-lg p-3">
                <p className="text-2xl lg:text-3xl font-bold text-green-600">
                  18
                </p>
                <p className="text-green-600 text-sm">Fulfilled</p>
              </div>
              <div className="text-center">
                <p className="text-2xl lg:text-3xl font-bold text-gray-900">
                  1200
                </p>
                <p className="text-gray-500 text-sm">Followers</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 bg-amber-500 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-amber-600 transition">
                👥 Follow
              </button>
              <button className="flex-1 border-2 border-amber-500 text-amber-500 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-amber-50 transition">
                $ Tip
              </button>
              <button className="border-2 border-gray-200 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Recent Videos */}
          <h3 className="font-bold text-gray-900 mb-3">Recent Videos</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {videos.map((video) => (
              <div
                key={video.id}
                className="relative rounded-lg overflow-hidden h-24 sm:h-32 bg-cover bg-center"
                style={{ backgroundImage: video.thumbnail }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold flex items-center gap-1">
                    👁 {video.views}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab="home" onNavigate={onNavigate} />
    </div>
  );
}
