import { Search } from "lucide-react";

export default function Header({ setSearchQuery, setSortOption }) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:gap-4">
        <div className="shrink-0 text-xl font-semibold text-gray-900">
          Products
        </div>

        <form className="relative w-full md:flex-1"  >
          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
            <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
          <input
            type="search"
            placeholder="Search products, brands, categories"
            className="w-full rounded-full border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm text-gray-900 shadow-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

        <div className="flex w-full flex-col gap-2 text-sm text-gray-800 md:w-auto md:flex-row md:items-center md:gap-3">
          <label className="flex w-full items-center gap-2 md:w-48">
            <span className="shrink-0 text-gray-500">Category</span>
            <select
              className="w-full rounded-full border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500"
               
              onChange={(e) => setSearchQuery(e.target.value)}
            >
              <option value="">All</option>
              <option value="men's clothing">men's clothing</option>
              <option value="jewelery">jewelery</option>
              <option value="electronics">electronics</option>
              <option value="women's clothing">women's clothing</option>
            </select>
          </label>

          <label className="flex w-full items-center gap-2 md:w-48">
            <span className="shrink-0 text-gray-500">Sort</span>
            <select
              className="w-full rounded-full border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500"
              defaultValue=""
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">All</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="title-asc">Title: A to Z</option>
              <option value="title-desc">Title: Z to A</option>
            </select>
          </label>
        </div>
        
      </div>
    </header>
  );
}
