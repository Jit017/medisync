import { AvailableDoctors } from "@/components/consultations/available-doctors"
import { UpcomingConsultations } from "@/components/consultations/upcoming-consultations"
import { Button } from "@/components/ui/button"
import { Video } from "lucide-react"

export default function ConsultationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Virtual Consultations</h1>
        <Button>
          <Video className="mr-2 h-4 w-4" /> New Consultation
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <UpcomingConsultations />
        <AvailableDoctors />
      </div>
    </div>
  )
}

