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
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border z-50 safe-area-inset">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "relative flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all min-w-16",
                isActive
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
            >
              <div
                className={cn(
                  "relative transition-transform",
                  isActive && "scale-110"
                )}
              >
                {item.icon}
                {item.badge && (
                  <div className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {item.badge}
                  </div>
                )}
              </div>
              <span
                className={cn(
                  "text-xs font-medium transition-colors",
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
