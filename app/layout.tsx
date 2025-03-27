import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import './globals.css';

const firaCode = Fira_Code({ subsets: ['latin'] });

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
        url: '/imgs/website.png',
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
    images: ['/imgs/website.png'],
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
    icon: '/imgs/logo.png',
    apple: '/imgs/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className='dark' lang='en'>
      <body className={firaCode.className}>{children}</body>
    </html>
  );
}
