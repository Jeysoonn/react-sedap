import React from "react";
import ProductData from "../assets/Produk.json";
import ReviewData from "../assets/Ulasan.json";
import bgImage from "../assets/Hero.png";

export default function LandingPageSedap() {
  return (
    <div className="py-10 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 mb-10">
          {/* Hero Section */}
          <div className="relative w-full md:w-2/3 rounded-2xl overflow-hidden shadow-lg">
            <div
              className="w-full h-[600px] object-cover"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <span className="bg-orange-500 text-xs px-3 py-1 rounded-full font-semibold">
                  Inspiration
                </span>
                <h2 className="font-poppins-extrabold text-4xl font-bold mt-3">
                  Restoran Sedap - Rasakan Kemurniannya
                </h2>
                <div className="mt-2 text-sm text-gray-300">
                  Katen Doe · 29 March 2021
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Produk */}
          <div className="w-full md:w-1/3">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold mb-4">Produk Kami</h3>
              <div className="space-y-4">
                {ProductData.map((product) => (
                  <div
                    key={product.productID}
                    className="p-4 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 flex items-center gap-4"
                  >
                    <img
                      src={product.image}
                      alt={product.productName}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {product.productName}
                      </h5>
                      <p className="text-sm text-gray-700 dark:text-gray-400">
                        Harga: {product.harga}
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-400">
                        Stok: {product.stock}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 mb-10">
          <p className="text-center text-xs text-gray-400 mb-2">
            – SPONSORED AD –
          </p>
          <div className="flex items-center justify-between bg-gradient-to-r from-orange-400 to-white rounded-lg shadow-md p-6 overflow-hidden">
            <div className="flex-1">
              <span className="text-2xl font-semibold whitespace-nowrap text-white font-poppins-extrabold">
                Sedap<b className="text-orange-700">.</b>
              </span>
              <p className="text-sm text-white mt-1">
                Promo Makanan Terbaik Hari Ini. Coba Sekarang!
              </p>
            </div>
            <div
              
              className="w-48 h-auto rounded-md shadow-md ml-4"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                }}  
              >
            </div>
          </div>
        </div>
        {/* Section Ulasan */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Apa Kata Mereka?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {ReviewData.map((review) => (
              <div
                key={review.id}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 dark:text-white">
                      {review.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Verified Buyer
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {review.review}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
