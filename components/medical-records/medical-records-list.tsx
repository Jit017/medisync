import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Download, FileText, FileImage, FilePieChart, Pill } from "lucide-react"

export function MedicalRecordsList() {
  const records = [
    {
      id: "REC-001",
      title: "Complete Blood Count",
      type: "Lab Result",
      date: "April 15, 2025",
      doctor: "Dr. Sarah Johnson",
      icon: FilePieChart,
    },
    {
      id: "REC-002",
      title: "Chest X-Ray",
      type: "Imaging",
      date: "March 28, 2025",
      doctor: "Dr. Robert Williams",
      icon: FileImage,
    },
    {
      id: "REC-003",
      title: "Cardiology Consultation",
      type: "Visit Notes",
      date: "March 10, 2025",
      doctor: "Dr. Sarah Johnson",
      icon: FileText,
    },
    {
      id: "REC-004",
      title: "Medication Prescription",
      type: "Prescription",
      date: "February 22, 2025",
      doctor: "Dr. Michael Chen",
      icon: Pill,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Medical Records</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {records.map((record) => (
            <div key={record.id} className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <record.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">{record.title}</div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{record.id}</span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      {record.date}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">{record.doctor}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">{record.type}</Badge>
                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
          <Button variant="outline" className="w-full">
            Load More Records
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

