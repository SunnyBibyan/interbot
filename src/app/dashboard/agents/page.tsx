import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "@/components/ui/collapsible"
import { PlayCircle, ChevronDown, Sparkles } from 'lucide-react'
import { CreateAgentDialog } from './create-agent-dialog'

export default function AgentsPage() {
  return (
    <div className="space-y-8">
      <div className="flex gap-4">
        <Button variant="secondary" className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
          Request feature or view roadmap
        </Button>
        <Button variant="secondary">Join Affiliate Program</Button>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-2">Plan</h2>
          <Card>
            <CardHeader>
              <CardTitle>Free plan</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  50 / 40 messages available (0% used)
                </p>
              </div>
              <Button variant="outline" className="text-green-600 hover:text-green-700 border-green-600 hover:border-green-700">
                Purchase more messages
              </Button>
            </CardContent>
          </Card>
        </div>

        <Collapsible>
          <CollapsibleTrigger className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-700">
            Need more limits or features? Upgrade your plan
            <Sparkles className="ml-2 h-4 w-4" />
            <ChevronDown className="ml-1 h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <div className="grid gap-6 md:grid-cols-3">
                  {['Basic', 'Pro', 'Enterprise'].map((plan) => (
                    <Card key={plan}>
                      <CardHeader>
                        <CardTitle>{plan}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Button className="w-full">Upgrade to {plan}</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Your Agents</h2>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="text-blue-600">
                <PlayCircle className="mr-2 h-4 w-4" />
                Watch tutorial
              </Button>
              <CreateAgentDialog />
            </div>
          </div>

          <Card className="border-dashed">
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
              <p className="text-muted-foreground mb-4">
                No GPTs currently. Add a new agent to get started.
              </p>
              <CreateAgentDialog />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

