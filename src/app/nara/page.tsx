"use client";

import * as React from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Button,
  IconButton,
  Link,
} from "@mui/joy";
import { useRouter } from "next/navigation";
import {
  TbChevronRight,
  TbBrandX,
  TbBrandTiktok,
  TbBrandInstagram,
} from "react-icons/tb";
import { keyframes } from "@emotion/react";

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const orbPulse = keyframes`
  0% { 
    filter: opacity(0.1) blur(30px);
    transform: scale(0.98);
  }
  50% { 
    filter: opacity(0.15) blur(60px);
    transform: scale(1.02);
  }
  100% { 
    filter: opacity(0.1) blur(30px);
    transform: scale(0.98);
  }
`;

const crossFade = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.95) rotate(-2deg);
  }
  10%, 90% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform: scale(0.95) rotate(2deg);
  }
`;

export default function NaraPage() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const orbImages = ["/orb.png", "/orb02.png", "/orb03.png"];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ height: "100vh", overflow: "hidden", position: "relative" }}>
      {/* Background Image (keep existing background code) */}

      {/* Centered Content */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          width: "100%",
          maxWidth: "1384px",
          paddingX: "32px",
        }}
      >
        <Stack direction="row" alignItems="center" spacing={4}>
          <Stack spacing={2} sx={{ flex: 1 }}>
            {/* Keep existing text content */}
          </Stack>

          {/* Enhanced Orb Container */}
          <Box
            sx={{
              position: "relative",
              width: 640,
              height: 640,
              flexShrink: 0,
              "&::before": {
                content: '""',
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "120%",
                height: "120%",
                background: "rgba(255, 255, 255, 0.08)",
                borderRadius: "50%",
                animation: `${orbPulse} 3s ease-in-out infinite`,
                filter: "blur(60px)",
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                animation: `${rotate} 240s linear infinite`,
                filter: "brightness(1.1) contrast(1.1)",
              }}
            >
              {orbImages.map((img, index) => (
                <Box
                  key={img}
                  component="img"
                  src={img}
                  alt="Orb"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    opacity: activeIndex === index ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out",
                    mixBlendMode: "soft-light",
                    "&:nth-of-type(1)": {
                      animation: `${crossFade} 3s infinite`,
                      animationDelay: "0s",
                    },
                    "&:nth-of-type(2)": {
                      animation: `${crossFade} 3s infinite`,
                      animationDelay: "1s",
                    },
                    "&:nth-of-type(3)": {
                      animation: `${crossFade} 3s infinite`,
                      animationDelay: "2s",
                    },
                  }}
                />
              ))}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%)",
                  mixBlendMode: "overlay",
                  pointerEvents: "none",
                }}
              />
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
