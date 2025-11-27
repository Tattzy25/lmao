'use client'

import dynamic from 'next/dynamic'
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

// Dynamically import components that use useSidebar hook to prevent SSR issues
const AppSidebar = dynamic(() => import("@/components/app-sidebar").then(mod => ({ default: mod.AppSidebar })), { ssr: false })
const SiteHeader = dynamic(() => import("@/components/site-header").then(mod => ({ default: mod.SiteHeader })), { ssr: false })

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="px-4 lg:px-6">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="text-gray-600 mt-2">Welcome to your Scoovio dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
