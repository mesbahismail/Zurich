"use client";

import * as React from "react";
import { Stack, Button, Typography, IconButton, Container } from "@mui/joy";
import { useRouter } from "next/navigation";
import Link from "@mui/joy/Link";
import { TbBrandInstagram, TbBrandTiktok, TbBrandX } from "react-icons/tb";

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const router = useRouter(); // Use the router inside the component

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    router.push(path); // Correctly using router.push()
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      sx={{
        height: "100px",
        position: "sticky",
        top: 0,
        backgroundColor: "rgba(255, 255, 255, 0.90)",
        zIndex: 1000,
        maxWidth: "1352px",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <Typography fontSize="32px" fontWeight={500} sx={{ color: "#222" }}>
        Elya Zurich
      </Typography>

      <Stack direction="row" spacing={8}>
        <Link
          href="/work"
          fontSize="20px"
          underline="none"
          sx={{
            color: "#222",
            fontWeight: 500,
            transition: "background-color 0.3s ease, opacity 0.3s ease",
            "&:hover": {
              color: "#222",
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
            color: "#222",
            fontWeight: 500,
            transition: "background-color 0.3s ease, opacity 0.3s ease",
            "&:hover": {
              color: "#222",
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
            color: "#222",
            fontWeight: 500,
            transition: "background-color 0.3s ease, opacity 0.3s ease",
            "&:hover": {
              color: "#222",
              opacity: "0.64",
            },
          }}
        >
          Contact me{" "}
        </Link>
      </Stack>

      <Stack direction="row" spacing={2} alignItems="center">
        <Typography fontSize="20px" sx={{ color: "#222", mr: 1 }}>
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
  );
}
