import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'TW Downloader — Download Twitter & X Videos Free',
  description:
    'Download Twitter and X videos in HD quality (720p, 480p, 360p) for free. No sign-in required. Paste any tweet URL and get direct download links instantly.',
  keywords: ['twitter video downloader', 'x video downloader', 'download tweet video', 'save twitter video'],
  authors: [{ name: 'TW Downloader' }],
  robots: 'index, follow',
  openGraph: {
    title: 'TW Downloader — Download Twitter & X Videos Free',
    description: 'Download Twitter and X videos in HD quality for free. No sign-in required.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'TW Downloader — Download Twitter & X Videos Free',
    description: 'Download Twitter and X videos in HD quality for free. No sign-in required.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0e1a" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
