"use client"

import React from "react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { AssetInventory } from "@/components/asset-inventory"

export default function AssetInventoryPage() {
  return (
    <DashboardLayout>
      <AssetInventory />
    </DashboardLayout>
  )
}
