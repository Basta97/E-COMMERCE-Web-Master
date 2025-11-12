import Image from "next/image";
import Link from "next/link";

// Simple mock product list for the grid (uses existing public images)
const products = [
  {
    id: 1,
    name: "USDA Choice Angus Beef Stew Meat",
    price: 49.99,
    oldPrice: 79.99,
    image: "/images/Trending.png",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Freshest Bakery Donuts",
    price: 9.99,
    oldPrice: 12.99,
    image: "/images/freshProduct.png",
    rating: 4.0,
  },
  {
    id: 3,
    name: "Bacola App Promo Pack",
    price: 19.99,
    oldPrice: 24.99,
    image: "/images/HotProductOffer.png",
    rating: 4.2,
  },
  {
    id: 4,
    name: "Assorted Beverages Pack",
    price: 14.49,
    oldPrice: 18.99,
    image: "/images/Trending.png",
    rating: 4.1,
  },
  {
    id: 5,
    name: "Organic Breakfast Cereal",
    price: 7.99,
    oldPrice: 10.99,
    image: "/images/freshProduct.png",
    rating: 4.3,
  },
  {
    id: 6,
    name: "Frozen Mixed Vegetables",
    price: 6.49,
    oldPrice: 8.49,
    image: "/images/Trending.png",
    rating: 4.0,
  },
];

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
        <ol className="list-reset flex">
          <li>
            <Link href="/" className="hover:text-teal-600">Home</Link>
          </li>
          <li className="mx-2">/</li>
          <li className="text-gray-700">Shop</li>
        </ol>
      </nav>

      {/* Banner */}
      <div className="w-full h-40 sm:h-52 md:h-64 bg-[#F3F5F9] rounded-md mb-6 flex items-center justify-between overflow-hidden">
        <div className="p-6">
          <p className="text-[#71778E] mb-1">Organic Meals Prepared</p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">Delivered to your Home</h2>
          <p className="text-sm text-gray-500 max-w-md">Discover groceries, bakery, meats, and everyday essentials at the best prices.</p>
        </div>
        <div className="hidden sm:block mr-4">
          <Image src="/images/HotProductOffer.png" width={260} height={160} alt="Shop banner" />
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-6 text-sm">
        <div className="text-gray-600">Showing {products.length} results</div>
        <div className="flex items-center gap-3">
          <label htmlFor="sorting" className="text-gray-600">Sort by:</label>
          <select id="sorting" className="border rounded-md px-3 py-2 text-gray-700">
            <option>Default</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-6">
          {/* Categories */}
          <section className="border rounded-md p-4">
            <h3 className="font-semibold mb-3">Product Categories</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center justify-between"><span>Beverages</span><span className="text-gray-400">12</span></li>
              <li className="flex items-center justify-between"><span>Biscuits & Snacks</span><span className="text-gray-400">8</span></li>
              <li className="flex items-center justify-between"><span>Breads & Bakery</span><span className="text-gray-400">6</span></li>
              <li className="flex items-center justify-between"><span>Breakfast & Dairy</span><span className="text-gray-400">10</span></li>
              <li className="flex items-center justify-between"><span>Frozen Foods</span><span className="text-gray-400">7</span></li>
            </ul>
          </section>

          {/* Brands */}
          <section className="border rounded-md p-4">
            <h3 className="font-semibold mb-3">Brands</h3>
            <div className="space-y-2 text-sm text-gray-700">
              {[
                "Kroger",
                "Great Value",
                "Whole Farm",
                "Green Leaf",
                "Daily Fresh",
              ].map((b) => (
                <label key={b} className="flex items-center gap-2">
                  <input type="checkbox" className="accent-teal-600" />
                  <span>{b}</span>
                </label>
              ))}
            </div>
          </section>

          {/* Price Filter (static) */}
          <section className="border rounded-md p-4">
            <h3 className="font-semibold mb-3">Price</h3>
            <input type="range" min={0} max={100} defaultValue={50} className="w-full" />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>$0</span>
              <span>$100</span>
            </div>
          </section>

          {/* Promo */}
          <section className="border rounded-md p-0 overflow-hidden">
            <Image src="/images/HotProductOffer.png" alt="Promo" width={420} height={560} className="w-full h-auto" />
          </section>
        </aside>

        {/* Product Grid */}
        <main className="lg:col-span-3">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
            {products.map((p) => (
              <div key={p.id} className="group border rounded-md p-3 hover:shadow-sm transition">
                <div className="relative w-full aspect-square mb-3 bg-white">
                  <Image src={p.image} alt={p.name} fill className="object-contain p-4" />
                </div>
                <h4 className="text-sm font-medium text-gray-800 line-clamp-2 min-h-[40px]">{p.name}</h4>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-teal-600 font-semibold">${p.price.toFixed(2)}</span>
                  <span className="text-gray-400 line-through text-xs">${p.oldPrice.toFixed(2)}</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <button className="text-xs bg-teal-500 text-white px-3 py-2 rounded hover:bg-teal-600">Add to Cart</button>
                  <Link href={`/products/${p.id}`} className="text-xs text-teal-600 hover:underline">Details</Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination (static) */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {[1,2,3,4].map((i) => (
              <button key={i} className={`h-8 w-8 rounded-sm border text-sm ${i===1 ? 'bg-teal-500 text-white border-teal-500' : 'hover:border-teal-500 hover:text-teal-600'}`}>{i}</button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
