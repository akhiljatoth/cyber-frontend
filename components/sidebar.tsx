"use client"

import { useRouter, usePathname } from "next/navigation"
import {
  BarChart,
  Public,
  Visibility,
  People,
  Security,
  Warning,
  Timeline,
  Notifications,
  Settings,
  ExpandMore,
} from "@mui/icons-material"
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Box, ListItemButton } from "@mui/material"

export function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()

  const menuItems = [
    { icon: BarChart, label: "Dashboard", path: "/dashboard", active: pathname.startsWith("/dashboard") },
    { icon: Public, label: "Attack Surface", path: "/attack-surface" },
    { icon: Visibility, label: "Threat Intelligence", path: "/threat-intelligence" },
    { icon: People, label: "Geolocation", path: "/geolocation", hasSubmenu: true },
    { icon: Security, label: "DeepFake", path: "/deepfake" },
    { icon: Warning, label: "Physical Threats", path: "/physical-threats" },
    { icon: Security, label: "Cloud Security", path: "/cloud-security" },
    { icon: Visibility, label: "Brand Intelligence", path: "/brand-intelligence" },
    { icon: Timeline, label: "Vulnerability Intelligence", path: "/vulnerability-intelligence" },
    { icon: Notifications, label: "Alerts", path: "/alerts" },
    { icon: Timeline, label: "Executive monitoring", path: "/executive-monitoring" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ]

  const handleMenuClick = (path: string) => {
    router.push(path)
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 256,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 256,
          boxSizing: "border-box",
          bgcolor: "background.paper",
          borderRight: "1px solid",
          borderColor: (theme) => theme.palette.mode === 'dark' ? theme.palette.divider : 'grey.200',
          position: "relative",
          height: "calc(100vh - 64px)", // Full height minus header
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="caption" sx={{ color: "text.secondary", mb: 2, display: "block" }}>
          MAIN MENU
        </Typography>
        <List sx={{ p: 0 }}>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => handleMenuClick(item.path)}
                sx={{
                  borderRadius: 1,
                  mb: 0.5,
                  bgcolor: item.active ? "rgba(70, 229, 149, 0.1)" : "transparent",
                  color: item.active ? "text.primary" : "text.secondary",
                  fontWeight: item.active ? 500 : 400,
                  "&:hover": {
                    bgcolor: item.active ? "rgba(70, 229, 149, 0.1)" : "grey.50",
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <item.icon sx={{ color: "secondary.main", fontSize: 16 }} />
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    variant: "body2",
                    sx: { fontWeight: item.active ? 500 : 400 },
                  }}
                />
                {item.hasSubmenu && <ExpandMore sx={{ fontSize: 16, ml: "auto" }} />}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}
