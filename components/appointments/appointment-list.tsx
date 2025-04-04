import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin } from "lucide-react"

export function AppointmentList() {
  const upcomingAppointments = [
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

  const pastAppointments = [
    {
      doctor: "Dr. Emily Rodriguez",
      specialty: "Primary Care",
      date: "April 10, 2025",
      time: "9:00 AM",
      location: "Family Health Center",
    },
    {
      doctor: "Dr. James Wilson",
      specialty: "Neurologist",
      date: "March 25, 2025",
      time: "11:15 AM",
      location: "Neurology Associates",
    },
    {
      doctor: "Dr. Lisa Thompson",
      specialty: "Dermatologist",
      date: "March 12, 2025",
      time: "3:30 PM",
      location: "Skin Care Clinic",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Appointments</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="upcoming">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="pt-4">
            <div className="space-y-4">
              {upcomingAppointments.map((appointment, index) => (
                <div key={index} className="space-y-2 rounded-lg border p-3">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{appointment.doctor}</div>
                    <Badge variant="outline">{appointment.specialty}</Badge>
                  </div>
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
            </div>
          </TabsContent>

          <TabsContent value="past" className="pt-4">
            <div className="space-y-4">
              {pastAppointments.map((appointment, index) => (
                <div key={index} className="space-y-2 rounded-lg border p-3">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{appointment.doctor}</div>
                    <Badge variant="outline">{appointment.specialty}</Badge>
                  </div>
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
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      Book Again
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

