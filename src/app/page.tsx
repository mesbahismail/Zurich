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
import { Montserrat } from "next/font/google";

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
                backgroundColor: "#000",
                opacity: 0.64,
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
          height: "100px",
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
          <Typography fontSize="32px" fontWeight={500} sx={{ color: "#fff" }}>
            Elya Zurich
          </Typography>

          <Stack direction="row" spacing={8}>
            <Link
              href="/work"
              fontSize="20px"
              underline="none"
              sx={{
                color: "#fff",
                fontWeight: 500,
                transition: "background-color 0.3s ease, opacity 0.3s ease",
                "&:hover": {
                  color: "#fff",
                  opacity: "0.64",
                },
              }}
            >
              My work
            </Link>
            <Link
              href="/work"
              fontSize="20px"
              underline="none"
              sx={{
                color: "#fff",
                fontWeight: 500,
                transition: "background-color 0.3s ease, opacity 0.3s ease",
                "&:hover": {
                  color: "#fff",
                  opacity: "0.64",
                },
              }}
            >
              My story
            </Link>
            <Link
              href="/work"
              fontSize="20px"
              underline="none"
              sx={{
                color: "#fff",
                fontWeight: 500,
                transition: "background-color 0.3s ease, opacity 0.3s ease",
                "&:hover": {
                  color: "#fff",
                  opacity: "0.64",
                },
              }}
            >
              Contact me{" "}
            </Link>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center">
            <Typography fontSize="20px" sx={{ color: "#fff", mr: 1 }}>
              Follow me
            </Typography>
            <Stack direction="row" spacing={1.5}>
              <IconButton
                variant="plain"
                sx={{
                  color: "#fff",
                  backgroundColor: "#CB928A",
                  borderRadius: "20px",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#A16F68",
                    color: "#fff",
                  },
                }}
              >
                <TbBrandX size={20} />
              </IconButton>
              <IconButton
                variant="plain"
                sx={{
                  color: "#fff",
                  backgroundColor: "#CB928A",
                  borderRadius: "20px",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#A16F68",
                    color: "#fff",
                  },
                }}
              >
                <TbBrandTiktok size={20} />
              </IconButton>
              <IconButton
                variant="plain"
                sx={{
                  color: "#fff",
                  backgroundColor: "#CB928A",
                  borderRadius: "20px",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#A16F68",
                    color: "#fff",
                  },
                }}
              >
                <TbBrandInstagram size={20} />
              </IconButton>
            </Stack>
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
        <Stack spacing={2} alignItems="center">
          <Typography
            fontSize="18px"
            fontFamily="Montserrat"
            fontWeight={600}
            letterSpacing="2px"
            sx={{ color: "#E6ADA5" }}
          >
            WEDDING PHOTOGRAPHER{" "}
          </Typography>

          <Typography
            fontWeight={400}
            sx={{
              color: "#fff",
              maxWidth: "800px",
              fontSize: "52px",
              lineHeight: "66px",
              pb: 2,
            }}
          >
            Taking photos is savoring life, and every second of it.
          </Typography>

          <Button
            color="primary"
            variant="solid"
            endDecorator={<TbChevronRight size={20} />}
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
          gap: "16px",
          padding: "8px",
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
              width: "12px",
              borderRadius: "0px",
              height: "12px",
              backgroundColor: "transparent",
              border: "1.5px solid #fff",
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
