import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Pill, Clock, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MedicationReminders() {
  const medications = [
    {
      name: "Lisinopril",
      dosage: "10mg",
      time: "8:00 AM",
      taken: true,
    },
    {
      name: "Metformin",
      dosage: "500mg",
      time: "1:00 PM",
      taken: false,
    },
    {
      name: "Atorvastatin",
      dosage: "20mg",
      time: "8:00 PM",
      taken: false,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Medication Reminders</CardTitle>
        <CardDescription>Your medication schedule for today</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {medications.map((medication, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${medication.taken ? "bg-green-100" : "bg-amber-100"}`}
                >
                  {medication.taken ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Pill className="h-4 w-4 text-amber-500" />
                  )}
                </div>
                <div>
                  <div className="font-medium">{medication.name}</div>
                  <div className="text-sm text-muted-foreground">{medication.dosage}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-3 w-3" />
                  {medication.time}
                </div>
                {!medication.taken && (
                  <Button variant="outline" size="sm">
                    Mark Taken
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

