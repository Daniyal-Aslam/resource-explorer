import './globals.css';
import { ReactQueryClientProvider } from '@/lib/queryClient';
import Header from '@/components/layout/Header';
import { ThemeProvider } from '@/components/ThemeProvider'; // <-- add this
import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resource Explorer',
  description: 'Explore and manage resources efficiently',
  applicationName: 'Resource Explorer',
  keywords: ['Resource Explorer', 'Next.js', 'React Query', 'Tailwind'],
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider> 
          <ReactQueryClientProvider>
            <Header />
            <main className="container mx-auto px-4 py-6">{children}</main>
          </ReactQueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
