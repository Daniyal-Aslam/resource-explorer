import './globals.css';
import { ReactQueryClientProvider } from '@/lib/queryClient';
import Header from '@/components/layout/Header'; 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground"> 
          <ReactQueryClientProvider>
            <Header />
            <main className="container mx-auto px-4 py-6">{children}</main>
          </ReactQueryClientProvider> 
      </body>
    </html>
  );
}
