import React, { useState } from 'react';
import products from '../assets/Produk.json';

export default function ProductSedap() {
  const [kodeProduk, setKodeProduk] = useState('');
  const [filteredProduct, setFilteredProduct] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearchChange = (event) => {
    setKodeProduk(event.target.value);
    setErrorMessage('');
    setFilteredProduct(null); // Reset filtered product when the search changes
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    // Validate the Kode Produk input
    if (kodeProduk.trim() === '') {
      setErrorMessage('Kode Produk tidak boleh kosong');
      return;
    }

    if (kodeProduk.length < 4) {
      setErrorMessage('Kode Produk minimal 4 karakter');
      return;
    }

    // Search for product by Kode Produk
    const product = products.find((p) => p.productID === kodeProduk);

    if (!product) {
      setErrorMessage('❌ Kode produk tidak ditemukan.');
      return;
    }

    // If product found, set the filtered product
    setFilteredProduct(product);
  };

  return (
    <div className="py-10 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Cek Ketersediaan Produk</h2>

        {/* Form Input for Kode Produk */}
        <form onSubmit={handleSearchSubmit} className="mb-6">
          <div className="flex flex-col sm:flex-row">
            <input
              type="text"
              value={kodeProduk}
              onChange={handleSearchChange}
              placeholder="Masukkan Kode Produk"
              className="w-full px-4 py-2 mb-4 sm:mb-0 sm:w bg-white border border-gray-300 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
        
          </div>
        </form>

        {/* Error Message */}
        {errorMessage && (
          <div className="mb-4 text-red-500 font-semibold">{errorMessage}</div>
        )}

        {/* Product Information */}
        {filteredProduct && (
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  ✅ Produk {filteredProduct.productName} tersedia dengan harga Rp{filteredProduct.harga}.
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  Stok tersedia: {filteredProduct.stock}
                </p>
              </div>
            </div>
            <div className="text-center text-xl text-gray-600 dark:text-gray-300">
              <img
                src={filteredProduct.image}
                alt={filteredProduct.productName}
                className="mx-auto w-32 h-32 object-cover rounded-md"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
