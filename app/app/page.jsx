import Image from "next/image";
import ec from "../../assets/app/ec.png";
import blog from "../../assets/app/blog.png";
import food from "../../assets/app/food.png";
import tiping from "../../assets/app/tiping.png";
import shooting from "../../assets/app/shooting.png";

export default function AppPage() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <section></section>
      <section>
        <h1 className="text-3xl font-bold mb-8 text-center">Works / App</h1>
        <p className="mb-12 text-center text-gray-600">
          これまで作成したアプリを紹介します。画像をクリックするとアプリを見ることができます。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* サンプルカード1 */}
          <a href="https://ec-app-e2d79.web.app/signin" className="transition duration-700 ease-in-out">
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center transition hover:shadow-lg">
              <Image
                src={ec}
                alt="ロゴ"
                width={200}
                height={240}
                priority
                className="mb-8 animate-fadeIn"
              />
              <div className="font-semibold mb-1 text-lg">ECアプリ</div>
              <div className="text-gray-500 text-sm mb-4 text-center">
                アプリの簡単な説明が入ります。
              </div>
            </div>
          </a>
          <a
            href="https://next-blog-pi-drab.vercel.app/"
            className="font-medium"
          >
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center transition hover:shadow-lg">
              <Image
                src={blog}
                alt="ロゴ"
                width={180}
                height={240}
                priority
                className="mb-8 animate-fadeIn"
              />
              <div className="font-semibold mb-1 text-lg">ブログ</div>
              <div className="text-gray-500 text-sm mb-4 text-center">
                アプリの簡単な説明が入ります。
              </div>
            </div>
          </a>
          <a
            href="https://sprightly-monstera-1df53a.netlify.app/"
            className="font-medium"
          >
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center transition hover:shadow-lg">
              <Image
                src={food}
                alt="ロゴ"
                width={210}
                height={240}
                priority
                className="mb-8 animate-fadeIn"
              />
              <div className="font-semibold mb-1 text-lg">フード</div>
              <div className="text-gray-500 text-sm mb-4 text-center">
                アプリの簡単な説明が入ります。
              </div>
            </div>
          </a>
          <a href="https://tipingpractice.netlify.app/" className="font-medium">
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center transition hover:shadow-lg">
              <Image
                src={tiping}
                alt="ロゴ"
                width={230}
                height={240}
                priority
                className="mb-8 animate-fadeIn"
              />
              <div className="font-semibold mb-1 text-lg">タイピング</div>
              <div className="text-gray-500 text-sm mb-4 text-center">
                アプリの簡単な説明が入ります。
              </div>
            </div>
          </a>

          <a href="" className="font-medium">
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center transition hover:shadow-lg">
              <Image
                src={shooting}
                alt="ロゴ"
                width={200}
                height={240}
                priority
                className="mb-8 animate-fadeIn"
              />
              <div className="font-semibold mb-1 text-lg">シューティング</div>
              <div className="text-gray-500 text-sm mb-4 text-center">
                アプリの簡単な説明が入ります。
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
