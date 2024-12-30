import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserPlus } from 'lucide-react'

export default function TeamPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Team Management</h1>
          <p className="text-muted-foreground">Invite and manage team members</p>
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Invite Member
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Create an Organization</CardTitle>
          <CardDescription>You haven&apos;t invited any team members yet.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button>
            Enter organization Name
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

