import { useEffect, useState } from "react";
import ProductCard from "./ProductCards.jsx";

export default function Products({ searchQuery, sortOption ,count,setCount}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        setProducts(data);
      } catch (err) {
        console.error("Error fetching products", err);
      }
    };
    fetchProducts();
  }, []);

  const filtered = products.filter((el) => el.category.toLowerCase().includes(searchQuery.toLowerCase()))
 
  const sorted = [...filtered].sort((a, b) => {
    switch (sortOption) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
        case  "title-asc":
        return a.title.localeCompare(b.title);
        case  "title-desc":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div  className="mx-auto max-w-7xl">
        <div  className="grid justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sorted.map((product) => (
            <ProductCard key={product.id} product={product} count={count} setCount={setCount} />
          ))}
        </div>
      </div>
    </div>
  );
}
