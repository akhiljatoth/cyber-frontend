"use client"

import React from "react"
import { Box, Typography, Card, CardContent, Grid, Chip, List, ListItem, ListItemText } from "@mui/material"
import { Security, Warning, TrendingUp, Public } from "@mui/icons-material"

export default function ThreatIntelligencePage() {
  const threatStats = [
    { title: "Active Threats", count: 23, trend: "+5", color: "#ef4444" },
    { title: "IOCs Detected", count: 156, trend: "+12", color: "#f59e0b" },
    { title: "Threat Actors", count: 8, trend: "+2", color: "#8b5cf6" },
    { title: "Campaigns", count: 45, trend: "+7", color: "#06b6d4" },
  ]

  const recentThreats = [
    { name: "APT29", type: "Advanced Persistent Threat", severity: "Critical", lastSeen: "2 hours ago" },
    { name: "Emotet", type: "Banking Trojan", severity: "High", lastSeen: "5 hours ago" },
    { name: "Cobalt Strike", type: "Post-Exploitation Tool", severity: "High", lastSeen: "1 day ago" },
    { name: "Ryuk", type: "Ransomware", severity: "Critical", lastSeen: "2 days ago" },
  ]

  const iocs = [
    { type: "IP Address", value: "192.168.1.100", confidence: "High" },
    { type: "Domain", value: "malicious-site.com", confidence: "Medium" },
    { type: "File Hash", value: "a1b2c3d4e5f6...", confidence: "High" },
    { type: "URL", value: "http://bad-url.com/payload", confidence: "Critical" },
  ]

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#111827", mb: 1 }}>
          Threat Intelligence
        </Typography>
        <Typography variant="body1" sx={{ color: "#6b7280" }}>
          Real-time threat intelligence and indicators of compromise
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {threatStats.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                  <Typography variant="h5" sx={{ fontWeight: 600, color: item.color }}>
                    {item.count}
                  </Typography>
                  <Chip 
                    label={item.trend} 
                    size="small" 
                    sx={{ 
                      bgcolor: "#dcfce7", 
                      color: "#16a34a",
                      fontSize: "11px"
                    }} 
                  />
                </Box>
                <Typography variant="body2" sx={{ color: "#6b7280" }}>
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* Recent Threats */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                Recent Threats
              </Typography>
              <List>
                {recentThreats.map((threat, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemText
                      primary={
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <Typography component="span" variant="body1" sx={{ fontWeight: 500 }}>
                            {threat.name}
                          </Typography>
                          <Chip 
                            label={threat.severity}
                            size="small"
                            sx={{
                              bgcolor: threat.severity === "Critical" ? "#ef4444" : "#f59e0b",
                              color: "white",
                              fontSize: "10px"
                            }}
                          />
                        </Box>
                      }
                      secondary={
                        <Box>
                          <Typography component="span" variant="body2" sx={{ color: "#6b7280", display: "block" }}>
                            {threat.type}
                          </Typography>
                          <Typography component="span" variant="caption" sx={{ color: "#9ca3af", display: "block" }}>
                            Last seen: {threat.lastSeen}
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* IOCs */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                Indicators of Compromise
              </Typography>
              <List>
                {iocs.map((ioc, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemText
                      primary={
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <Typography component="span" variant="body2" sx={{ fontWeight: 500, color: "#6b7280" }}>
                            {ioc.type}:
                          </Typography>
                          <Chip 
                            label={ioc.confidence}
                            size="small"
                            sx={{
                              bgcolor: ioc.confidence === "Critical" ? "#ef4444" : 
                                       ioc.confidence === "High" ? "#f59e0b" : "#22c55e",
                              color: "white",
                              fontSize: "10px"
                            }}
                          />
                        </Box>
                      }
                      secondary={
                        <Typography component="span" variant="body2" sx={{ fontFamily: "monospace", fontSize: "12px" }}>
                          {ioc.value}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
