'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileIcon as FileTemplate, Settings, Rocket } from 'lucide-react'

const steps = [
  {
    icon: FileTemplate,
    title: "Select a Bot Template",
    description: "Choose from a variety of pre-built bot templates designed for different use cases.",
    details: "Our library includes templates for customer service, lead generation, appointment scheduling, and more. Each template is customizable to fit your specific needs."
  },
  {
    icon: Settings,
    title: "Customize Your Bot",
    description: "Tailor your bot's functionality, responses, and appearance to match your brand and requirements.",
    details: "Use our intuitive drag-and-drop interface to modify bot flows, add custom responses, and integrate with your existing tools and databases."
  },
  {
    icon: Rocket,
    title: "Deploy and Save Time",
    description: "Launch your bot across multiple platforms and start automating tasks immediately.",
    details: "With just a few clicks, deploy your bot to your website, messaging apps, or customer service platforms. Monitor performance and make real-time adjustments as needed."
  }
]

export default function HowItWorks() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  return (
    <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How Interbot Works
          <span className="block h-1 w-20 bg-blue-600 mx-auto mt-4"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card 
              key={step.title}
              className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg dark:bg-gray-700"
              onMouseEnter={() => setExpandedStep(index)}
              onMouseLeave={() => setExpandedStep(null)}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{step.description}</CardDescription>
                <p className={`mt-4 text-sm text-gray-600 dark:text-gray-300 transition-all duration-300 ${expandedStep === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  {step.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg">
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  )
}

