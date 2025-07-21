"use client"

import React from "react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { AlertsInsight } from "@/components/alerts-insight"

export default function AlertsInsightPage() {
  return (
    <DashboardLayout>
      <AlertsInsight />
    </DashboardLayout>
  )
}
