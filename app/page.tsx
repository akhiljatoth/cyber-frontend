"use client"

import { redirect } from "next/navigation"

export default function HomePage() {
  // Redirect to executive-insight as the default page
  redirect("/executive-insight")
}
