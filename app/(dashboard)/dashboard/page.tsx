import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { HealthMetrics } from "@/components/dashboard/health-metrics"
import { MedicationReminders } from "@/components/dashboard/medication-reminders"
import { UpcomingAppointments } from "@/components/dashboard/upcoming-appointments"
import { HealthTrends } from "@/components/dashboard/health-trends"
import { QuickActions } from "@/components/dashboard/quick-actions"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <HealthMetrics />
        <MedicationReminders />
        <UpcomingAppointments />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <HealthTrends />
        <QuickActions />
      </div>
    </div>
  )
}

