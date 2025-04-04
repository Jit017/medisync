"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Chart,
  ChartContainer,
  ChartGrid,
  ChartLine,
  ChartTooltip,
  ChartTooltipContent,
  ChartXAxis,
  ChartYAxis,
} from "@/components/ui/chart"

export function HealthTrends() {
  // Sample data for heart rate over time
  const heartRateData = [
    { date: "Apr 1", value: 68 },
    { date: "Apr 5", value: 72 },
    { date: "Apr 10", value: 75 },
    { date: "Apr 15", value: 70 },
    { date: "Apr 20", value: 72 },
    { date: "Apr 25", value: 74 },
    { date: "Apr 30", value: 71 },
  ]

  // Sample data for blood pressure over time
  const bloodPressureData = [
    { date: "Apr 1", systolic: 120, diastolic: 80 },
    { date: "Apr 5", systolic: 122, diastolic: 82 },
    { date: "Apr 10", systolic: 118, diastolic: 78 },
    { date: "Apr 15", systolic: 121, diastolic: 81 },
    { date: "Apr 20", systolic: 119, diastolic: 79 },
    { date: "Apr 25", systolic: 123, diastolic: 83 },
    { date: "Apr 30", systolic: 120, diastolic: 80 },
  ]

  // Sample data for blood glucose over time
  const glucoseData = [
    { date: "Apr 1", value: 95 },
    { date: "Apr 5", value: 98 },
    { date: "Apr 10", value: 102 },
    { date: "Apr 15", value: 97 },
    { date: "Apr 20", value: 99 },
    { date: "Apr 25", value: 96 },
    { date: "Apr 30", value: 98 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Health Trends</CardTitle>
        <CardDescription>Visualize your health metrics over time</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="heart-rate">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="heart-rate">Heart Rate</TabsTrigger>
            <TabsTrigger value="blood-pressure">Blood Pressure</TabsTrigger>
            <TabsTrigger value="glucose">Blood Glucose</TabsTrigger>
          </TabsList>

          <TabsContent value="heart-rate" className="pt-4">
            <ChartContainer className="h-[200px]">
              <Chart data={heartRateData}>
                <ChartTooltip>
                  <ChartTooltipContent />
                </ChartTooltip>
                <ChartGrid x={{ strokeDasharray: "5 5" }} y={{ strokeDasharray: "5 5" }} />
                <ChartXAxis dataKey="date" />
                <ChartYAxis tickCount={5} />
                <ChartLine dataKey="value" stroke="#ef4444" strokeWidth={2} dot={{ fill: "#ef4444", r: 3 }} />
              </Chart>
            </ChartContainer>
          </TabsContent>

          <TabsContent value="blood-pressure" className="pt-4">
            <ChartContainer className="h-[200px]">
              <Chart data={bloodPressureData}>
                <ChartTooltip>
                  <ChartTooltipContent />
                </ChartTooltip>
                <ChartGrid x={{ strokeDasharray: "5 5" }} y={{ strokeDasharray: "5 5" }} />
                <ChartXAxis dataKey="date" />
                <ChartYAxis tickCount={5} />
                <ChartLine dataKey="systolic" stroke="#3b82f6" strokeWidth={2} dot={{ fill: "#3b82f6", r: 3 }} />
                <ChartLine dataKey="diastolic" stroke="#60a5fa" strokeWidth={2} dot={{ fill: "#60a5fa", r: 3 }} />
              </Chart>
            </ChartContainer>
          </TabsContent>

          <TabsContent value="glucose" className="pt-4">
            <ChartContainer className="h-[200px]">
              <Chart data={glucoseData}>
                <ChartTooltip>
                  <ChartTooltipContent />
                </ChartTooltip>
                <ChartGrid x={{ strokeDasharray: "5 5" }} y={{ strokeDasharray: "5 5" }} />
                <ChartXAxis dataKey="date" />
                <ChartYAxis tickCount={5} />
                <ChartLine dataKey="value" stroke="#8b5cf6" strokeWidth={2} dot={{ fill: "#8b5cf6", r: 3 }} />
              </Chart>
            </ChartContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

