import type React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { MainSidebar } from "@/components/main-sidebar"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider>
      <div className="flex">
        <MainSidebar />
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </SidebarProvider>
  )
}

