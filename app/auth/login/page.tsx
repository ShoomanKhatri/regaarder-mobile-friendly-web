"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
    console.log("Login:", { email, password });
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-orange-50 to-white flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">Sign in to continue to Regaarder</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg p-8 space-y-6"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
              />
              <span className="text-gray-600">Remember me</span>
            </label>
            <Link
              href="/auth/forgot-password"
              className="text-orange-500 hover:text-orange-600"
            >
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full flex items-center justify-center gap-2"
          >
            Sign In
            <ArrowRight className="w-5 h-5" />
          </Button>

          <div className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              href="/auth/signup"
              className="text-orange-500 hover:text-orange-600 font-medium"
            >
              Sign up
            </Link>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
