import { useLocation, useNavigate, useParams } from "react-router-dom";
import currencyFormatter from "currency-formatter";

const DetailPage = () => {
  // const location = useLocation();
  // const navigate = useNavigate();
  //  const product = location.state?.product;

   const product = useLocation().state?.product;
   

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Product not found
          </h1>
          <button
            onClick={() => window.history.back()}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <button
          onClick={() => window.history.back()}
          className="mb-8 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-semibold"
        >
          ← Back to Products
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-8 p-8">
            {/* Image Section */}
            <div className="flex-1 flex items-center justify-center bg-gray-100 rounded-lg p-6">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-96 object-contain"
              />
            </div>

            {/* Details Section */}
            <div className="flex-1 flex flex-col justify-start space-y-6">
              <h1 className="text-4xl font-bold text-gray-900">
                {product.title}
              </h1>

              <div>
                <p className="text-gray-500 text-sm font-semibold uppercase">
                  Category
                </p>
                <span className="inline-block px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full mt-2">
                  {product.category}
                </span>
              </div>

              <div>
                <p className="text-gray-500 text-sm font-semibold uppercase">
                  Description
                </p>
                <p className="text-gray-700 text-base leading-relaxed mt-2">
                  {product.description}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm font-semibold uppercase">
                  Price
                </p>
                <p className="text-4xl font-bold text-blue-600 mt-2">
                  {currencyFormatter.format(product.price, { code: "INR" })}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm font-semibold uppercase">
                  Rating
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-2xl font-bold text-yellow-500">
                    ★ {product.rating?.rate || "N/A"}
                  </span>
                  <span className="text-gray-600">
                    ({product.rating?.count || 0} reviews)
                  </span>
                </div>
              </div>

              <button className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
