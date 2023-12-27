import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const shinShin = localFont({
  src: "./ShinShin.woff2",
  display: "swap"
})

export const metadata: Metadata = {
  title: 'Genshin Vision Calculator',
  description: 'See what vision you would get!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={shinShin.className}>{children}</body>
    </html>
  )
}
