import * as React from "react";
import Link from "next/link";
import { Typography, Button, Box } from "@mui/material";
import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Bem-vindo ao Dashboard
      </Typography>
      <Link href="/dashboard" passHref>
        <Button variant="contained">Ir para o Dashboard</Button>
      </Link>
    </Box>
  );
}
