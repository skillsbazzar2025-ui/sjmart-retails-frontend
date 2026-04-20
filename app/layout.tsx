import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SJ Mart Retails",
  description: "Fresh Food Store",
  manifest: "/manifest.json",
  themeColor: "#ea580c",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=yes",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "SJ Mart",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/icon-152x152.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
