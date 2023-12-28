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
      <body className={shinShin.className}>
        {children}
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "328e28981c8044cca1b839a09b0e30d1"}'></script>
      </body>
    </html>
  )
}
