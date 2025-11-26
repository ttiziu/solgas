import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NavigationLoader from '@/components/NavigationLoader';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Solgas - Gas confiable para tu hogar y empresa',
  description: 'Entrega rápida, segura y al mejor precio en todo el país.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <NavigationLoader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

