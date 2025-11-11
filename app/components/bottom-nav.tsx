"use client";
import { Home, FileText, Lightbulb, MoreHorizontal } from "lucide-react";

export default function BottomNav({ activeTab, onNavigate }) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "requests", label: "Requests", icon: FileText },
    { id: "ideas", label: "Ideas", icon: Lightbulb },
    { id: "more", label: "More", icon: MoreHorizontal },
  ];

  return (
    <nav className="bg-white border-t border-gray-200 px-2 sm:px-4 py-2 flex justify-around items-center shrink-0">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center gap-1 py-2 px-2 sm:px-4 rounded-lg transition-all min-w-[60px] sm:min-w-[70px] ${
              isActive ? "text-amber-500" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-[10px] sm:text-xs font-medium">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
