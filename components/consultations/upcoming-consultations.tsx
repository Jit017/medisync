import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Video } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function UpcomingConsultations() {
  const consultations = [
    {
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      date: "May 15, 2025",
      time: "10:30 AM",
      status: "Confirmed",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SJ",
    },
    {
      doctor: "Dr. Michael Chen",
      specialty: "Endocrinologist",
      date: "May 22, 2025",
      time: "2:00 PM",
      status: "Pending",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MC",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Consultations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {consultations.map((consultation, index) => (
            <div key={index} className="space-y-3 rounded-lg border p-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={consultation.avatar} alt={consultation.doctor} />
                  <AvatarFallback>{consultation.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{consultation.doctor}</div>
                  <div className="text-sm text-muted-foreground">{consultation.specialty}</div>
                </div>
                <Badge variant={consultation.status === "Confirmed" ? "default" : "outline"} className="ml-auto">
                  {consultation.status}
                </Badge>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                <div className="flex items-center">
                  <Calendar className="mr-1 h-3 w-3" />
                  {consultation.date}
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-3 w-3" />
                  {consultation.time}
                </div>
              </div>
              <div className="flex gap-2">
                {consultation.status === "Confirmed" ? (
                  <Button className="w-full">
                    <Video className="mr-2 h-4 w-4" />
                    Join Consultation
                  </Button>
                ) : (
                  <Button variant="outline" className="w-full">
                    Confirm Appointment
                  </Button>
                )}
              </div>
            </div>
          ))}
          <Button variant="outline" className="w-full">
            View All Consultations
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

