import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Activity, Droplet } from "lucide-react"

export function HealthMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Health Metrics</CardTitle>
        <CardDescription>Your latest health measurements</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
              <Heart className="h-5 w-5 text-red-500" />
            </div>
            <div className="space-y-0.5">
              <div className="text-sm font-medium text-muted-foreground">Heart Rate</div>
              <div className="text-xl font-bold">
                72 <span className="text-sm font-normal text-muted-foreground">bpm</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
              <Activity className="h-5 w-5 text-blue-500" />
            </div>
            <div className="space-y-0.5">
              <div className="text-sm font-medium text-muted-foreground">Blood Pressure</div>
              <div className="text-xl font-bold">
                120/80 <span className="text-sm font-normal text-muted-foreground">mmHg</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
              <Droplet className="h-5 w-5 text-purple-500" />
            </div>
            <div className="space-y-0.5">
              <div className="text-sm font-medium text-muted-foreground">Blood Glucose</div>
              <div className="text-xl font-bold">
                98 <span className="text-sm font-normal text-muted-foreground">mg/dL</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

