import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Navigation, Droplet } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function BloodBank() {
  const bloodBanks = [
    {
      name: "City Blood Bank",
      distance: "1.8 miles",
      address: "123 Main St, Cityville",
      phone: "(555) 123-4567",
      bloodTypes: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
    },
    {
      name: "Regional Blood Center",
      distance: "3.2 miles",
      address: "456 Oak Ave, Cityville",
      phone: "(555) 987-6543",
      bloodTypes: ["A+", "B+", "O+", "O-"],
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Blood Bank</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Blood Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="A+">A+</SelectItem>
              <SelectItem value="A-">A-</SelectItem>
              <SelectItem value="B+">B+</SelectItem>
              <SelectItem value="B-">B-</SelectItem>
              <SelectItem value="AB+">AB+</SelectItem>
              <SelectItem value="AB-">AB-</SelectItem>
              <SelectItem value="O+">O+</SelectItem>
              <SelectItem value="O-">O-</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          {bloodBanks.map((bank, index) => (
            <div key={index} className="rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{bank.name}</h3>
                <Badge variant="outline" className="flex items-center">
                  <Navigation className="mr-1 h-3 w-3" />
                  {bank.distance}
                </Badge>
              </div>
              <div className="mt-2 space-y-1 text-sm">
                <div className="flex items-center">
                  <MapPin className="mr-2 h-3 w-3 text-muted-foreground" />
                  <span>{bank.address}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 h-3 w-3 text-muted-foreground" />
                  <span>{bank.phone}</span>
                </div>
                <div className="flex items-center flex-wrap gap-1 mt-2">
                  <Droplet className="mr-1 h-3 w-3 text-red-500" />
                  <span className="mr-2 text-muted-foreground">Available:</span>
                  {bank.bloodTypes.map((type) => (
                    <Badge key={type} variant="outline" className="text-red-500 border-red-200">
                      {type}
                    </Badge>
                  ))}
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
          <Button variant="outline" className="w-full">
            Find Blood Donors
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

