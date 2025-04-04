"\"use client"

import type * as React from "react"

export const Chart = ({ data, children }: { data: any[]; children: React.ReactNode }) => {
  return (
    <svg viewBox={`0 0 200 100`} width="200" height="100">
      {children}
    </svg>
  )
}

export const ChartContainer = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export const ChartGrid = ({ x, y }: { x?: any; y?: any }) => {
  return <></>
}

export const ChartLine = ({
  dataKey,
  stroke,
  strokeWidth,
  dot,
}: { dataKey: string; stroke: string; strokeWidth: number; dot: any }) => {
  return <></>
}

export const ChartTooltip = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export const ChartTooltipContent = () => {
  return <></>
}

export const ChartXAxis = ({ dataKey }: { dataKey: string }) => {
  return <></>
}

export const ChartYAxis = ({ tickCount }: { tickCount: number }) => {
  return <></>
}

