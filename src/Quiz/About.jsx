import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 py-10">
      {/* Breadcrumb */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">About</h2>
        <p className="text-gray-500 mt-2">Home / About</p>
      </div>

      {/* Container */}
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column - Profile & Bio */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <img
            src="/path-to-your-local-image.jpg"
            alt="Author"
            className="w-full h-auto rounded-lg mb-6 object-cover"
          />
          <p className="text-gray-700 mb-4">
            Hello, I'm a content writer who is fascinated by content fashion, celebrity and lifestyle. She helps clients bring the right content to the right people.
          </p>
          <p className="text-gray-700 mb-4">
            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
          </p>
          <p className="text-gray-700 mb-4">
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
          </p>
          <p className="text-gray-700">
            The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {["facebook", "twitter", "instagram", "pinterest", "youtube", "email"].map((platform) => (
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
            <h4 className="font-bold text-gray-800 text-lg mb-2">Katen.</h4>
            <p className="text-gray-600 text-sm">
              Hello, We’re content writer who is fascinated by content fashion, celebrity and lifestyle. We helps clients bring the right content to the right people.
            </p>
            <div className="flex gap-3 mt-4">
              {["facebook", "twitter", "instagram", "pinterest", "youtube", "email"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition"
                >
                  <i className={`fab fa-${platform}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Popular Posts */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-gray-800 mb-4">Popular Posts</h4>
            {[
              {
                title: "3 Easy Ways To Make Your iPhone Faster",
                date: "29 March 2021",
              },
              {
                title: "An Incredibly Easy Method That Works For All",
                date: "29 March 2021",
              },
              {
                title: "10 Ways To Immediately Start Selling Furniture",
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
                <span>Lifestyle</span>
                <span>(5)</span>
              </li>
              <li className="flex justify-between">
                <span>Inspiration</span>
                <span>(2)</span>
              </li>
              <li className="flex justify-between">
                <span>Fashion</span>
                <span>(3)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
