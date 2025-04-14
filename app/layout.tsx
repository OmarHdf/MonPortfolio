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
      'Alex Muniz | Senior Software Engineer | Secure Development | Cross-Platform Mobile Expert',
    template: '%s | Alex Muniz',
  },
  description:
    'Senior Software Engineer specialized in secure development, frontend, and cross-platform mobile apps using React, React Native, Flutter, TypeScript, and Laravel. Experienced in system modernization, DevOps, and cloud (AWS/Azure).',
  keywords: [
    'Senior Software Engineer', 
    'Frontend Specialist', 
    'Secure Development', 
    'Cross-Platform Mobile Expert', 
    'React','React Native', 
    'Flutter', 
    'TypeScript', 
    'Golang', 
    'Laravel', 
    'DevOps', 
    'AWS', 
    'Azure', 
    'CI/CD', 
    'Docker', 
    'Linux', 
    'Performance Optimization', 
    'Cloud Infrastructure', 
    'Scalable System Design', 
    'Product-Focused Engineering',
    'Alex Muniz',
  ],
  authors: [{ name: 'Alex Muniz' }],
  creator: 'Alex Muniz',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://virgilhawkins.com',
    siteName: 'Alex Muniz Portfolio',
    title: 'Alex Muniz | Senior Software Engineer',
    description:
    'Senior Software Engineer specialized in secure development, frontend, and cross-platform mobile apps using React, React Native, Flutter, TypeScript, and Laravel. Experienced in system modernization, DevOps, and cloud (AWS/Azure).',
    images: [
      {
        url: '/imgs/website.webp',
        width: 1200,
        height: 630,
        alt: 'Alex Muniz - Senior Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Muniz | Senior Software Engineer',
    description:
    'Senior Software Engineer specialized in secure development, frontend, and cross-platform mobile apps using React, React Native, Flutter, TypeScript, and Laravel. Experienced in system modernization, DevOps, and cloud (AWS/Azure).',
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
    canonical: 'https://virgilhawkins.com',
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
