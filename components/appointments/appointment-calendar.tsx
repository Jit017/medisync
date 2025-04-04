"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

export function AppointmentCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Sample appointment dates
  const appointmentDates = [new Date(2025, 4, 15), new Date(2025, 4, 22)]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calendar</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          modifiers={{
            appointment: appointmentDates,
          }}
          modifiersStyles={{
            appointment: {
              backgroundColor: "hsl(var(--primary))",
              color: "hsl(var(--primary-foreground))",
              fontWeight: "bold",
            },
          }}
        />
      </CardContent>
    </Card>
  )
}

