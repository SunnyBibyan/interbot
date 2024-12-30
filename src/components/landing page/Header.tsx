'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton, SignOutButton, useUser } from '@clerk/nextjs'
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { user } = useUser()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              Interbot
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {['Features', 'Use Cases', 'Pricing', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden md:block">
            <SignedOut>
              <SignInButton>
                <Button variant="ghost" className="mr-2">Sign In</Button>
              </SignInButton>
              <Button>Get Started</Button>
            </SignedOut>
            <SignedIn>
              <span className="mr-4 text-gray-700 dark:text-gray-300">Welcome, {user?.firstName}!</span>
              <SignOutButton>
                <Button variant="ghost">Sign Out</Button>
              </SignOutButton>
            </SignedIn>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu />
            </Button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Features', 'Use Cases', 'Pricing', 'FAQ'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
              >
                {item}
              </Link>
            ))}
            <SignedOut>
              <SignInButton>
                <Link
                  href="/signin"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Sign In
                </Link>
              </SignInButton>
              <Link
                href="/get-started"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Get Started
              </Link>
            </SignedOut>
            <SignedIn>
              <span className="block px-3 py-2 text-gray-700 dark:text-gray-300">
                Welcome, {user?.firstName}!
              </span>
              <SignOutButton>
                <Button variant="ghost" className="w-full text-left px-3 py-2 rounded-md">Sign Out</Button>
              </SignOutButton>
            </SignedIn>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
