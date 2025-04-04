import { AppointmentCalendar } from "@/components/appointments/appointment-calendar"
import { AppointmentList } from "@/components/appointments/appointment-list"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function AppointmentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Appointments</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Schedule Appointment
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <AppointmentCalendar />
        <AppointmentList />
      </div>
    </div>
  )
}

