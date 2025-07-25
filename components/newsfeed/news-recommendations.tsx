"use client"

import React from "react"
import { Box, Typography, Chip, Card, CardContent } from "@mui/material"
import { Warning, Security } from "@mui/icons-material"

const newsItems = [
  {
    id: 1,
    category: "Cyber Security News",
    date: "5May 2025",
    title: "Researcher Details CVE-2024-44131: A Critical TCC Bypass in macOS and iOS",
    description: "This article discusses the CVE-2024-44131 vulnerability in Apple's TCC framework, allowing malicious applications to bypass user consent mechanisms on macOS and iOS. Attackers can access sensitive data without user knowledge, impacting user privacy and organisational data security. The exploit involves symbolic...",
    tags: [
      { label: "1 Industries", color: "#3b82f6" },
      { label: "1 Malware Families", color: "#a855f7" },
      { label: "4 Tags", color: "#22c55e" },
      { label: "2 CVES", color: "#ef4444" },
    ],
    icon: Warning,
  },
  {
    id: 2,
    category: "Cyber Security News",
    date: "5May 2025",
    title: "Researcher Details CVE-2024-44131: A Critical TCC Bypass in macOS and iOS",
    description: "This article discusses the CVE-2024-44131 vulnerability in Apple's TCC framework, allowing malicious applications to bypass user consent mechanisms on macOS and iOS. Attackers can access sensitive data without user knowledge, impacting user privacy and organisational data security. The exploit involves symbolic...",
    tags: [
      { label: "1 Industries", color: "#3b82f6" },
      { label: "1 Malware Families", color: "#a855f7" },
      { label: "4 Tags", color: "#22c55e" },
      { label: "2 CVES", color: "#ef4444" },
    ],
    icon: Security,
  },
]

export function NewsRecommendations() {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", color: "text.primary", mb: 2 }}>
        News Recommendations
      </Typography>
      
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {newsItems.map((item) => (
          <Card key={item.id} sx={{ overflow: "hidden" }}>
            <CardContent sx={{ p: 0 }}>
              <Box sx={{ display: "flex" }}>
                {/* Image/Icon Section */}
                <Box
                  sx={{
                    width: 192,
                    height: 128,
                    bgcolor: "grey.900",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to bottom right, rgba(239, 68, 68, 0.2), rgba(17, 24, 39, 1))",
                    }}
                  />
                  <Box sx={{ position: "relative", zIndex: 10, textAlign: "center" }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        mx: "auto",
                        mb: 1,
                        bgcolor: "rgba(239, 68, 68, 0.2)",
                        borderRadius: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <item.icon sx={{ fontSize: 24, color: "#fca5a5" }} />
                    </Box>
                    <Typography variant="caption" sx={{ color: "grey.300" }}>
                      Security Alert
                    </Typography>
                  </Box>
                </Box>
                
                {/* Content Section */}
                <Box sx={{ flex: 1, p: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
                    <Chip
                      label={item.category}
                      size="small"
                      sx={{ bgcolor: "rgba(33, 150, 243, 0.1)", color: "primary.main" }}
                    />
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {item.date}
                    </Typography>
                  </Box>
                  
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "text.primary", mb: 1 }}>
                    {item.title}
                  </Typography>
                  
                  <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.5, lineHeight: 1.5 }}>
                    {item.description}
                  </Typography>
                  
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    {item.tags.map((tag, index) => (
                      <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <Box sx={{ width: 12, height: 12, bgcolor: tag.color, borderRadius: "50%" }} />
                        <Typography variant="caption" sx={{ color: "text.secondary" }}>
                          {tag.label}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  )
}
