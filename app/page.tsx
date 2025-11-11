"use client";

import { useState } from "react";
import HomePage from "@/app/components/pages/home-page";
import RequestsPage from "@/app/components/pages/requests-page";
import IdeasPage from "@/app/components/pages/ideas-page";
import MorePage from "@/app/components/pages/more-page";
import CreatorProfilePage from "@/app/components/pages/creator-profile-page";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedCreator, setSelectedCreator] = useState(null);

  const navigateToCreator = (creator) => {
    setSelectedCreator(creator);
    setCurrentPage("creator");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage
            onCreatorClick={navigateToCreator}
            onNavigate={setCurrentPage}
          />
        );
      case "requests":
        return <RequestsPage onNavigate={setCurrentPage} />;
      case "ideas":
        return <IdeasPage onNavigate={setCurrentPage} />;
      case "more":
        return <MorePage onNavigate={setCurrentPage} />;
      case "creator":
        return (
          <CreatorProfilePage
            creator={selectedCreator}
            onNavigate={setCurrentPage}
            onBack={() => setCurrentPage("home")}
          />
        );
      default:
        return (
          <HomePage
            onCreatorClick={navigateToCreator}
            onNavigate={setCurrentPage}
          />
        );
    }
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="w-full h-screen flex flex-col">{renderPage()}</div>
    </div>
  );
}
