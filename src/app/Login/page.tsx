"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  Box,
  Container,
  Input,
  Stack,
  Button,
  Typography,
  Link,
  Checkbox,
} from "@mui/joy";
import {
  TbBrandGoogle,
  TbBrandX,
  TbChevronRight,
  TbCheck,
} from "react-icons/tb";

export default function LoginPage() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 10); // Adjust the threshold as needed
    };

    // Add event listener with passive option for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState("");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = () => {
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Simulate email sending - replace with actual API call
    setError("");
    setSubmitted(true);
  };

  return (
    <Box
      sx={{
        bgcolor: "#040D13",
        minHeight: "100vh",
      }}
    >
      {/* Cover light - Positioned before header */}
      <Box
        sx={{
          position: "absolute",
          width: "1000px",
          height: "600px",
          borderRadius: "50%",
          backgroundColor: "rgba(20, 52, 73, 0.56)",
          filter: "blur(500px)",
          zIndex: 0,
          // Position 200px above header start
          top: "-200px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      <Container
        disableGutters
        sx={{
          maxWidth: "1384px",
          position: "relative",
        }}
      >
        {/* Header Section */}
        <Header />
        <Stack
          sx={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            p: 8,
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              width: 570,
              bgcolor: "#091D29",
              border: "1px solid #223644",
              p: "40px",
              borderRadius: "20px",
              height: "fit-content",
            }}
          >
            {submitted ? (
              <Stack
                sx={{ flex: 1 }}
                direction="column"
                spacing="32px"
                alignItems="center"
                textAlign="center"
              >
                <Box
                  sx={{
                    p: "24px",
                    border: "2px solid #EDB772",
                    borderRadius: "64px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TbCheck size={36} style={{ color: "#EDB772" }} />
                </Box>
                <Stack direction="column" spacing="12px">
                  <Typography level="h2" sx={{ color: "#ffffff" }}>
                    Check your email!
                  </Typography>
                  <Typography level="body-md" sx={{ color: "#888" }}>
                    We&apos;ve sent a login link to{" "}
                    <strong style={{ color: "#EDB772" }}>{email}</strong>.
                    Please check your inbox and click the link to access your
                    account.
                  </Typography>
                  <Typography level="body-sm" sx={{ color: "#888", mt: 2 }}>
                    Didn&apos;t receive the email?{" "}
                    <Link
                      onClick={() => setSubmitted(false)}
                      sx={{
                        cursor: "pointer",
                        color: "#EDB772",
                        "&:hover": { textDecoration: "none", opacity: 0.8 },
                      }}
                    >
                      Click to resend
                    </Link>
                  </Typography>
                </Stack>
              </Stack>
            ) : (
              <Stack
                direction="column"
                spacing={3}
                sx={{ alignContent: "center", flex: 1, maxWidth: 570 }}
              >
                <Typography level="h2" sx={{ color: "#ffffff", flexGrow: 1 }}>
                  Login to your account
                </Typography>

                <Stack spacing={3}>
                  <Stack spacing={2}>
                    <Input
                      color="primary"
                      variant="solid"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      error={!!error}
                    />
                    {error && (
                      <Typography sx={{ color: "danger.500", mt: -2 }}>
                        {error}
                      </Typography>
                    )}
                    <Input
                      color="primary"
                      variant="solid"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      error={!!error}
                    />
                    {error && (
                      <Typography sx={{ color: "danger.500", mt: -2 }}>
                        {error}
                      </Typography>
                    )}
                  </Stack>
                  <Stack
                    direction="row"
                    sx={{ justifyContent: "space-between" }}
                  >
                    <Checkbox label="Keep me logged in" />
                    <Link
                      component="button"
                      underline="none"
                      sx={{
                        color: "#8696A1",
                        fontWeight: 500,
                        "&:hover": { color: "#fff" },
                      }}
                    >
                      Forgot password?
                    </Link>
                  </Stack>

                  <Button
                    onClick={handleSubmit}
                    color="primary"
                    variant="solid"
                    sx={{ width: "100%" }}
                  >
                    Login
                  </Button>
                </Stack>

                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ width: "100%" }}
                >
                  <Box sx={{ flex: 1, height: "1px", bgcolor: "#223644" }} />
                  <Typography
                    fontSize="sm"
                    sx={{ color: "#8696A1", mx: "16px" }}
                  >
                    OR
                  </Typography>
                  <Box sx={{ flex: 1, height: "1px", bgcolor: "#223644" }} />
                </Stack>
                <Stack spacing={2}>
                  <Button
                    color="secondary"
                    variant="outlined"
                    startDecorator={<TbBrandGoogle size={20} />}
                    sx={{ width: "100%" }}
                  >
                    Login with Google
                  </Button>

                  <Button
                    color="secondary"
                    variant="outlined"
                    startDecorator={<TbBrandX size={20} />}
                    sx={{ width: "100%" }}
                  >
                    Login with X
                  </Button>
                </Stack>
              </Stack>
            )}
          </Box>
        </Stack>
        <Footer />
      </Container>
    </Box>
  );
}
