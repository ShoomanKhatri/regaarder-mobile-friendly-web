"use client";

import React from "react";
import { Clock, ChevronRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function IdeasPage() {
  const [progress, setProgress] = React.useState(17);
  const [tasksCompleted, setTasksCompleted] = React.useState(0);
  const totalTasks = 1;

  const handleNext = () => {
    // Navigate to next step or submit
    console.log("Next clicked");
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header notificationCount={6} />

      <main className="px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Progress</span>
            <span className="text-sm font-bold text-accent">
              {progress}% complete
            </span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-full bg-accent"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold text-accent mb-4">
            Book Your Next Videos
          </h1>

          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <Clock className="w-5 h-5" />
            <span className="text-sm">About 2 minutes to complete</span>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              </div>
              <span className="text-sm text-gray-500">
                {tasksCompleted}/{totalTasks}
              </span>
            </div>

            <textarea
              placeholder="Describe your video idea..."
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 min-h-[120px] resize-none"
              aria-label="Video idea description"
            />
          </div>

          <Button
            variant="primary"
            size="lg"
            className="w-full max-w-md flex items-center justify-center gap-2"
            disabled={tasksCompleted < totalTasks}
            onClick={handleNext}
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
}
