import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cloud Provider Risk Monitor',
  description: 'Monitor cloud provider account health and risks. Detect billing anomalies, policy violations, and suspension risks across AWS, GCP, and Azure.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a1897f4e-942c-413c-bd21-535601c496f6"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
