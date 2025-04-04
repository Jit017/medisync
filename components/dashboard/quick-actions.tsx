import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, FileText, Video, Ambulance, MessageSquare, Download } from "lucide-react"

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Frequently used services</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="h-auto flex-col gap-2 p-4">
            <Calendar className="h-6 w-6" />
            <span>Book Appointment</span>
          </Button>

          <Button variant="outline" className="h-auto flex-col gap-2 p-4">
            <Video className="h-6 w-6" />
            <span>Start Consultation</span>
          </Button>

          <Button variant="outline" className="h-auto flex-col gap-2 p-4">
            <FileText className="h-6 w-6" />
            <span>View Records</span>
          </Button>

          <Button variant="outline" className="h-auto flex-col gap-2 p-4">
            <Download className="h-6 w-6" />
            <span>Download Reports</span>
          </Button>

          <Button variant="outline" className="h-auto flex-col gap-2 p-4">
            <MessageSquare className="h-6 w-6" />
            <span>Message Doctor</span>
          </Button>

          <Button variant="outline" className="h-auto flex-col gap-2 p-4 text-red-500 hover:text-red-500">
            <Ambulance className="h-6 w-6" />
            <span>Emergency</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

