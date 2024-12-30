import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Bot, ShoppingBag } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Agents</CardTitle>
            <CardDescription>Manage your AI agents</CardDescription>
          </CardHeader>
          <CardContent>
            <Bot className="w-12 h-12 mb-4 text-blue-500" />
            <Link href="/dashboard/agents">
              <Button>
                View Agents
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Team</CardTitle>
            <CardDescription>Manage your team members</CardDescription>
          </CardHeader>
          <CardContent>
            <Users className="w-12 h-12 mb-4 text-green-500" />
            <Link href="/dashboard/team">
              <Button>
                View Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
        {/* <Card>
          <CardHeader>
            <CardTitle>Marketplace</CardTitle>
            <CardDescription>Explore bot templates</CardDescription>
          </CardHeader>
          <CardContent>
            <ShoppingBag className="w-12 h-12 mb-4 text-purple-500" />
            <Link href="/dashboard/marketplace">
              <Button>
                Visit Marketplace
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card> */}
      </div>
    </div>
  )
}

