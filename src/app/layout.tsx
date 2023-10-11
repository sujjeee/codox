import '@/styles/globals.css'
import type { Metadata } from 'next'
import { siteConfig } from '@/configs/site'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-providers'
import { Toaster } from '@/components/ui/toaster'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes';
import TrpcProvider from '@/components/providers/trpc-provider'
import GoogleAnalytics from '@/google-analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
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
  )
}
