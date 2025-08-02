import type { Metadata } from "next"
import { aeonik, cardo, inter, poppins } from "./fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "Public Page",
  description: "This is the testing page from Hamza Bhai",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${cardo.variable} ${aeonik.variable} ${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
