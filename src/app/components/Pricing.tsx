'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Check } from 'lucide-react'

const plans = [
  {
    name: "Free",
    description: "For individuals and small teams just getting started.",
    price: { monthly: 0, yearly: 0 },
    features: [
      "Up to 3 bots",
      "100 interactions per month",
      "Basic analytics",
      "Community support"
    ]
  },
  {
    name: "Pro",
    description: "For growing businesses with advanced needs.",
    price: { monthly: 25, yearly: 250 },
    features: [
      "Unlimited bots",
      "10,000 interactions per month",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
      "Team collaboration"
    ]
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex requirements.",
    price: { monthly: "Custom", yearly: "Custom" },
    features: [
      "Unlimited everything",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom AI model training",
      "On-premise deployment option",
      "SLA guarantees"
    ]
  }
]

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Flexible Plans for Every Stage
        </h2>
        <div className="flex justify-center items-center mb-12">
          <span className={`mr-2 ${isYearly ? 'text-gray-500' : 'font-semibold'}`}>Monthly</span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            aria-label="Toggle yearly pricing"
          />
          <span className={`ml-2 ${isYearly ? 'font-semibold' : 'text-gray-500'}`}>Yearly</span>
          {isYearly && <span className="ml-2 text-green-500 text-sm">Save 20%</span>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-3xl font-bold mb-4">
                  {typeof plan.price[isYearly ? 'yearly' : 'monthly'] === 'number' ? (
                    <>
                      ${plan.price[isYearly ? 'yearly' : 'monthly']}
                      <span className="text-base font-normal text-gray-500">
                        /{isYearly ? 'year' : 'month'}
                      </span>
                    </>
                  ) : (
                    plan.price[isYearly ? 'yearly' : 'monthly']
                  )}
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.name === 'Pro' ? 'default' : 'outline'}>
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Choose Plan'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

