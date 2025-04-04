import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Navigation } from "lucide-react"

export function OxygenResources() {
  const suppliers = [
    {
      name: "City Medical Supplies",
      status: "In Stock",
      distance: "1.5 miles",
      address: "123 Main St, Cityville",
      phone: "(555) 123-4567",
    },
    {
      name: "Healthcare Equipment Co.",
      status: "Limited Stock",
      distance: "2.8 miles",
      address: "456 Oak Ave, Cityville",
      phone: "(555) 987-6543",
    },
    {
      name: "Medical Oxygen Services",
      status: "In Stock",
      distance: "3.2 miles",
      address: "789 College Blvd, Cityville",
      phone: "(555) 456-7890",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Oxygen Resources</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {suppliers.map((supplier, index) => (
            <div key={index} className="rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{supplier.name}</h3>
                <Badge variant={supplier.status === "In Stock" ? "default" : "outline"}>{supplier.status}</Badge>
              </div>
              <div className="mt-2 space-y-1 text-sm">
                <div className="flex items-center">
                  <Navigation className="mr-2 h-3 w-3 text-muted-foreground" />
                  <span>{supplier.distance}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-3 w-3 text-muted-foreground" />
                  <span>{supplier.address}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 h-3 w-3 text-muted-foreground" />
                  <span>{supplier.phone}</span>
                </div>
              </div>
              <div className="mt-3 flex gap-2">
                <Button variant="outline" size="sm" className="w-full">
                  <Phone className="mr-2 h-3 w-3" />
                  Call
                </Button>
                <Button size="sm" className="w-full">
                  <Navigation className="mr-2 h-3 w-3" />
                  Directions
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

