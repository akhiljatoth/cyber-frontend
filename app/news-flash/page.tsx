"use client"

import React from "react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import NewsFlash from "@/components/news-flash"

export default function NewsFlashPage() {
  return (
    <DashboardLayout>
      <NewsFlash />
    </DashboardLayout>
  )
}
