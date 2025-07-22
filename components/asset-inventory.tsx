"use client"

import { useState } from "react"
import { Search, ExpandMore, Download, Refresh, MoreHoriz, ExpandLess } from "@mui/icons-material"
import {
  TextField,
  Button,
  Chip,
  Card,
  CardContent,
  Typography,
  Box,
  InputAdornment,
  IconButton,
  Collapse,
} from "@mui/material"

export function AssetInventory() {
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({
    pixpirate: true,
    "microsoft-windows": true,
  })

  const toggleCardExpansion = (cardId: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }))
  }

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "text.primary", mb: 1 }}>
            Asset Inventory
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Select your fiat currency and your favourite payment method
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <TextField
            placeholder="Search for IP=192.168.1.1 or Domain..."
            size="small"
            sx={{ width: 320 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: "text.secondary", fontSize: 16 }} />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="outlined"
            size="small"
            endIcon={<ExpandMore />}
            sx={{
              bgcolor: "white",
              borderColor: "#d1d5db",
              color: "#374151",
              textTransform: "none",
              fontSize: "13px",
              height: 32,
              "&:hover": {
                backgroundColor: "#f9fafb",
                borderColor: "#9ca3af",
              },
            }}
          >
            Select Duration
          </Button>
          <IconButton size="small" sx={{ color: "#6b7280" }}>
            <Download />
          </IconButton>
          <IconButton size="small" sx={{ color: "#6b7280" }}>
            <Refresh />
          </IconButton>
          <IconButton size="small" sx={{ color: "#6b7280" }}>
            <MoreHoriz />
          </IconButton>
        </Box>
      </Box>

      {/* Filter Controls */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
        {[
          ["Select Severities", "0", "#e5e7eb"],
          ["Select Countries", "1", "#22c55e"],
          ["Select Regions", "0", "#e5e7eb"],
          ["Select Industries", "0", "#e5e7eb"],
        ].map(([label, count, color], index) => (
          <Button
            key={index}
            variant="outlined"
            size="small"
            endIcon={<ExpandMore />}
            sx={{
              bgcolor: "white",
              borderColor: "#d1d5db",
              color: "#374151",
              textTransform: "none",
              fontSize: "13px",
              height: 32,
              "&:hover": {
                backgroundColor: "#f9fafb",
                borderColor: "#9ca3af",
              },
            }}
          >
            {label}
            {count !== "0" && (
              <Chip
                label={count}
                size="small"
                sx={{
                  bgcolor: color,
                  color: count === "0" ? "#6b7280" : "white",
                  ml: 1,
                  height: 16,
                  fontSize: "10px",
                  fontWeight: 600,
                  "& .MuiChip-label": {
                    px: 0.5,
                  },
                }}
              />
            )}
          </Button>
        ))}
      </Box>

      {/* Asset Cards */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {/* PixPirate Card */}
        <Card sx={{
          borderLeft: 4,
          borderLeftColor: "#ef4444",
          boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
          borderRadius: 1,
        }}>
          <CardContent sx={{ p: 0 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 2,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#f9fafb",
                },
              }}
              onClick={() => toggleCardExpansion("pixpirate")}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#111827", fontSize: "16px" }}>
                PixPirate
              </Typography>
              <IconButton size="small" sx={{ color: "#6b7280" }}>
                {expandedCards["pixpirate"] ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </Box>
            <Collapse in={expandedCards["pixpirate"]}>
              <Box sx={{ px: 2, pb: 2, borderTop: "1px solid #e5e7eb", bgcolor: "#fafafa" }}>
                <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 4, py: 2 }}>
                  <Box>
                    <Typography variant="body2" sx={{ color: "#6b7280", fontSize: "12px", fontWeight: 500 }}>
                      Description
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#111827", mt: 0.5, fontSize: "13px" }}>
                      PixPirate Exploits WhatsApp in THE LATEST Campaign
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: "#6b7280", fontSize: "12px", fontWeight: 500 }}>
                      Published On
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#111827", mt: 0.5, fontSize: "13px" }}>
                      10-Dec-2024
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: "#6b7280", fontSize: "12px", fontWeight: 500 }}>
                      Published By
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#111827", mt: 0.5, fontSize: "13px" }}>
                      Armaudit
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap", mb: 2 }}>
                  {["MALWARE", "ANDROID", "TROJAN", "EXPLOIT", "SOCIAL ENGINEERING", "SMISHING"].map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      size="small"
                      sx={{
                        bgcolor: "#e5e7eb",
                        color: "#374151",
                        fontSize: "11px",
                        height: 24,
                        fontWeight: 500,
                        "& .MuiChip-label": {
                          px: 1,
                        },
                      }}
                    />
                  ))}
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box sx={{
                    width: 20,
                    height: 14,
                    bgcolor: "#ff9500",
                    borderRadius: "2px",
                    border: "1px solid #d1d5db"
                  }} />
                </Box>
              </Box>
            </Collapse>
          </CardContent>
        </Card>

        {/* HeadMare Cards */}
        {[1, 2].map((index) => (
          <Card key={`headmare-${index}`} sx={{
            borderLeft: 4,
            borderLeftColor: "#f59e0b",
            boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
            borderRadius: 1,
          }}>
            <CardContent sx={{ p: 0 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: 2,
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#f9fafb",
                  },
                }}
                onClick={() => toggleCardExpansion(`headmare-${index}`)}
              >
                <Typography variant="h6" sx={{ fontWeight: 600, color: "#111827", fontSize: "16px" }}>
                  HeadMare
                </Typography>
                <IconButton size="small" sx={{ color: "#6b7280" }}>
                  {expandedCards[`headmare-${index}`] ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        ))}

        {/* Microsoft Windows Card */}
        <Card sx={{
          borderLeft: 4,
          borderLeftColor: "#ef4444",
          boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
          borderRadius: 1,
        }}>
          <CardContent sx={{ p: 0 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 2,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#f9fafb",
                },
              }}
              onClick={() => toggleCardExpansion("microsoft-windows")}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: "#111827", fontSize: "16px" }}>
                  Microsoft Windows
                </Typography>
                <Chip
                  label="EXCLUSIVE"
                  size="small"
                  sx={{
                    bgcolor: "#3b82f6",
                    color: "white",
                    fontSize: "10px",
                    height: 20,
                    fontWeight: 600,
                    "& .MuiChip-label": {
                      px: 1,
                    },
                  }}
                />
              </Box>
              <IconButton size="small" sx={{ color: "#6b7280" }}>
                {expandedCards["microsoft-windows"] ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </Box>
            <Collapse in={expandedCards["microsoft-windows"]}>
              <Box sx={{ px: 2, pb: 2, borderTop: "1px solid #e5e7eb", bgcolor: "#fafafa" }}>
                <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 4, py: 2 }}>
                  <Box>
                    <Typography variant="body2" sx={{ color: "#6b7280", fontSize: "12px", fontWeight: 500 }}>
                      Description
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#111827", mt: 0.5, fontSize: "13px", lineHeight: 1.4 }}>
                      Microsoft Windows Common Log File System Driver Heap-Based Buffer Overflow Vulnerability Incorporated by CISA Known Exploited Vulnerability (KEV) catalog
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: "#6b7280", fontSize: "12px", fontWeight: 500 }}>
                      Published On
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#111827", mt: 0.5, fontSize: "13px" }}>
                      11-Dec-2024
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: "#6b7280", fontSize: "12px", fontWeight: 500 }}>
                      Published By
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#111827", mt: 0.5, fontSize: "13px" }}>
                      Armaudit
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap", mb: 2 }}>
                  {["VULNERABILITY", "CISA", "EXPLOIT", "KEV HEAP BASED", "BUFFER", "OVERFLOW"].map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      size="small"
                      sx={{
                        bgcolor: "#e5e7eb",
                        color: "#374151",
                        fontSize: "11px",
                        height: 24,
                        fontWeight: 500,
                        "& .MuiChip-label": {
                          px: 1,
                        },
                      }}
                    />
                  ))}
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box sx={{
                    width: 20,
                    height: 14,
                    bgcolor: "#ff9500",
                    borderRadius: "2px",
                    border: "1px solid #d1d5db"
                  }} />
                </Box>
              </Box>
            </Collapse>
          </CardContent>
        </Card>

        {/* Additional HeadMare Card */}
        <Card sx={{
          borderLeft: 4,
          borderLeftColor: "#f59e0b",
          boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
          borderRadius: 1,
        }}>
          <CardContent sx={{ p: 0 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 2,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#f9fafb",
                },
              }}
              onClick={() => toggleCardExpansion("headmare-3")}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#111827", fontSize: "16px" }}>
                HeadMare
              </Typography>
              <IconButton size="small" sx={{ color: "#6b7280" }}>
                {expandedCards["headmare-3"] ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}
