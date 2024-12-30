'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Jane Doe",
    role: "Business Owner",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "Interbot has transformed how we manage customer interactions, saving hours every week. The customization options are incredible!",
    rating: 5
  },
  {
    name: "John Smith",
    role: "Marketing Manager",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "We've seen a 40% increase in lead qualification since implementing Interbot. It's been a game-changer for our team.",
    rating: 5
  },
  {
    name: "Emily Chen",
    role: "Customer Service Director",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "The ease of use and powerful features of Interbot have significantly improved our customer satisfaction scores. Highly recommended!",
    rating: 4
  }
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000) // Change testimonial every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Users Say
          <span className="block h-1 w-20 bg-blue-600 mx-auto mt-4"></span>
        </h2>
        <div className="relative max-w-3xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`absolute top-0 left-0 w-full transition-opacity duration-500 ${
                index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <CardContent className="p-6 text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <p className="text-lg mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill={i < testimonial.rating ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === activeIndex ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

