'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, X, ArrowLeft } from 'lucide-react'
import Image from "next/image"
import { AgentForm } from './agent-form'

const agentOptions = [
  {
    title: "Create Blank Agent",
    description: "Start from scratch and create your own custom agent.",
    icon: <Plus className="w-12 h-12 text-gray-400" />,
    type: "blank"
  },
  {
    title: "Import OpenAI Assistant",
    description: "Import an existing OpenAI Assistant from your account.",
    icon: <Plus className="w-12 h-12 text-gray-400" />,
    type: "import"
  },
  {
    title: "Ava - Customer Service Agent",
    description: "Ava is here to help by answering commonly asked questions and providing customer support.",
    image: "/placeholder.svg?height=100&width=100",
    type: "template",
    template: {
      name: "Ava",
      type: "customer-service",
      description: "A customer service agent specialized in handling common inquiries and providing support.",
      instructions: "You are Ava, a friendly and efficient customer service agent. Your goal is to assist customers with their inquiries, resolve issues, and ensure a positive experience. Always maintain a professional and helpful tone.",
      model: "gpt-4"
    }
  },
  {
    title: "Marketing Copy Writer",
    description: "This agent is your Marketing Copy Writer whose expertise lies in crafting compelling content.",
    image: "/placeholder.svg?height=100&width=100",
    type: "template",
    template: {
      name: "Marketing Copywriter",
      type: "marketing",
      description: "A specialized agent for creating engaging marketing copy and content.",
      instructions: "You are a skilled marketing copywriter. Your task is to create compelling, persuasive, and engaging marketing content. Focus on highlighting benefits, using persuasive language, and adapting your tone to the target audience.",
      model: "gpt-4"
    }
  },
]

export function CreateAgentDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState<'select' | 'form'>('select')
  const [selectedOption, setSelectedOption] = useState<typeof agentOptions[0] | null>(null)

  const handleOptionSelect = (option: typeof agentOptions[0]) => {
    setSelectedOption(option)
    if (option.type === 'template') {
      setStep('form')
    } else {
      // Handle other types (blank, import) as needed
      setStep('form')
    }
  }

  const handleFormSubmit = async (values: any) => {
    console.log('Form submitted with values:', values)
    // Here you would typically send the data to your API
    // await createAgent(values)
    setIsOpen(false)
    setStep('select')
    setSelectedOption(null)
  }

  const handleClose = () => {
    setIsOpen(false)
    setStep('select')
    setSelectedOption(null)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add new
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px]">
        <DialogHeader>
          <DialogTitle className="text-xl flex items-center">
            {step === 'form' && (
              <Button variant="ghost" size="sm" className="mr-2" onClick={() => setStep('select')}>
                <ArrowLeft className="h-4 w-4" />
              </Button>
            )}
            Create New Agent
          </DialogTitle>
        </DialogHeader>
        {step === 'select' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {agentOptions.map((option, index) => (
              <Card 
                key={index}
                className="cursor-pointer hover:border-blue-500 transition-colors"
                onClick={() => handleOptionSelect(option)}
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {option.image ? (
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <Image
                          src={option.image}
                          alt={option.title}
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      option.icon
                    )}
                  </div>
                  <CardTitle className="text-lg">{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        ) : (
          <AgentForm 
            onSubmit={handleFormSubmit} 
            initialData={selectedOption?.type === 'template' ? selectedOption.template : undefined}
          />
        )}
      </DialogContent>
    </Dialog>
  )
}

