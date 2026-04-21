export default function WhyChooseUs() {
  const features = [
    {
      icon: "🥬",
      title: "100% Fresh",
      desc: "Directly sourced from farms, delivered fresh daily."
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      desc: "Same-day delivery within 2 hours in selected areas."
    },
    {
      icon: "💰",
      title: "Best Prices",
      desc: "Member-only pricing & daily deals."
    }
  ]

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-orange-700 mb-2">Why Choose Us?</h2>
        <p className="text-center text-gray-500 mb-10">We make grocery shopping simple & reliable</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="text-center p-6 rounded-xl border border-orange-100 bg-orange-50 hover:shadow-lg transition">
              <div className="text-5xl mb-3">{f.icon}</div>
              <h3 className="text-xl font-semibold text-orange-700 mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
