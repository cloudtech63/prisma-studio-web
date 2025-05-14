import './globals.css'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Prisma Studio 網頁版',
  description: '一個簡單的 Prisma Studio 信息頁面',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): React.JSX.Element {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  )
} 