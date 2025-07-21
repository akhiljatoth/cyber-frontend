"use client"

import React from "react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { ExecutiveInsight } from "@/components/executive-insight"

export default function ExecutiveInsightPage() {
  return (
    <DashboardLayout>
      <ExecutiveInsight />
    </DashboardLayout>
  )
}
