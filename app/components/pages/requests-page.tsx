"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import BottomNav from "@/app/components/bottom-nav";

type RequestsPageProps = {
  onNavigate?: (page: string) => void;
};

export default function RequestsPage({ onNavigate }: RequestsPageProps) {
  const [activeTab, setActiveTab] = useState("trending");

  const requests = [
    {
      id: 1,
      creator: "Blue Apron",
      title: "Sustainable Cooking: Farm to Table Series",
      description:
        "Create a series showcasing sustainable cooking practices using locally sourced ingredients. Visit local farms...",
      funding: "$900.00",
      badge: "Trending",
      creatorAvatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
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

      {/* Search Bar */}
      <div className="px-6 py-4 bg-white border-b border-gray-100">
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search requests..."
            className="bg-transparent ml-2 w-full outline-none text-gray-600 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="px-6 py-3 bg-white border-b border-gray-100 flex gap-4 flex-wrap">
        {["Trending", "Newest", "Top Funded"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`text-sm font-medium transition ${
              activeTab === tab.toLowerCase()
                ? "text-gray-900 border-b-2 border-gray-900"
                : "text-gray-500"
            }`}
          >
            {tab === "Newest" && "⏱ "}
            {tab === "Top Funded" && "$ "}
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {requests.map((request) => (
            <div
              key={request.id}
              className="border border-gray-200 rounded-lg p-4 relative"
            >
              <button className="absolute -left-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white rounded-full w-6 h-6 flex items-center justify-center">
                <X className="w-4 h-4" />
              </button>

              <div className="flex gap-3 mb-3">
                <img
                  src={request.creatorAvatar || "/placeholder.svg"}
                  alt={request.creator}
                  className="w-10 h-10 rounded-full flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-amber-600 truncate">
                    {request.creator}
                  </p>
                  <p className="text-xs text-gray-500">8h ago</p>
                </div>
                <div className="text-right flex-shrink-0">
                  {request.badge && (
                    <div className="inline-block bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-bold mb-1">
                      ◐ {request.badge}
                    </div>
                  )}
                  <p className="font-bold text-gray-900 text-sm">
                    {request.funding}
                  </p>
                </div>
              </div>

              <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                {request.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {request.description}
              </p>

              <div className="flex gap-2 flex-wrap">
                <button className="text-amber-600 text-sm font-medium">
                  See more...
                </button>
                <button className="ml-auto bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 flex-shrink-0">
                  ◐ Share to boost
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab="requests" onNavigate={onNavigate} />
    </div>
  );
}
