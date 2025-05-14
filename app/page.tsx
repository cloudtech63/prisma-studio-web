export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        // 測試 Vercel 部署
          Prisma Studio 網頁版
        </h1>
        <div className="space-y-4">
          <p className="text-gray-600 text-center">
            這是一個簡單的網頁界面，用於展示 Prisma Studio 的相關信息。
          </p>
          <div className="bg-blue-50 p-4 rounded-md">
            <h2 className="text-lg font-semibold text-blue-800 mb-2">
              如何使用 Prisma Studio
            </h2>
            <ol className="list-decimal list-inside text-blue-700 space-y-2">
              <li>在本地終端機中執行 <code className="bg-blue-100 px-1 rounded">npx prisma studio</code></li>
              <li>在瀏覽器中打開 <code className="bg-blue-100 px-1 rounded">http://localhost:5555</code></li>
              <li>開始管理您的資料庫</li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  )
} 