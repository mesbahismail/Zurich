import * as React from "react";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";

export const metadata = {
  title: "Zurich",
  description: "Photography Template",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{props.children}</ThemeRegistry>
      </body>
    </html>
  );
}
