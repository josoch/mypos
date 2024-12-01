import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { TopNav } from '@/components/layout/TopNav';
import { LeftSidebar } from '@/components/layout/LeftSidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Retail POS Dashboard',
  description: 'Modern Point of Sale System Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <TopNav />
          <div className="flex flex-1">
            <LeftSidebar />
            <main className="flex-1 bg-background p-8">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}