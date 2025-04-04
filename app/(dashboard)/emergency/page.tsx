import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Ambulance,
  Phone,
  MapPin,
  AlertTriangle,
  Heart,
  Droplet,
  Clock,
  Navigation,
  Search,
  Bed,
  Activity,
  Stethoscope,
  PlusCircle,
} from "lucide-react"

export default function EmergencyPage() {
  return (
    <div className="container mx-auto space-y-8">
      {/* Hero Section with Animation */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-red-500 via-rose-500 to-red-600 p-8 text-white shadow-xl">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] opacity-10 mix-blend-overlay"></div>

        {/* Animated circles */}
        <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-white/10 blur-3xl animate-pulse"></div>
        <div
          className="absolute top-20 right-20 h-32 w-32 rounded-full bg-white/10 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-0 left-1/3 h-24 w-24 rounded-full bg-white/10 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="relative z-10 flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-3">
            <div
              className="rounded-full bg-white/20 p-2 backdrop-blur-md shadow-lg border border-white/30 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <AlertTriangle className="h-6 w-6" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Emergency Services</h1>
          </div>
          <p className="text-white/80 text-lg">
            Quick access to emergency medical services and resources when you need them most
          </p>

          <div className="mt-4 flex gap-3">
            <Button className="bg-white text-red-600 hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <Phone className="mr-2 h-4 w-4 group-hover:animate-pulse" /> Call Emergency
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Ambulance className="mr-2 h-4 w-4" /> Request Ambulance
            </Button>
          </div>
        </div>
      </div>

      {/* Emergency Call Section */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1 border-red-200 shadow-2xl overflow-hidden group hover:shadow-red-100/20 transition-all duration-500 relative">
          {/* Glassmorphism effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/10 pointer-events-none"></div>

          {/* Animated gradient border */}
          <div className="absolute inset-0 p-0.5 rounded-lg bg-gradient-to-r from-red-400 via-rose-400 to-red-400 opacity-30 animate-gradient-x"></div>

          <CardHeader className="bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30 border-b border-red-100">
            <CardTitle className="flex items-center text-red-700 dark:text-red-400">
              <AlertTriangle className="mr-2 h-5 w-5" />
              Emergency Call
            </CardTitle>
            <CardDescription className="text-red-600/80 dark:text-red-400/80">
              For life-threatening emergencies
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 relative">
            <div className="rounded-lg border border-red-200 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30 p-6 text-center mb-6 shadow-lg transform transition-transform duration-300 group-hover:scale-105">
              <div className="absolute -top-4 right-4 rounded-full bg-red-100 p-2 text-red-600 shadow-md animate-pulse">
                <Phone className="h-5 w-5" />
              </div>
              <p className="mb-2 text-sm font-medium text-red-700 dark:text-red-400">Emergency Number</p>
              <p className="text-5xl font-bold text-red-700 dark:text-red-400 tracking-wider">911</p>
            </div>
            <div className="space-y-3">
              <Button className="w-full h-12 text-base bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 dark:from-red-700 dark:to-rose-700 dark:hover:from-red-800 dark:hover:to-rose-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <Phone className="mr-2 h-5 w-5" /> Call Emergency
              </Button>
              <Button
                variant="outline"
                className="w-full h-12 text-base border-red-200 text-red-700 hover:bg-red-50 hover:text-red-800 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Ambulance className="mr-2 h-5 w-5" /> Request Ambulance
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 pointer-events-none"></div>

          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-primary/10 p-2 shadow-inner">
                  <Stethoscope className="h-4 w-4 text-primary" />
                </div>
                <CardTitle>Emergency Contacts</CardTitle>
              </div>
              <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10 shadow-sm">
                <Activity className="mr-1 h-3 w-3" /> Medical Contacts
              </Badge>
            </div>
            <CardDescription>Your saved emergency contacts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "Jane Doe",
                  relation: "Wife",
                  phone: "(555) 123-4567",
                  avatar: "/placeholder.svg?height=40&width=40",
                },
                {
                  name: "Robert Doe",
                  relation: "Son",
                  phone: "(555) 987-6543",
                  avatar: "/placeholder.svg?height=40&width=40",
                },
                {
                  name: "Dr. Sarah Johnson",
                  relation: "Primary Doctor",
                  phone: "(555) 456-7890",
                  avatar: "/placeholder.svg?height=40&width=40",
                },
              ].map((contact, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg border bg-white dark:bg-gray-950 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-primary/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-primary/20 shadow-md">
                      <img
                        src={contact.avatar || "/placeholder.svg"}
                        alt={contact.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">
                        {contact.name} <span className="text-muted-foreground">({contact.relation})</span>
                      </h3>
                      <p className="text-sm text-muted-foreground">{contact.phone}</p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="hover:bg-primary/10 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <Phone className="h-4 w-4 mr-2" /> Call
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className="w-full group shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="mr-2 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                <PlusCircle className="h-3 w-3" />
              </span>
              Add Emergency Contact
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Emergency Services Tabs */}
      <Tabs defaultValue="hospitals" className="w-full">
        <TabsList className="grid w-full grid-cols-3 p-1 bg-muted/50 rounded-xl shadow-md">
          <TabsTrigger
            value="hospitals"
            className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md transition-all duration-300"
          >
            <MapPin className="h-4 w-4 mr-2" /> Nearby Hospitals
          </TabsTrigger>
          <TabsTrigger
            value="oxygen"
            className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md transition-all duration-300"
          >
            <Activity className="h-4 w-4 mr-2" /> Oxygen Resources
          </TabsTrigger>
          <TabsTrigger
            value="blood"
            className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md transition-all duration-300"
          >
            <Droplet className="h-4 w-4 mr-2" /> Blood Banks
          </TabsTrigger>
        </TabsList>

        <TabsContent value="hospitals" className="mt-6">
          <div className="flex items-center space-x-2 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search hospitals..."
                className="pl-8 bg-muted/40 focus:bg-background transition-colors duration-200 shadow-sm focus:shadow-md"
              />
            </div>
            <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Navigation className="mr-2 h-4 w-4" /> Find Nearest
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "City General Hospital",
                distance: "1.2 miles",
                address: "123 Main St, Cityville",
                phone: "(555) 123-4567",
                bedsAvailable: 8,
                emergency: true,
                image: "/placeholder.svg?height=80&width=200",
              },
              {
                name: "Memorial Medical Center",
                distance: "2.5 miles",
                address: "456 Oak Ave, Cityville",
                phone: "(555) 987-6543",
                bedsAvailable: 3,
                emergency: true,
                image: "/placeholder.svg?height=80&width=200",
              },
              {
                name: "University Hospital",
                distance: "3.8 miles",
                address: "789 College Blvd, Cityville",
                phone: "(555) 456-7890",
                bedsAvailable: 12,
                emergency: false,
                image: "/placeholder.svg?height=80&width=200",
              },
            ].map((hospital, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${hospital.emergency ? "border-green-200" : ""}`}
              >
                <div className="h-40 w-full relative">
                  <img
                    src={hospital.image || "/placeholder.svg"}
                    alt={hospital.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                    <h3 className="text-white font-medium text-lg">{hospital.name}</h3>
                    <Badge
                      variant={hospital.emergency ? "success" : "outline"}
                      className="flex items-center bg-white/90 backdrop-blur-sm shadow-md"
                    >
                      <Clock className="mr-1 h-3 w-3" />
                      {hospital.emergency ? "24/7 Emergency" : "Limited Hours"}
                    </Badge>
                  </div>
                </div>
                <CardContent className="pt-4 pb-2">
                  <div className="flex items-center text-sm text-muted-foreground mb-3 bg-primary/5 p-2 rounded-md">
                    <Navigation className="mr-1 h-3 w-3" />
                    <span>{hospital.distance}</span>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start p-2 rounded-md bg-muted/30 hover:bg-muted/50 transition-colors duration-200">
                      <MapPin className="mr-2 h-3 w-3 mt-0.5 text-muted-foreground" />
                      <span>{hospital.address}</span>
                    </div>
                    <div className="flex items-start p-2 rounded-md bg-muted/30 hover:bg-muted/50 transition-colors duration-200">
                      <Phone className="mr-2 h-3 w-3 mt-0.5 text-muted-foreground" />
                      <span>{hospital.phone}</span>
                    </div>
                    <div className="flex items-start p-2 rounded-md bg-muted/30 hover:bg-muted/50 transition-colors duration-200">
                      <Bed className="mr-2 h-3 w-3 mt-0.5 text-muted-foreground" />
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{hospital.bedsAvailable} beds available</span>
                          <span className="text-xs">
                            {hospital.bedsAvailable > 5 ? "High" : hospital.bedsAvailable > 2 ? "Medium" : "Low"}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 overflow-hidden">
                          <div
                            className={`h-2 rounded-full ${
                              hospital.bedsAvailable > 5
                                ? "bg-green-500"
                                : hospital.bedsAvailable > 2
                                  ? "bg-yellow-500"
                                  : "bg-red-500"
                            }`}
                            style={{
                              width: `${Math.min(hospital.bedsAvailable * 10, 100)}%`,
                              transition: "width 1s ease-in-out",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <Phone className="mr-2 h-3 w-3" />
                    Call
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <Navigation className="mr-2 h-3 w-3" />
                    Directions
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Book Bed
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="oxygen" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "City Medical Supplies",
                status: "In Stock",
                distance: "1.5 miles",
                address: "123 Main St, Cityville",
                phone: "(555) 123-4567",
                image: "/placeholder.svg?height=80&width=200",
              },
              {
                name: "Healthcare Equipment Co.",
                status: "Limited Stock",
                distance: "2.8 miles",
                address: "456 Oak Ave, Cityville",
                phone: "(555) 987-6543",
                image: "/placeholder.svg?height=80&width=200",
              },
              {
                name: "Medical Oxygen Services",
                status: "In Stock",
                distance: "3.2 miles",
                address: "789 College Blvd, Cityville",
                phone: "(555) 456-7890",
                image: "/placeholder.svg?height=80&width=200",
              },
            ].map((supplier, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="h-40 w-full relative">
                  <img
                    src={supplier.image || "/placeholder.svg"}
                    alt={supplier.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                    <h3 className="text-white font-medium text-lg">{supplier.name}</h3>
                    <Badge
                      variant={supplier.status === "In Stock" ? "success" : "outline"}
                      className="flex items-center bg-white/90 backdrop-blur-sm shadow-md"
                    >
                      {supplier.status}
                    </Badge>
                  </div>
                </div>
                <CardContent className="pt-4 pb-2">
                  <div className="flex items-center text-sm text-muted-foreground mb-3 bg-primary/5 p-2 rounded-md">
                    <Navigation className="mr-1 h-3 w-3" />
                    <span>{supplier.distance}</span>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start p-2 rounded-md bg-muted/30 hover:bg-muted/50 transition-colors duration-200">
                      <MapPin className="mr-2 h-3 w-3 mt-0.5 text-muted-foreground" />
                      <span>{supplier.address}</span>
                    </div>
                    <div className="flex items-start p-2 rounded-md bg-muted/30 hover:bg-muted/50 transition-colors duration-200">
                      <Phone className="mr-2 h-3 w-3 mt-0.5 text-muted-foreground" />
                      <span>{supplier.phone}</span>
                    </div>
                    <div className="mt-2 p-3 rounded-lg bg-blue-50 border border-blue-100 dark:bg-blue-950/20 dark:border-blue-900/30 shadow-inner">
                      <div className="flex items-center">
                        <Activity className="h-4 w-4 text-blue-500 mr-2" />
                        <span className="text-sm font-medium">Oxygen Cylinders & Concentrators Available</span>
                      </div>
                      <div className="mt-2 grid grid-cols-2 gap-2">
                        <div className="flex items-center justify-between p-1.5 rounded-md bg-white/50 dark:bg-white/5">
                          <span className="text-xs">Cylinders</span>
                          <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200">
                            Available
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between p-1.5 rounded-md bg-white/50 dark:bg-white/5">
                          <span className="text-xs">Concentrators</span>
                          <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200">
                            Available
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <Phone className="mr-2 h-3 w-3" />
                    Call
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <Navigation className="mr-2 h-3 w-3" />
                    Directions
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="blood" className="mt-6">
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <Card className="flex-1 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div className="h-24 bg-gradient-to-r from-red-500 via-rose-500 to-red-600 relative">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=400')] opacity-20 mix-blend-overlay"></div>
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white dark:from-background to-transparent"></div>
                <div className="absolute top-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Find Blood Donors</h3>
                  <p className="text-white/80 text-sm">Search by blood type</p>
                </div>
              </div>
              <CardContent className="pt-6">
                <div className="grid grid-cols-4 gap-2">
                  {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((type) => (
                    <Button
                      key={type}
                      variant="outline"
                      className="h-12 hover:bg-red-50 hover:text-red-700 hover:border-red-200 transition-all duration-300 group shadow-sm hover:shadow-md transform hover:-translate-y-1"
                    >
                      <Droplet className="mr-2 h-4 w-4 text-red-500 group-hover:text-red-600 transition-colors duration-200" />
                      {type}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="flex-1 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div className="h-24 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 relative">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=400')] opacity-20 mix-blend-overlay"></div>
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white dark:from-background to-transparent"></div>
                <div className="absolute top-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Blood Availability</h3>
                  <p className="text-white/80 text-sm">Current stock levels</p>
                </div>
              </div>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {[
                    { type: "A+", status: "High", color: "bg-green-500", percentage: 75 },
                    { type: "B+", status: "Medium", color: "bg-yellow-500", percentage: 45 },
                    { type: "O-", status: "Low", color: "bg-red-500", percentage: 15 },
                  ].map((blood) => (
                    <div
                      key={blood.type}
                      className="flex items-center p-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-200"
                    >
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-red-100 mr-3 shadow-inner">
                        <Droplet className="h-4 w-4 text-red-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{blood.type}</span>
                          <span className="text-sm">{blood.status}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 overflow-hidden">
                          <div
                            className={`h-2.5 rounded-full ${blood.color} animate-pulse`}
                            style={{
                              width: `${blood.percentage}%`,
                              animationDuration: "3s",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                name: "City Blood Bank",
                distance: "1.8 miles",
                address: "123 Main St, Cityville",
                phone: "(555) 123-4567",
                bloodTypes: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
                image: "/placeholder.svg?height=80&width=200",
              },
              {
                name: "Regional Blood Center",
                distance: "3.2 miles",
                address: "456 Oak Ave, Cityville",
                phone: "(555) 987-6543",
                bloodTypes: ["A+", "B+", "O+", "O-"],
                image: "/placeholder.svg?height=80&width=200",
              },
            ].map((bank, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="h-40 w-full relative">
                  <img src={bank.image || "/placeholder.svg"} alt={bank.name} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                    <h3 className="text-white font-medium text-lg">{bank.name}</h3>
                    <Badge variant="outline" className="flex items-center bg-white/90 backdrop-blur-sm shadow-md">
                      <Navigation className="mr-1 h-3 w-3" />
                      {bank.distance}
                    </Badge>
                  </div>
                </div>
                <CardContent className="pt-4 pb-2">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start p-2 rounded-md bg-muted/30 hover:bg-muted/50 transition-colors duration-200">
                      <MapPin className="mr-2 h-3 w-3 mt-0.5 text-muted-foreground" />
                      <span>{bank.address}</span>
                    </div>
                    <div className="flex items-start p-2 rounded-md bg-muted/30 hover:bg-muted/50 transition-colors duration-200">
                      <Phone className="mr-2 h-3 w-3 mt-0.5 text-muted-foreground" />
                      <span>{bank.phone}</span>
                    </div>
                    <div className="mt-2 p-3 rounded-lg bg-red-50 border border-red-100 dark:bg-red-950/20 dark:border-red-900/30 shadow-inner">
                      <div className="flex items-center mb-2">
                        <Heart className="h-4 w-4 text-red-500 mr-2" />
                        <span className="text-sm font-medium">Available Blood Types:</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {bank.bloodTypes.map((type) => (
                          <Badge
                            key={type}
                            variant="outline"
                            className="text-red-500 border-red-200 bg-white dark:bg-red-950/30 shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
                          >
                            {type}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <Phone className="mr-2 h-3 w-3" />
                    Call
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <Navigation className="mr-2 h-3 w-3" />
                    Directions
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

