"use client"; // Add this directive at the very top
import * as React from "react";
import { useRouter } from "next/navigation";
import {
  TbEye,
  TbDownload,
  TbBrandGoogle,
  TbBrandX,
  TbChevronRight,
} from "react-icons/tb";
import {
  Box,
  Card,
  Link,
  IconButton,
  Stack,
  Typography,
  AspectRatio,
} from "@mui/joy";

export default function Albumcard() {
  const router = useRouter();

  return (
    <Box
      sx={{
        position: "relative",
        height: 422,
        width: "100%",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url(slide-03.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.64)",
          zIndex: 1,
        },
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{
          position: "relative",
          height: "100%",
          zIndex: 2, // Ensure content is above both layers
          py: 4,
        }}
      >
        <Stack spacing={2} alignItems="center">
          <Typography
            fontWeight={400}
            sx={{
              color: "#fff",
              maxWidth: "100%",
              fontSize: "72px",
              lineHeight: "66px",
              pb: 2,
            }}
          >
            Brilliant Measures
          </Typography>
          <Stack
            direction="row"
            spacing={2.5}
            sx={{
              justifyContent: "center",
              alignItems: "center", // Add vertical alignment
            }}
          >
            <Typography
              fontSize="18px"
              fontFamily="Montserrat"
              fontWeight={600}
              letterSpacing="2px"
              sx={{ color: "#fff" }}
            >
              MY WORK
            </Typography>
            <Box
              sx={{
                width: "24px",
                bgcolor: "#fff",
                opacity: "0.64",
                height: "4px",
                flexShrink: 0,
              }}
            />
            <Typography
              fontSize="18px"
              fontFamily="Montserrat"
              fontWeight={600}
              letterSpacing="2px"
              sx={{ color: "#fff" }}
            >
              MY WORK
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
