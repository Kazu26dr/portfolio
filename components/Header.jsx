import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-none fixed w-full">
      <Link href="/" className="flex items-center">
        <Image src="/headerlogo.svg" alt="logo" width={36} height={36} />
      </Link>
      <nav className="space-x-8">
        <Link href="/about" className="text-[#2E4F89] font-semibold transition hover:opacity-40">About</Link>
        <Link href="/app" className="text-[#2E4F89] font-semibold transition hover:opacity-40">App</Link>
      </nav>
    </header>
  );
} 