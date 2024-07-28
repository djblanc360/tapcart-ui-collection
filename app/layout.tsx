"use client"
import "./globals.css"
import { cn } from "@tapcart/mobile-components"
import "@tapcart/mobile-components/dist/styles.css"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <div className="relative flex min-h-screen flex-col max-w-content w-full m-auto md:px-8 lg:px-12 xl:px-16">
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  )
}
