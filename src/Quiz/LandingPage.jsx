import Navbar from "./NavbarSedap.jsx";
import Footer from "./Footer.jsx";
import ProductData from "./assets/Produk.json";
import React from "react";
export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Tabel untuk menampilkan daftar pelanggan */}
        
        {ProductData.map((product) => (
      <div
          key = {product.productID}
          class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            
          </h5>
          
          <p class="font-poppins-extrabold text-gray-700 dark:text-gray-400">
          {product.productName}
          </p>
          <p class="font-poppins-extrabold text-gray-700 dark:text-gray-400">
          {product.harga}
          </p>
          <p class="font-poppins-extrabold text-gray-700 dark:text-gray-400">
          {product.stock}
          </p>
        </div>
    ))}

        
        <button className="bg-hijau text-white px-4 py-2 rounded-lg">
          Cek Ketersediaan Produk
        </button>
      </div>
      
      <Footer />
    </div>
  );
}
