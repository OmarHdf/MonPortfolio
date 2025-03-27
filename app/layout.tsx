import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import './globals.css';

// Optimize font loading by specifying only the subsets and display type needed
const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap', // Use swap to prevent layout shifts
  preload: true,
  weight: ['400', '500', '600'],
  variable: '--font-fira-code',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://agakadela.com'),
  title: {
    default:
      'Aga Kadela | Full Stack Product Engineer | AI Integration Specialist',
    template: '%s | Aga Kadela',
  },
  description:
    'Full Stack Product Engineer specializing in Next.js, React, and AI Integration. Expert in building high-performance web applications with modern technologies.',
  keywords: [
    'Next.js Developer',
    'React Developer',
    'AI Integration',
    'Full Stack Developer',
    'Web Development',
    'JavaScript',
    'TypeScript',
    'Frontend Developer',
    'Software Engineer',
    'Web Applications',
    'Performance Optimization',
    'Aga Kadela',
  ],
  authors: [{ name: 'Aga Kadela' }],
  creator: 'Aga Kadela',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://agakadela.com',
    siteName: 'Aga Kadela Portfolio',
    title: 'Aga Kadela | Full Stack Product Engineer',
    description:
      'Full Stack Product Engineer specializing in Next.js, React, and AI Integration. Building high-performance web applications.',
    images: [
      {
        url: '/imgs/website.webp',
        width: 1200,
        height: 630,
        alt: 'Aga Kadela - Full Stack Product Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aga Kadela | Full Stack Product Engineer',
    description:
      'Full Stack Product Engineer specializing in Next.js, React, and AI Integration',
    images: ['/imgs/website.webp'],
    creator: '@agakadela',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://agakadela.com',
  },
  icons: {
    icon: '/imgs/logo.webp',
    apple: '/imgs/logo.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className='dark' lang='en'>
      <head />
      <body className={`${firaCode.className} ${firaCode.variable}`}>
        {children}
      </body>
    </html>
  );
}
