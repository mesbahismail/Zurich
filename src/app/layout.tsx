import "@fontsource-variable/cormorant";
import "@fontsource-variable/source-code-pro";
import "@fontsource-variable/montserrat";
import "./globals.css";
import * as React from "react";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata = {
  title: "Elya Zurich — Wedding Photography",
  description: "Honest wedding photographs, a little poetry. An Annecy-inspired wedding photography portfolio by Elya Zurich.",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <ThemeRegistry>
          {props.children}
          <ThemeToggle />
        </ThemeRegistry>
      </body>
    </html>
  );
}
