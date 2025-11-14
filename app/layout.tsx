import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Regaarder - Video Discovery Platform",
  description: "Discover and request amazing video content from top creators",
  generator: "Regaarder 3.0",
  themeColor: "#f8f9fa",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
    apple: [
      {
        url: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* ADD MANIFEST LINK HERE */}
      <link rel="manifest" href="/manifest.json" />

      <body className={`${inter.className} font-sans antialiased`}>
        {/* REGISTER SERVICE WORKER */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ("serviceWorker" in navigator) {
                navigator.serviceWorker.register("/service-worker.js")
                  .catch(err => console.error("SW registration failed", err));
              }
            `,
          }}
        />

        {children}
      </body>
    </html>
  );
}
