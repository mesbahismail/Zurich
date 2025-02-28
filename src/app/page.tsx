"use client";

import * as React from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Button,
  IconButton,
} from "@mui/joy";
import { useRouter } from "next/navigation";
import {
  TbChevronRight,
  TbBrandX,
  TbBrandTiktok,
  TbBrandInstagram,
} from "react-icons/tb";

export default function Home() {
  const router = useRouter();
  const [activeSlide, setActiveSlide] = React.useState(0);
  const slides = [
    "/slide-01.jpg",
    "/slide-02.jpg",
    "/slide-03.jpg",
    "/slide-04.jpg",
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background Slides */}
      <Box
        sx={{
          position: "relative",
          width: "400%",
          height: "100%",
          display: "flex",
          transition: "transform 1s ease-in-out",
          transform: `translateX(-${activeSlide * 25}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              width: "25%",
              height: "100%",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#111",
                opacity: 0.48,
              },
            }}
          >
            <img
              src={slide}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Header */}
      <Container
        sx={{
          position: "fixed",
          top: 0,
          width: "100%",
          maxWidth: "1384px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
          height: "64px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Typography level="h2" sx={{ color: "#fff" }}>
            Zurich
          </Typography>

          <Stack direction="row" spacing={2} alignItems="center">
            <Typography level="body-sm" sx={{ color: "#fff", mr: 1 }}>
              Follow me
            </Typography>
            <IconButton variant="plain" sx={{ color: "#fff" }}>
              <TbBrandX size={20} />
            </IconButton>
            <IconButton variant="plain" sx={{ color: "#fff" }}>
              <TbBrandTiktok size={20} />
            </IconButton>
            <IconButton variant="plain" sx={{ color: "#fff" }}>
              <TbBrandInstagram size={20} />
            </IconButton>
          </Stack>
        </Stack>
      </Container>

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
          textAlign: "center",
        }}
      >
        <Stack spacing={3} alignItems="center">
          <Typography level="h2" sx={{ color: "#fff" }}>
            Elya Zurich
          </Typography>

          <Typography
            level="h1"
            sx={{
              color: "#fff",
              maxWidth: "800px",
              fontSize: "3.5rem",
              lineHeight: 1.2,
            }}
          >
            Taking photos is savoring life, and every second of it.
          </Typography>

          <Button
            color="primary"
            variant="solid"
            endDecorator={<TbChevronRight size={20} />}
            sx={{ mt: 2 }}
          >
            CHECK MY WORK
          </Button>
        </Stack>
      </Box>

      {/* Slider Controls */}
      <Box
        sx={{
          position: "fixed",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
          display: "flex",
          gap: "12px",
          padding: "8px",
          backgroundColor: "rgba(0,0,0,0.2)",
          borderRadius: "8px",
        }}
      >
        {slides.map((_, index) => (
          <Button
            key={index}
            variant="plain"
            onClick={() => setActiveSlide(index)}
            sx={{
              p: 0.5,
              minHeight: 0,
              minWidth: 0,
              transform: "rotate(45deg)",
              width: "20px",
              height: "20px",
              backgroundColor: "transparent",
              border: "1px solid #fff",
              opacity: activeSlide === index ? 1 : 0.64,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
