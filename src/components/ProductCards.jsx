import { useState } from "react";
import currencyFormatter from 'currency-formatter';
import DetailCard from "./DetailCard";

const ProductCard = ({ product }) => {
  const [count, setCount] = useState(0);
  const [showDetail, setShowDetail] = useState(false);

  const increment = () => setCount((q) => q + 1);
  const decrement = () => setCount((q) => Math.max(0, q - 1));

  const handleCardClick = () => {
    setShowDetail(true);
  };

  if (showDetail) {
    return (
      <DetailCard
        cardData={{
          image: product.image,
          category: product.category,
          title: product.title,
          description: product.description,
          price: product.price,
        }}
        onClose={() => setShowDetail(false)}
      />
    );
  }

  return (
    <div
      onClick={handleCardClick}
      className=" max-w-[280px] flex  flex-col overflow-hidden box-border border-1 border-gray-400 rounded-3xl   bg-white shadow-sm transition-colors hover:border-blue-100 hover:shadow-md hover:scale-110 cursor-pointer"
    >
      <div className="flex h-36 items-center justify-center overflow-hidden ">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain p-3"
        />
      </div>

      <div className="flex flex-1 flex-col p-3 space-y-3">
        <span className="inline-block   px-3 py-1 text-xs font-medium text-gray-600">
          {product.category}
        </span>

        <h3 className="line-clamp-2 text-sm font-bold text-gray-900">
          {product.title}
        </h3>

        <p className="line-clamp-2 text-[12px] mt-[-12px] text-gray-600">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-[-8px]">
          <span className="text-lg font-bold text-blue-600">
            {currencyFormatter.format(product.price, { code: 'INR' })}
          </span>
        </div>

        {count === 0 ? (
          <button
            className="mt-auto w-full rounded-4xl bg-blue-500 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
            onClick={(e) => {
              e.stopPropagation();
              increment();
            }}
          >
            Add to Cart
          </button>
        ) : (
          <div className="mt-auto flex w-full items-center justify-between rounded-xl border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700">
            <button
              className="h-8 w-8 rounded-full border border-blue-300 bg-white text-blue-700 hover:bg-blue-100"
              onClick={(e) => {
                e.stopPropagation();
                decrement();
              }}
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="px-2 text-base">{count}</span>
            <button
              className="h-8 w-8 rounded-full border border-blue-300 bg-white text-blue-700 hover:bg-blue-100"
              onClick={(e) => {
                e.stopPropagation();
                increment();
              }}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
