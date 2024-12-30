'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Users, Bot, ShoppingBag } from 'lucide-react'
import { cn } from "@/lib/utils"

const navigation = [
  { name: 'Agents', href: '/dashboard/agents', icon: Bot },
  { name: 'Team', href: '/dashboard/team', icon: Users },
  // { name: 'Marketplace', href: '/dashboard/marketplace', icon: ShoppingBag },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col border-r bg-white dark:bg-gray-800 dark:border-gray-700">
      <div className="flex h-16 items-center px-4 border-b dark:border-gray-700">
        <Link href="/dashboard" className="text-xl font-bold">Interbot</Link>
      </div>
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((item) => {
          const isActive = pathname.startsWith(item.href)
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center px-4 py-2 text-sm font-medium rounded-md",
                isActive
                  ? "bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400"
                  : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800"
              )}
            >
              <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

