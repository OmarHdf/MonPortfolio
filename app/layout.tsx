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
  metadataBase: new URL('https://omar-elhedfi.vercel.app'),
  title: {
    default:
      'Omar El Hedfi | DevSecOps Engineer | CI/CD & Cloud Expert',
    template: '%s | Omar El Hedfi',
  },
  description:
    'DevSecOps engineer specialized in secure CI/CD pipelines, containerization (Docker/Kubernetes), and cloud infrastructures (AWS/Azure). Experienced in monitoring, performance optimization, and modern software delivery.',
  keywords: [
    'DevSecOps',
    'CI/CD',
    'Cloud Infrastructure',
    'Secure Development',
    'Docker',
    'Kubernetes',
    'Jenkins',
    'SonarQube',
    'OWASP ZAP',
    'Trivy',
    'Hadolint',
    'Dockle',
    'AWS',
    'Azure',
    'Linux',
    'Performance Optimization',
    'Monitoring',
    'Omar El Hedfi',
  ],
  authors: [{ name: 'Omar El Hedfi' }],
  creator: 'Omar El Hedfi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://omar-elhedfi.com',
    siteName: 'Omar El Hedfi Portfolio',
    title: 'Omar El Hedfi | DevSecOps Engineer',
    description:
      'DevSecOps engineer specialized in secure CI/CD pipelines, containerization (Docker/Kubernetes), and cloud infrastructures (AWS/Azure). Experienced in monitoring, performance optimization, and modern software delivery.',
    images: [
      {
        url: '/imgs/website.webp',
        width: 1200,
        height: 630,
        alt: 'Omar El Hedfi - DevSecOps Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omar El Hedfi | DevSecOps Engineer',
    description:
      'DevSecOps engineer specialized in secure CI/CD pipelines, containerization (Docker/Kubernetes), and cloud infrastructures (AWS/Azure). Experienced in monitoring, performance optimization, and modern software delivery.',
    images: ['/imgs/website.webp'],
    creator: '@omar_elhedfi',
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
    canonical: 'https://omar-elhedfi.com',
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
