import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'The City Game',
    description: 'The City Game',
    keywords: ['City', 'Game'],
    authors: [{ name: 'UglyGhoulChrist' }],
    icons: {
        icon: [
            {
                media: '(prefers-color-scheme: light)',
                url: '/static/favicon.ico',
                href: '/static/favicon.ico',
            }]
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                {children}</body>
        </html>
    )
}
