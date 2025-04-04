import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export function AvailableDoctors() {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      availability: "Available Now",
      rating: 4.8,
      reviews: 124,
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SJ",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Endocrinologist",
      availability: "Available in 30 min",
      rating: 4.7,
      reviews: 98,
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MC",
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Primary Care",
      availability: "Available Now",
      rating: 4.9,
      reviews: 156,
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "ER",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Available Doctors</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {doctors.map((doctor, index) => (
            <div key={index} className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={doctor.avatar} alt={doctor.name} />
                  <AvatarFallback>{doctor.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{doctor.name}</div>
                  <div className="text-sm text-muted-foreground">{doctor.specialty}</div>
                  <div className="flex items-center text-sm">
                    <Star className="mr-1 h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span>{doctor.rating}</span>
                    <span className="text-muted-foreground"> ({doctor.reviews} reviews)</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <Badge variant={doctor.availability.includes("Now") ? "default" : "outline"}>
                  {doctor.availability}
                </Badge>
                <Button size="sm">Book Now</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

