"use client";

import React from "react";
import { Bell, Settings } from "lucide-react";
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

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-background border-b border-border",
        className
      )}
    >
      <div className="flex items-center justify-end px-4 py-3 gap-3">
        {showIcons && (
          <>
            {/* Notification Bell */}
            <button className="relative p-2 hover:bg-secondary rounded-lg transition-colors">
              <Bell className="w-5 h-5 text-foreground" />
              {notificationCount > 0 && (
                <div className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] rounded-full flex items-center justify-center px-1 bg-accent-red">
                  <span className="text-[10px] text-white font-medium">
                    {notificationCount > 9 ? "9+" : notificationCount}
                  </span>
                </div>
              )}
            </button>

            {/* Settings */}
            <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
              <Settings className="w-5 h-5 text-foreground" />
            </button>
          </>
        )}
      </div>
    </header>
  );
}
