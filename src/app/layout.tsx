import type { Metadata } from "next";
import { Geist_Mono, Fira_Code } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Achigyus - Portfolio",
    template: "%s | Achigyus"
  },
  description: "Full-stack developer and digital craftsman passionate about creating innovative web solutions",
  keywords: ["developer", "portfolio", "React", "Next.js", "TypeScript", "full-stack", "web development", "achigyus"],
  authors: [{ name: "Achigyus", url: "https://achigyus-portfolio.vercel.app/" }],
  creator: "Achigyus",
  
  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://achigyus-portfolio.vercel.app",
    title: "Achigyus - Portfolio",
    description: "Full-stack developer and digital craftsman passionate about creating innovative web solutions",
    siteName: "Achigyus Portfolio",
    images: [
      {
        url: "https://achigyus-portfolio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Achigyus Portfolio"
      }
    ]
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Achigyus - Portfolio",
    description: "Full-stack developer and digital craftsman passionate about creating innovative web solutions",
    creator: "@achigyus",
    images: ["https://achigyus-portfolio.vercel.app/og-image.png"]
  },

  // Icons & PWA
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "any", type: "image/png" },
    ],
    shortcut: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon.png",
    },
  },

  // PWA Manifest
  manifest: "/site.webmanifest",

  // Additional SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },

  // Optional: Add when you have verification codes
  // verification: {
  //   google: "your-google-site-verification",
  //   other: {
  //     "msvalidate.01": "your-bing-verification"
  //   }
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${firaCode.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
