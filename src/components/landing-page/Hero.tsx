'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Play } from 'lucide-react'

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 animate-fade-in-up">
            Empower Your Workflow with Smart AI Bots
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Effortlessly create, customize, and deploy AI bots to automate tasks and save time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="animate-fade-in-up animation-delay-400">
              Get Started for Free
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="animate-fade-in-up animation-delay-600"
              onClick={() => setIsVideoModalOpen(true)}
            >
              <Play className="mr-2 h-4 w-4" /> Watch a Demo
            </Button>
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-4xl h-64 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg animate-fade-in-up animation-delay-800">
            {/* Placeholder for 3D illustration or SVG animation */}
            <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
              Interactive 3D Illustration Placeholder
            </div>
          </div>
        </div>
      </div>
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
            <div className="w-full max-w-3xl">
              <div className="aspect-w-16 aspect-h-9">
                {/* Replace with actual video embed */}
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
                  Video Demo Placeholder
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              className="mt-4"
              onClick={() => setIsVideoModalOpen(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero

