"use client"

import React from "react"
import { Box } from "@mui/material"
import { Sidebar } from "@/components/sidebar"
import { NavigationTabs } from "@/components/layout/navigation-tabs"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        {/* Main Content */}
        <Box component="main" sx={{ flex: 1, p: 3 }}>
          <NavigationTabs />
          <Box sx={{ mt: 3 }}>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
