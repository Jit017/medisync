"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function MedicalRecordsSearch() {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="relative md:col-span-2">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search records..." className="pl-8" />
          </div>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Record Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Records</SelectItem>
              <SelectItem value="lab">Lab Results</SelectItem>
              <SelectItem value="imaging">Imaging</SelectItem>
              <SelectItem value="prescription">Prescriptions</SelectItem>
              <SelectItem value="visit">Visit Notes</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex gap-2">
            <Button variant="outline" className="w-full">
              <Filter className="mr-2 h-4 w-4" />
              More Filters
            </Button>
            <Button className="w-full">Search</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

