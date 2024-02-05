import { ThemeProvider } from "@/components/providers/theme-providers";
import TrpcProvider from "@/components/providers/trpc-provider";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/configs/site";
import GoogleAnalytics from "@/google-analytics";
import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - CoDox`
  },
  description: siteConfig.description,
  // added new keywords for SEO
  keywords: [
    "clerk auth",
    "prisma",
    "prisma io",
    "prisma postgres",
    "nextjs 13",
    "tailwind nextjs",
    "prisma nextjs",
    "trpc nextjs",
    "trpc",
    "trpc api",
    "tailwindcss",
    "t3 app",
    "web development tech stack",
    "modern tech stacks",
    "tech stacks",
    "nextjs with trpc",
    "t3 stack",
    "typescript",
    "clerk with prisma",
    "trpc with prisma",
    "web development",
    "codox"
  ],
  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.author.github
    }
  ],
  creator: siteConfig.author.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    siteName: siteConfig.name
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: "@sujjeeee"
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark
      }}
    >
      <TrpcProvider>
        <html lang="en">
          <body className={inter.className}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <GoogleAnalytics />
              <Toaster />
            </ThemeProvider>
          </body>
        </html>
      </TrpcProvider>
    </ClerkProvider>
  );
}
