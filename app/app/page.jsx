export default function AppPage() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <section></section>
      <section>
        <h1 className="text-3xl font-bold mb-8 text-center">Works / App</h1>
        <p className="mb-12 text-center text-gray-600">
          これまで作成したアプリを紹介します。画像やリンクは後ほど追加できます。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* サンプルカード1 */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center transition hover:shadow-lg">
            <div className="w-28 h-28 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-400 text-lg">
              画像
            </div>
            <div className="font-semibold mb-1 text-lg">アプリ名</div>
            <div className="text-gray-500 text-sm mb-4 text-center">
              アプリの簡単な説明が入ります。
            </div>
            <a href="#" className="text-blue-600 hover:underline font-medium">
              詳細を見る
            </a>
          </div>
          {/* サンプルカード2 */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center opacity-60">
            <div className="w-28 h-28 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-300 text-lg">
              追加予定
            </div>
          </div>
          {/* サンプルカード3 */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center opacity-30">
            <div className="w-28 h-28 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-200 text-lg">
              追加予定
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
