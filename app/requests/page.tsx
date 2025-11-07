"use client";

import React from "react";
import { Clock, Filter, TrendingUp } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";
import { SearchBar } from "@/components/ui/SearchBar";
import { TabNavigation } from "@/components/ui/TabNavigation";
import { RequestCard } from "@/components/features/RequestCard";
import { Request, TabItem } from "@/types";

const tabs: TabItem[] = [
  { id: "trending", label: "Trending" },
  { id: "newest", label: "Newest" },
  { id: "top-funded", label: "Top Funded" },
];

const mockRequests: Request[] = [
  {
    id: "1",
    creator: {
      id: "blue-apron",
      name: "Blue Apron",
      username: "blueapron",
      avatar: "/placeholder-avatar.jpg",
      isVerified: true,
      isTopCreator: false,
    },
    title: "Sustainable Cooking: Farm to Table Series",
    description:
      "Create a series showcasing sustainable cooking practices using locally sourced ingredients. Visit local farms...",
    timestamp: "8h ago",
    amount: 900,
    isTrending: true,
    isSponsored: true,
  },
];

export default function RequestsPage() {
  const [activeTab, setActiveTab] = React.useState("trending");
  const [requests, setRequests] = React.useState(mockRequests);

  const handleCloseRequest = (id: string) => {
    setRequests(requests.filter((r) => r.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header notificationCount={6} />

      <main className="px-4 py-4">
        <SearchBar placeholder="Search requests..." className="mb-4" />

        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          className="mb-6"
        />

        <div className="space-y-4">
          {requests.map((request) => (
            <RequestCard
              key={request.id}
              request={request}
              onClose={() => handleCloseRequest(request.id)}
            />
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
