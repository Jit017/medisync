import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function UpcomingAppointments() {
  const appointments = [
    {
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      date: "May 15, 2025",
      time: "10:30 AM",
      location: "Heart Care Center",
    },
    {
      doctor: "Dr. Michael Chen",
      specialty: "Endocrinologist",
      date: "May 22, 2025",
      time: "2:00 PM",
      location: "Diabetes Clinic",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Appointments</CardTitle>
        <CardDescription>Your scheduled medical appointments</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {appointments.map((appointment, index) => (
            <div key={index} className="space-y-2 rounded-lg border p-3">
              <div className="font-medium">{appointment.doctor}</div>
              <div className="text-sm text-muted-foreground">{appointment.specialty}</div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                <div className="flex items-center">
                  <Calendar className="mr-1 h-3 w-3" />
                  {appointment.date}
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-3 w-3" />
                  {appointment.time}
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-1 h-3 w-3" />
                  {appointment.location}
                </div>
              </div>
              <div className="flex gap-2 pt-1">
                <Button variant="outline" size="sm">
                  Reschedule
                </Button>
                <Button variant="outline" size="sm">
                  Cancel
                </Button>
              </div>
            </div>
          ))}
          <Button variant="outline" className="w-full">
            View All Appointments
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

