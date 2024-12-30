'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "What is Interbot?",
    answer: "Interbot is an AI-powered platform that allows you to create, customize, and deploy intelligent chatbots for various business needs. Our bots can handle customer service, lead generation, appointment scheduling, and more, helping you automate tasks and save time."
  },
  {
    question: "How easy is it to set up a bot?",
    answer: "Setting up a bot with Interbot is incredibly easy. Our platform offers pre-built templates and an intuitive drag-and-drop interface. You can have a basic bot up and running in minutes, even without any coding knowledge. For more complex bots, our user-friendly customization tools make it simple to tailor the bot to your specific needs."
  },
  {
    question: "Can I integrate Interbot with my existing systems?",
    answer: "Yes, Interbot offers seamless integration with a wide range of popular business tools and platforms. This includes CRM systems, messaging apps, e-commerce platforms, and more. Our API also allows for custom integrations if you have specific requirements not covered by our pre-built integrations."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer various levels of support depending on your plan. All users have access to our comprehensive documentation and community forums. Pro plan users receive priority email support, while Enterprise customers benefit from dedicated account managers and 24/7 phone support. We're committed to ensuring you get the most out of Interbot."
  },
  {
    question: "Is Interbot suitable for small businesses?",
    answer: "Interbot is designed to scale with your business. Our Free plan is perfect for small businesses or individuals just starting out. As your needs grow, you can easily upgrade to our Pro or Enterprise plans to access more advanced features and higher usage limits."
  },
  {
    question: "How does pricing work for Interbot?",
    answer: "Interbot offers flexible pricing to suit different needs. We have a Free plan for basic usage, a Pro plan with advanced features for growing businesses, and an Enterprise plan for large-scale deployments. Pricing is based on the number of bot interactions and available features. You can choose between monthly or annual billing, with discounts available for annual commitments."
  }
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
          <span className="block h-1 w-20 bg-blue-600 mx-auto mt-4"></span>
        </h2>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

