"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeft, ArrowRight, User } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function MorePage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white border-b border-gray-200">
        <div className="flex items-center gap-3 px-4 py-4">
          <Link href="/" aria-label="Go back">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-gray-900">More</h1>
            <p className="text-sm text-gray-500">Settings and options</p>
          </div>
        </div>
      </div>

      <main className="px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <User className="w-12 h-12 text-gray-400" />
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Sign in to access more features
            </h2>

            <p className="text-sm text-gray-500 mb-8">
              Create an account or log in to manage your settings
            </p>

            <Link href="/auth/login">
              <Button
                variant="primary"
                size="lg"
                className="w-full flex items-center justify-center gap-2"
              >
                <ArrowRight className="w-5 h-5" />
                Log In / Sign Up
              </Button>
            </Link>
          </div>

          <div className="mt-6 space-y-2">
            <Link
              href="/settings"
              className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Settings</span>
                <ChevronLeft className="w-5 h-5 text-gray-400 rotate-180" />
              </div>
            </Link>

            <Link
              href="/help"
              className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Help & Support</span>
                <ChevronLeft className="w-5 h-5 text-gray-400 rotate-180" />
              </div>
            </Link>
          </div>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
}
