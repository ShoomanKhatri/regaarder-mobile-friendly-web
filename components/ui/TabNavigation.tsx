"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { TabItem } from "@/types";

interface TabNavigationProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

export function TabNavigation({
  tabs,
  activeTab,
  onTabChange,
  className,
}: TabNavigationProps) {
  return (
    <div
      className={cn(
        "bg-white px-4 py-3 flex gap-2 border-b border-gray-200",
        className
      )}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all whitespace-nowrap shrink-0",
              isActive
                ? "bg-amber-400 text-black"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            )}
          >
            <span className="w-5 h-5 flex items-center justify-center">
              {tab.icon}
            </span>
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
