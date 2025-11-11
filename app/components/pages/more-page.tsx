"use client";

import { ChevronLeft } from "lucide-react";
import BottomNav from "@/app/components/bottom-nav";

export default function MorePage({ onNavigate }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-2xl h-screen max-h-[812px] lg:max-h-screen lg:h-auto lg:min-h-screen flex flex-col">
      {/* Status Bar */}
      <div className="bg-white px-6 py-3 flex justify-between items-center border-b border-gray-100">
        <span className="text-sm font-semibold text-green-500">● 9:23</span>
        <div className="flex gap-2">
          <div className="w-4 h-2 bg-black rounded-sm"></div>
          <div className="w-6 h-3 border border-black rounded-sm"></div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white px-6 py-4 border-b border-gray-100 flex items-center gap-4">
        <button onClick={() => onNavigate("home")}>
          <ChevronLeft className="w-6 h-6 text-gray-900" />
        </button>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">More</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 lg:px-8 py-8 flex flex-col items-center justify-center max-w-2xl mx-auto w-full">
        <p className="text-gray-500 mb-8">Settings and options</p>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-gray-500 text-3xl">👤</span>
          </div>
        </div>

        <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 text-center mb-2">
          Sign in to access more features
        </h2>

        <p className="text-center text-gray-500 text-sm mb-8 max-w-xs">
          Create an account or log in to manage your settings
        </p>

        <button className="w-full max-w-xs bg-amber-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-amber-600 transition">
          → Log In / Sign Up
        </button>
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab="more" onNavigate={onNavigate} />
    </div>
  );
}
