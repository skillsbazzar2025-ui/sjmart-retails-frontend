import WhyChooseUs from "./components/WhyChooseUs"
import CategorySection from "./components/CategorySection"

export default function Home() {
  return (
    <>
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fresh Groceries,</h1>
          <p className="text-xl mb-6">Delivered to your doorstep</p>
          <button className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* Category Section */}
      <CategorySection />

      {/* Why Choose Us Section */}
      <WhyChooseUs />
    </>
  )
}
