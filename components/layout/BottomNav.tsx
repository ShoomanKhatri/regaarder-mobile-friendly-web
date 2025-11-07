"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FileText, Lightbulb, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
  badge?: number;
}

const navItems: NavItem[] = [
  {
    id: "home",
    label: "Home",
    icon: <Home className="w-5 h-5" />,
    href: "/",
    badge: 1,
  },
  {
    id: "requests",
    label: "Requests",
    icon: <FileText className="w-5 h-5" />,
    href: "/requests",
  },
  {
    id: "ideas",
    label: "Ideas",
    icon: <Lightbulb className="w-5 h-5" />,
    href: "/ideas",
  },
  {
    id: "more",
    label: "More",
    icon: <MoreHorizontal className="w-5 h-5" />,
    href: "/more",
  },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-t border-gray-200 z-50">
      <div className="flex items-center justify-around px-2 py-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "relative flex flex-col items-center gap-1 py-1 px-4 rounded-lg transition-all min-w-16",
                isActive
                  ? "text-amber-400"
                  : "text-gray-500 hover:text-gray-700"
              )}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
            >
              <div className={cn("relative", isActive && "scale-110")}>
                {item.icon}
              </div>
              <span
                className={cn(
                  "text-xs font-medium",
                  isActive && "font-semibold"
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
