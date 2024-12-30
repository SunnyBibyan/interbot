import { redirect } from 'next/navigation'
import { Sidebar } from '@/components/sidebar.tsx/main'

async function getSession() {
  return { user: { id: '1', email: 'user@example.com' } }
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession()

  if (!session?.user) {
    redirect('/signin')
  }

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  )
}

