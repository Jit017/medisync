"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation, Phone, Bed } from "lucide-react"

export function HospitalLocator() {
  const hospitals = [
    {
      name: "City General Hospital",
      distance: "1.2 miles",
      address: "123 Main St, Cityville",
      phone: "(555) 123-4567",
      bedsAvailable: 8,
    },
    {
      name: "Memorial Medical Center",
      distance: "2.5 miles",
      address: "456 Oak Ave, Cityville",
      phone: "(555) 987-6543",
      bedsAvailable: 3,
    },
    {
      name: "University Hospital",
      distance: "3.8 miles",
      address: "789 College Blvd, Cityville",
      phone: "(555) 456-7890",
      bedsAvailable: 12,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Nearby Hospitals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {hospitals.map((hospital, index) => (
            <div key={index} className="rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{hospital.name}</h3>
                <Badge variant="outline" className="flex items-center">
                  <Navigation className="mr-1 h-3 w-3" />
                  {hospital.distance}
                </Badge>
              </div>
              <div className="mt-2 space-y-1 text-sm">
                <div className="flex items-start">
                  <MapPin className="mr-2 h-3 w-3 mt-0.5 text-muted-foreground" />
                  <span>{hospital.address}</span>
                </div>
                <div className="flex items-start">
                  <Phone className="mr-2 h-3 w-3 mt-0.5 text-muted-foreground" />
                  <span>{hospital.phone}</span>
                </div>
                <div className="flex items-start">
                  <Bed className="mr-2 h-3 w-3 mt-0.5 text-muted-foreground" />
                  <span>{hospital.bedsAvailable} beds available</span>
                </div>
              </div>
              <div className="mt-3 flex gap-2">
                <Button variant="outline" size="sm" className="w-full">
                  <Phone className="mr-2 h-3 w-3" />
                  Call
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  <Navigation className="mr-2 h-3 w-3" />
                  Directions
                </Button>
                <Button size="sm" className="w-full">
                  <Bed className="mr-2 h-3 w-3" />
                  Book Bed
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

