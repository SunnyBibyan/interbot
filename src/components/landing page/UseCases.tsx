'use client'

import { useRef, useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image';

const useCases = [
  {
    title: "Customer Service",
    description: "Automate responses and free up your team for complex issues.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Data Analysis",
    description: "Process and analyze large datasets quickly and accurately.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Appointment Scheduling",
    description: "Streamline booking processes and reduce no-shows.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Lead Generation",
    description: "Qualify leads and nurture prospects automatically.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Inventory Management",
    description: "Track stock levels and automate reordering processes.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function UseCases() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const handleScroll = () => {
    const container = scrollContainerRef.current
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0)
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      )
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      handleScroll() // Check initial scroll state
    }
    return () => container?.removeEventListener('scroll', handleScroll)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current
    if (container) {
      const scrollAmount = container.clientWidth
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="use-cases" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Discover Endless Possibilities
          <span className="block h-1 w-20 bg-blue-600 mx-auto mt-4"></span>
        </h2>
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {useCases.map((useCase) => (
              <div key={useCase.title} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center px-4">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src="/placeholder.svg"
                      alt="placeholder"
                      width={300}    // specify the actual width you want
                      height={200}   // specify the actual height you want
                    />
                    <CardDescription>{useCase.description}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            className={`absolute left-2 top-1/2 transform -translate-y-1/2 ${
              canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
            } transition-opacity duration-300`}
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${
              canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
            } transition-opacity duration-300`}
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

