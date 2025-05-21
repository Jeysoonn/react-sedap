import React from "react";
import bgImage from "../assets/AboutSedap.jpg";

export default function AboutSedap() {
  return (
    <div className="font-poppins bg-gray-50 py-10">
      {/* Breadcrumb */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-poppins-extrabold text-gray-800">About</h2>
        <p className="text-gray-500 mt-2">Home / About</p>
      </div>

      {/* Container */}
      <div className="max-w-screen-lg mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column - Profile & Bio */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <div
            className="w-full h-[300px] rounded-lg mb-6"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          
          <p className="font-poppins-regular text-gray-700 mb-4">
            Selamat datang di Sedap, tempat di mana setiap suapan membawa Anda dalam 
            perjalanan rasa yang tak terlupakan. Kami menggabungkan cita rasa lokal yang 
            autentik dengan sentuhan inovatif, menciptakan pengalaman kuliner yang tak hanya 
            memanjakan lidah, tetapi juga menggugah selera.
          </p>
          <p className="text-gray-700 mb-4">
            Dari hidangan klasik yang penuh kenangan hingga kreasi baru yang penuh kejutan, 
            Sedap menyajikan menu yang dirancang khusus untuk setiap pencinta makanan. Dapatkan 
            sensasi baru dengan setiap gigitan, apakah itu nasi goreng spesial dengan bumbu rahasia, 
            sate yang sempurna dibakar, atau hidangan penutup yang manis menggoda.
          </p>
          <p className="text-gray-700 mb-4">
            Dengan suasana yang hangat dan ramah, Sedap adalah tempat yang tepat untuk berkumpul 
            bersama teman, keluarga, atau pasangan. Kami juga menawarkan layanan yang cepat dan 
            menyenangkan, memastikan Anda merasa seperti di rumah.
          </p>
          <p className="text-gray-700">
            Tidak hanya soal makanan, tetapi juga pengalaman – di Sedap, Anda tidak hanya makan, 
            Anda merayakan setiap momen. Datang dan rasakan kenikmatan yang tak ada duanya. Ayo, 
            beri lidah Anda sebuah petualangan, karena di Sedap, segala sesuatunya terasa lebih enak!
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[
              "facebook",
              "twitter",
              "instagram",
              "pinterest",
              "youtube",
              "email",
            ].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-gray-500 hover:text-blue-500 transition"
              >
                <i className={`fab fa-${platform}`} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Column - Info Cards */}
        <div className="flex flex-col gap-6">
          {/* Info Box */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-poppins text-gray-800 text-lg mb-2">Katen.</h4>
            <p className="text-gray-600 text-sm">
              Halo, kami dari Restoran Sedap, tempat di mana setiap hidangan dibuat 
              dengan penuh cinta dan bahan-bahan berkualitas. Kami mengundang Anda untuk 
              menikmati cita rasa yang menggugah selera, dari hidangan khas yang sudah terkenal 
              hingga kreasi baru yang memanjakan lidah.
            </p>
            
          </div>

          {/* Popular Posts */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-gray-800 mb-4">Popular Posts</h4>
            {[
              {
                title: "Lorem ipsum dolor sit amet",
                date: "29 March 2021",
              },
              {
                title: "Lorem ipsum dolor sit amet",
                date: "29 March 2021",
              },
              {
                title: "Lorem ipsum dolor sit amet",
                date: "29 March 2021",
              },
            ].map((post, index) => (
              <div key={index} className="mb-4">
                <h5 className="font-semibold text-sm text-gray-700">
                  {index + 1}. {post.title}
                </h5>
                <p className="text-xs text-gray-500">{post.date}</p>
              </div>
            ))}
          </div>

          {/* Explore Topics */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-gray-800 mb-4">Explore Topics</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex justify-between">
                <span>Makanan</span>
                <span>(5)</span>
              </li>
              <li className="flex justify-between">
                <span>Minuman</span>
                <span>(2)</span>
              </li>
              <li className="flex justify-between">
                <span>Lauk</span>
                <span>(3)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
