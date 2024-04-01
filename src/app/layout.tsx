import type { Metadata } from "next";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

import logoSrc from "@/images/logo.png";
// import manifestSrc from "@/images/favicon/site.webmanifest";
// import appleTouchIconSrc from "@/images/favicon/apple-touch-icon.png";
// import favicon32Src from "@/images/favicon/favicon-32x32.png";
// import favicon16 from "@/images/favicon/favicon-16x16.png";

export const metadata: Metadata = {
  title: "Pick a Lunch",
  description: "A delicious timesaving webApp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      {/* <head>
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIconSrc} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32Src} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
        <link rel="manifest" href={manifestSrc} />
      </head> */}
      <Box component="body" sx={{ background: "#fff1d4", padding: 4 }}>
        <Box component="header" sx={{ maxWidth: 768, mx: "auto", mb: 2 }}>
          <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              src={logoSrc}
              width={75}
              height={75}
              alt="Pick a lunch logo"
            />
            <Typography variant="h3" component="h1">
              Pick-a-Lunch !
            </Typography>
          </Stack>
        </Box>

        <Box sx={{ maxWidth: 768, margin: "0 auto" }}>{children}</Box>
      </Box>
    </html>
  );
}
