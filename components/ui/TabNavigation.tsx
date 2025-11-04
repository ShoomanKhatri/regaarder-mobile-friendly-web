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
    <div className={cn("relative", className)}>
      {/* Scrollable tabs - clean white background */}
      <div
        className="flex items-center gap-3 overflow-x-auto scrollbar-hide py-1"
        role="tablist"
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
                "flex items-center gap-2 px-3 py-1.5 rounded-md transition-all whitespace-nowrap text-sm font-medium border",
                isActive
                  ? "bg-white text-foreground border-border shadow-sm"
                  : "bg-transparent text-muted-foreground border-transparent hover:text-foreground"
              )}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
