"use client";

import { useState } from "react";
import BottomNav from "@/app/components/bottom-nav";

type IdeasPageProps = {
  onNavigate?: (page: string) => void;
};

export default function IdeasPage({ onNavigate }: IdeasPageProps) {
  const [progress, setProgress] = useState(17);
  const [formValue, setFormValue] = useState(0);

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

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 lg:px-8 py-8 lg:py-12 flex flex-col max-w-2xl mx-auto w-full">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-gray-900">Progress</span>
            <span className="text-amber-600 font-semibold">
              {progress}% complete
            </span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gray-400 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-amber-600 mb-3">
            Book Your Next Videos
          </h2>
          <p className="text-gray-600 text-sm flex items-center justify-center gap-2">
            <span>⏱</span>
            About 2 minutes to complete
          </p>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <div className="border border-gray-300 rounded-full p-6 flex items-center justify-between">
            <input
              type="radio"
              checked={formValue === 1}
              onChange={() => setFormValue(1)}
              className="w-5 h-5 accent-amber-500"
            />
            <span className="text-gray-400 font-semibold">{formValue}/1</span>
          </div>
        </div>

        <button
          disabled={formValue === 0}
          className="w-full py-3 bg-gray-200 text-gray-400 rounded-lg font-semibold disabled:cursor-not-allowed hover:bg-gray-300 transition"
        >
          Next →
        </button>
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab="ideas" onNavigate={onNavigate} />
    </div>
  );
}
