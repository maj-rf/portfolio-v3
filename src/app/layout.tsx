import type { Metadata } from 'next';
import { Titillium_Web } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header/Header';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { Footer } from '@/components/Footer';

const titillium = Titillium_Web({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '900'],
});

export const metadata: Metadata = {
  title: 'maj.dev',
  description: "Maj's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={titillium.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <Sidebar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
