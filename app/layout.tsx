"use client"
import "./globals.css"
import { cn } from "@tapcart/mobile-components"
import "@tapcart/mobile-components/dist/globals.css"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <div className="relative flex min-h-screen flex-col max-w-[420px] w-full m-auto">
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  )
}
