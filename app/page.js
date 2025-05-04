import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";
import icon from "../assets/icon.png";
import app from "../assets/app.png";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* ロゴセクション */}
      <section className="flex flex-col items-center justify-center h-screen">
        <Image
          src={logo}
          alt="ロゴ"
          width={240}
          height={240}
          priority
          className="mb-8"
        />
      </section>

      {/* Aboutセクション */}
      <section id="about" className="max-w-2xl mx-auto py-24 px-4">
        <h2 className="text-5xl font-bold mb-12">About</h2>
        <div className="flex pr-5">
          <div className="pr-5">
            <Image
              src={icon}
              alt="ロゴ"
              width={240}
              height={240}
              priority
              className="mr-8"
            />
          </div>
          <div>
            <p className="mb-2">
              フロントエンドエンジニアとして活動しています。
            </p>
            <Link href="/about" className="text-[#2E4F89] hover:underline">
              もっと見る →
            </Link>
          </div>
        </div>
      </section>

      {/* appセクション */}
      <section id="works" className="max-w-2xl mx-auto py-24 px-4">
        <h2 className="text-5xl font-bold mb-12">App</h2>
        <div className="flex">
          <div className="pr-5">
            <Image
              src={app}
              alt="ロゴ"
              width={240}
              height={240}
              priority
              className="mr-8"
            />
          </div>
          <div>
            <p className="mb-2">これまで作成したアプリを紹介します。</p>
            <Link href="/app" className="text-[#2E4F89] hover:underline">
              もっと見る →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
