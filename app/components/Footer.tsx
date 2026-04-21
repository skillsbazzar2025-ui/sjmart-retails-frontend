export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-3">SJ Mart Retails</h3>
            <p className="text-gray-400 text-sm">Fresh food delivered with love.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-orange-500">Home</a></li>
              <li><a href="/products" className="hover:text-orange-500">Products</a></li>
              <li><a href="/about" className="hover:text-orange-500">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <p className="text-gray-400 text-sm">Email: support@sjmart.com</p>
            <p className="text-gray-400 text-sm">Phone: +91 12345 67890</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 pt-4 text-center text-gray-500 text-sm">
          © 2026 SJ Mart Retails. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
