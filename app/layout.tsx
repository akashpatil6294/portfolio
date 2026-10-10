import type { Metadata } from 'next';
import './globals.css';
import { portfolio as p } from '@/data/portfolio';
export const metadata: Metadata = {metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000')), title: `${p.name} — AI / ML & Backend Developer`, description: p.headline, openGraph: {title: p.name, description: p.headline, type: 'website'}, twitter: {card: 'summary_large_image', title: p.name, description: p.headline}};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en" suppressHydrationWarning><body><script dangerouslySetInnerHTML={{__html: `try{document.documentElement.dataset.theme=localStorage.getItem('portfolio-theme')||'dark'}catch{}`}}/>{children}</body></html>; }
