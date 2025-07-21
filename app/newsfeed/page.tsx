"use client"

import React from "react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Newsfeed } from "@/components/newsfeed"

export default function NewsfeedPage() {
  return (
    <DashboardLayout>
      <Newsfeed />
    </DashboardLayout>
  )
}
