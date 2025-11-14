"use client";

import { useState } from "react";
import {
  Search,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  ChevronDown,
  Lightbulb,
  DollarSign,
  Clock,
} from "lucide-react";
import BottomNav from "@/app/components/bottom-nav";

type RequestsPageProps = {
  onNavigate?: (page: string) => void;
};

export default function RequestsPage({ onNavigate }: RequestsPageProps) {
  const [activeTab, setActiveTab] = useState("trending");

  const requests = [
    {
      id: 1,
      creator: "Tesla Motors",
      title: "Tesla Model Y: Full Review and Road Trip",
      description:
        "Need a comprehensive review of the Tesla Model Y including a long-distance road trip to showcase charging infrastructure...",
      funding: "$2500.00",
      badge: "Trending",
      creatorAvatar:
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
      timeAgo: "5h ago",
      likes: 89,
      comments: 34,
      boosts: 45,
    },
    {
      id: 2,
      creator: "Adobe Creative",
      title: "Photoshop 2025: Advanced Editing Techniques",
      description:
        "Looking for a comprehensive tutorial on the latest Photoshop features. Cover AI tools, advanced masking, and new generative AI capabilities in depth and detail...",
      funding: "$1200.00",
      badge: "Trending",
      creatorAvatar:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop",
      timeAgo: "1d ago",
      likes: 156,
      comments: 67,
      boosts: 89,
    },
    {
      id: 3,
      creator: "Blue Apron",
      title: "Sustainable Cooking: Farm to Table Series",
      description:
        "Create a series showcasing sustainable cooking practices using locally sourced ingredients. Visit local farms and document the journey...",
      funding: "$900.00",
      badge: "Trending",
      creatorAvatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      timeAgo: "8h ago",
      likes: 234,
      comments: 89,
      boosts: 123,
    },
    {
      id: 4,
      creator: "Tech Insights",
      title: "AI Revolution 2025: What's Next?",
      description:
        "Deep dive into the latest AI developments and what they mean for the future. Cover GPT-5, autonomous systems, and AI ethics...",
      funding: "$1800.00",
      creatorAvatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      timeAgo: "2d ago",
      likes: 312,
      comments: 145,
      boosts: 234,
    },
    {
      id: 5,
      creator: "Fitness Pro",
      title: "Home Workout Revolution: No Equipment Needed",
      description:
        "Complete 30-day home workout program that requires zero equipment. Focus on bodyweight exercises and progressive overload...",
      funding: "$750.00",
      badge: "Sponsored",
      creatorAvatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      timeAgo: "12h ago",
      likes: 445,
      comments: 178,
      boosts: 312,
    },
    {
      id: 6,
      creator: "Travel Vlogs",
      title: "Hidden Gems of Southeast Asia",
      description:
        "Explore the undiscovered beautiful places in Southeast Asia. Off-the-beaten-path destinations with local culture immersion...",
      funding: "$2100.00",
      creatorAvatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
      timeAgo: "3d ago",
      likes: 567,
      comments: 234,
      boosts: 445,
    },
  ];

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-2xl h-screen max-h-[812px] lg:max-h-screen lg:h-auto lg:min-h-screen flex flex-col">
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
      <div className="px-6 py-3 bg-white border-b border-gray-100 flex gap-6 flex-wrap">
        <button
          onClick={() => setActiveTab("trending")}
          className={`flex items-center gap-2 text-sm font-medium transition ${
            activeTab === "trending"
              ? "text-gray-900 border-b-2 border-gray-900 pb-1"
              : "text-gray-500 pb-1"
          }`}
        >
          <Lightbulb className="w-4 h-4" />
          Trending
        </button>
        <button
          onClick={() => setActiveTab("newest")}
          className={`flex items-center gap-2 text-sm font-medium transition ${
            activeTab === "newest"
              ? "text-gray-900 border-b-2 border-gray-900 pb-1"
              : "text-gray-500 pb-1"
          }`}
        >
          <Clock className="w-4 h-4" />
          Newest
        </button>
        <button
          onClick={() => setActiveTab("top funded")}
          className={`flex items-center gap-2 text-sm font-medium transition ${
            activeTab === "top funded"
              ? "text-gray-900 border-b-2 border-gray-900 pb-1"
              : "text-gray-500 pb-1"
          }`}
        >
          <DollarSign className="w-4 h-4" />
          Top Funded
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <div className="space-y-4">
          {requests.map((request) => (
            <div
              key={request.id}
              className="border border-gray-200 rounded-xl p-5 bg-white hover:shadow-md transition-shadow"
            >
              <div className="flex gap-3 mb-3">
                <img
                  src={request.creatorAvatar || "/placeholder.svg"}
                  alt={request.creator}
                  className="w-12 h-12 rounded-full shrink-0 object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-base text-amber-600 truncate">
                    {request.creator}
                  </p>
                  <p className="text-xs text-gray-500">{request.timeAgo}</p>
                </div>
                <div className="text-right shrink-0">
                  {request.badge && (
                    <div className="inline-flex items-center bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-1 gap-1">
                      <Lightbulb className="w-3 h-3" />
                      {request.badge}
                    </div>
                  )}
                  <p className="font-bold text-gray-900 text-lg">
                    {request.funding}
                  </p>
                </div>
              </div>

              <h3 className="font-bold text-gray-900 text-lg mb-2 leading-tight">
                {request.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {request.description}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center gap-4 text-gray-500 text-sm">
                  <button className="flex items-center gap-1 hover:text-amber-600 transition-colors">
                    <Heart className="w-4 h-4" />
                    <span>{request.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-amber-600 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span>{request.comments}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-amber-600 transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span>{request.boosts} Boosts</span>
                  </button>
                </div>
                <button className="flex items-center gap-1 hover:text-amber-600 transition-colors text-sm">
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-3 pt-3 border-t border-gray-100">
                <button className="flex items-center gap-1 text-amber-600 text-sm font-semibold hover:underline">
                  See more...
                  <ChevronDown className="w-3 h-3" />
                </button>
                {request.badge === "Sponsored" && (
                  <span className="ml-2 text-xs text-gray-400">Sponsored</span>
                )}
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
