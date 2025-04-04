import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MessageSquare } from "lucide-react"

export function ReportStatus() {
  const reports = [
    {
      id: "REP-001",
      facility: "City General Hospital",
      type: "Billing Problems",
      date: "April 10, 2025",
      status: "Under Review",
      lastUpdate: "April 12, 2025",
    },
    {
      id: "REP-002",
      facility: "Memorial Medical Center",
      type: "Quality of Care",
      date: "March 25, 2025",
      status: "Resolved",
      lastUpdate: "April 5, 2025",
    },
    {
      id: "REP-003",
      facility: "University Hospital",
      type: "Facility Issues",
      date: "March 15, 2025",
      status: "In Progress",
      lastUpdate: "March 28, 2025",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Report Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reports.map((report) => (
            <div key={report.id} className="rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div className="font-medium">{report.id}</div>
                <Badge
                  variant={
                    report.status === "Resolved"
                      ? "default"
                      : report.status === "Under Review"
                        ? "outline"
                        : "secondary"
                  }
                >
                  {report.status}
                </Badge>
              </div>
              <div className="mt-2 space-y-1 text-sm">
                <div className="text-muted-foreground">{report.facility}</div>
                <div className="text-muted-foreground">{report.type}</div>
                <div className="flex items-center">
                  <Calendar className="mr-1 h-3 w-3" />
                  <span>Reported: {report.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-3 w-3" />
                  <span>Last Update: {report.lastUpdate}</span>
                </div>
              </div>
              <div className="mt-3 flex gap-2">
                <Button variant="outline" size="sm" className="w-full">
                  <MessageSquare className="mr-2 h-3 w-3" />
                  Follow Up
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

