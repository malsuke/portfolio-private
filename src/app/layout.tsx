import Layout from '@/_layouts/home/layout'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = JetBrains_Mono({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
