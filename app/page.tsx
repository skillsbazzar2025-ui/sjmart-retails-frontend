export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-orange-50 rounded-xl p-8 text-center border border-orange-200">
        <h2 className="text-3xl font-semibold text-orange-700">Welcome to SJ Mart</h2>
        <p className="text-gray-600 mt-2">Your one-stop shop for fresh groceries</p>
        <button className="mt-6 bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-full transition">
          Shop Now
        </button>
      </div>
    </div>
  )
}
