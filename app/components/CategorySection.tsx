export default function CategorySection() {
  const categories = [
    {
      name: "Diced Fruits & Vegetables",
      icon: "🥗",
      description: "Fresh cut, ready to cook",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Shakes & Juices",
      icon: "🥤",
      description: "Healthy & refreshing",
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Biryani Specialties",
      icon: "🍛",
      description: "Authentic flavors",
      color: "from-red-500 to-orange-600"
    }
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-orange-700 mb-2">Shop by Category</h2>
        <p className="text-center text-gray-500 mb-10">Find what you love</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="group cursor-pointer">
              <div className={`bg-gradient-to-br ${cat.color} rounded-xl p-6 text-white text-center shadow-md hover:shadow-xl transition transform hover:-translate-y-1`}>
                <div className="text-6xl mb-3">{cat.icon}</div>
                <h3 className="text-xl font-bold mb-1">{cat.name}</h3>
                <p className="text-white/80 text-sm">{cat.description}</p>
                <button className="mt-4 bg-white/20 hover:bg-white/30 rounded-full px-4 py-1 text-sm transition">Shop Now →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
