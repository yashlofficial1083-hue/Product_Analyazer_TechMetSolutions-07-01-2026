import currencyFormatter from 'currency-formatter';

const DetailCard = ({ cardData, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg shadow-2xl w-11/12 max-w-5xl max-h-screen overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-400 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-600 font-bold text-lg z-10"
        >
          ✕
        </button>

        <div className="flex p-8 gap-8">
          <div className="flex-1 flex items-center justify-center bg-gray-100 rounded-lg p-6">
            <img
              src={cardData.image}
              alt={cardData.title}
              className="w-full h-96 object-contain"
            />
          </div>

          <div className="flex-1 flex flex-col justify-start space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">
              {cardData.title}
            </h1>

            <div>
              <p className="text-gray-500 text-sm font-semibold uppercase">
                Category
              </p>
              <span className="inline-block px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full mt-2">
                {cardData.category}
              </span>
            </div>

            <div>
              <p className="text-gray-500 text-sm font-semibold uppercase">
                Description
              </p>
              <p className="text-gray-700 text-base leading-relaxed mt-2">
                {cardData.description}
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-sm font-semibold uppercase">
                Price
              </p>
              <p className="text-4xl font-bold text-blue-600 mt-2">
                {currencyFormatter.format(cardData.price, { code: 'INR' })}
              </p>
            </div>

            <div className="flex gap-4 mt-8">
              <button className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
