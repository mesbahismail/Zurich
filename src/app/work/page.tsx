"use client";

import * as React from "react";
import { Box, Container, Stack, Grid, Typography } from "@mui/joy";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Albumcard from "@/components/Albumcard";

export default function Home() {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        minHeight: "100vh",
      }}
    >
      <Container
        disableGutters
        sx={{
          maxWidth: "1384px",
          position: "relative",
        }}
      >
        <Header />

        {/* Cover Section */}
        <Box
          sx={{
            position: "relative",
            height: 360,
            width: "100%",
            mb: 2,
            mt: 4,
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
              zIndex: 2,
              py: 4,
            }}
          >
            <Stack spacing={2} alignItems="center">
              <Typography
                fontWeight={400}
                sx={{
                  color: "#fff",
                  maxWidth: "800px",
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
                  alignItems: "center",
                }}
              >
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
                <Box
                  sx={{
                    width: "24px",
                    bgcolor: "#fff",
                    opacity: "0.64",
                    height: "4px",
                    flexShrink: 0,
                  }}
                />
              </Stack>
            </Stack>
          </Stack>
        </Box>

        {/* Albums Section */}
        <Grid
          container
          spacing={5}
          sx={{ width: "100%", maxWidth: "1384px", pt: 4 }}
        >
          <Grid xs={6}>
            <Albumcard />
          </Grid>
          <Grid xs={6}>
            <Albumcard />
          </Grid>
          <Grid xs={6}>
            <Albumcard />
          </Grid>
          <Grid xs={6}>
            <Albumcard />
          </Grid>
        </Grid>

        <Footer />
      </Container>
    </Box>
  );
}
