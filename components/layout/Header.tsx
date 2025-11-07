"use client";

import React from "react";
import { Bell, Settings, Menu, Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  showIcons?: boolean;
  notificationCount?: number;
  className?: string;
}

export function Header({
  showIcons = true,
  notificationCount = 0,
  className,
}: HeaderProps) {
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
  });

  // Battery and signal indicators
  const batteryLevel = 100;

  return (
    <>
      {/* Top Status Bar */}
      <div className="bg-white px-4 py-2 flex items-center justify-between text-xs font-medium text-black border-b border-gray-200">
        <span>{currentTime}</span>
        <div className="flex gap-1">
          <div className="w-4 h-3 border border-black rounded-sm"></div>
          <div className="w-5 h-3 border border-black rounded-sm flex items-center justify-end pr-0.5">
            <div className="w-2 h-2 bg-black rounded-sm"></div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn("bg-white px-4 py-4 border-b border-gray-200", className)}
      >
        <div className="flex items-center justify-between mb-4">
          {/* Hamburger Menu */}
          <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <Menu className="w-6 h-6 text-black" />
          </button>

          {/* Right Icons */}
          {showIcons && (
            <div className="flex items-center gap-3">
              {/* Notification Bell */}
              <button className="relative p-1 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="w-6 h-6 text-black" />
                {notificationCount > 0 && (
                  <span className="absolute top-0 right-0 w-5 h-5 bg-amber-400 rounded-full text-xs font-bold flex items-center justify-center text-black">
                    {notificationCount}
                  </span>
                )}
              </button>

              {/* Settings */}
              <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings className="w-6 h-6 text-black" />
              </button>
            </div>
          )}
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-400" />
          <input
            type="text"
            placeholder="Discover videos..."
            className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-full text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>
      </header>
    </>
  );
}
