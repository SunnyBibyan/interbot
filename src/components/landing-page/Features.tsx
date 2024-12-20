'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Zap, Lock, Sliders, Users, BarChart } from 'lucide-react'

const features = [
  {
    icon: Cpu,
    title: "Customizable AI Bots",
    description: "Tailor bots to suit your business needs effortlessly.",
    details: "Our AI bots can be customized for various tasks, from customer service to data analysis, adapting to your unique workflow."
  },
  {
    icon: Zap,
    title: "Lightning-Fast Deployment",
    description: "Deploy your bots in minutes, not days.",
    details: "With our intuitive interface, you can have your AI bots up and running quickly, saving you valuable time and resources."
  },
  {
    icon: Lock,
    title: "Enterprise-Grade Security",
    description: "Keep your data safe with our robust security measures.",
    details: "We employ state-of-the-art encryption and security protocols to ensure your sensitive information remains protected at all times."
  },
  {
    icon: Sliders,
    title: "Advanced Analytics",
    description: "Gain insights from your bot interactions.",
    details: "Our comprehensive analytics dashboard provides you with valuable insights into bot performance and user interactions."
  },
  {
    icon: Users,
    title: "Seamless Collaboration",
    description: "Work together on bot development and deployment.",
    details: "Collaborate with your team in real-time, sharing bot templates and coordinating deployment across your organization."
  },
  {
    icon: BarChart,
    title: "Scalable Solutions",
    description: "Grow your bot army as your business expands.",
    details: "Our platform is designed to scale with your needs, allowing you to add more bots and handle increasing workloads effortlessly."
  }
]

export default function Features() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Features That Make Interbot Unique
          <span className="block h-1 w-20 bg-blue-600 mx-auto mt-4 transform transition-all duration-300 ease-in-out hover:w-32"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg dark:bg-gray-700"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <CardHeader>
                <feature.icon className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-3" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className={`text-sm text-gray-600 dark:text-gray-300 transition-opacity duration-300 ${hoveredFeature === index ? 'opacity-100' : 'opacity-0'}`}>
                  {feature.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

