import Link from 'next/link';
import Image from 'next/image';
import Header from './Header';
import Footer from './Footer';

const currentYear = new Date().getFullYear();

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
}
