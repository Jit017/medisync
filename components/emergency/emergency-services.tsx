import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Ambulance, Phone, AlertTriangle } from "lucide-react"

export function EmergencyServices() {
  return (
    <Card className="border-red-200">
      <CardHeader className="bg-red-50 text-red-700">
        <CardTitle className="flex items-center">
          <AlertTriangle className="mr-2 h-5 w-5" />
          Emergency Services
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-center">
            <p className="mb-2 text-sm font-medium text-red-700">For life-threatening emergencies</p>
            <p className="text-2xl font-bold text-red-700">Call 911</p>
          </div>

          <div className="grid gap-4">
            <Button className="h-auto flex-col gap-2 p-4 bg-red-600 hover:bg-red-700">
              <Ambulance className="h-6 w-6" />
              <span>Request Ambulance</span>
            </Button>

            <Button
              variant="outline"
              className="h-auto flex-col gap-2 p-4 border-red-200 text-red-700 hover:bg-red-50 hover:text-red-800"
            >
              <Phone className="h-6 w-6" />
              <span>Emergency Helpline</span>
            </Button>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="mb-2 font-medium">Emergency Contact Information</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Primary Contact:</span>
                <span className="font-medium">Jane Doe (Wife)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Phone:</span>
                <span className="font-medium">(555) 123-4567</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Secondary Contact:</span>
                <span className="font-medium">Robert Doe (Son)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Phone:</span>
                <span className="font-medium">(555) 987-6543</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

