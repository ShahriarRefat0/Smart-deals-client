import { Link } from "react-router";
import { FaSearch } from "react-icons/fa";

const HeroBanner = () => {
  return (
    <div className="w-full bg-gradient-to-br from-pink-100 via-purple-100 to-cyan-100 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">
          Deal Your <span className="text-purple-500">Products</span>
          <br />
          In A <span className="text-purple-500">Smart</span> Way !
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-gray-600 text-base md:text-lg">
          SmartDeals helps you sell, resell, and shop from trusted local sellers
          — all in one place!
        </p>

        {/* Search Box */}
        <div className="mt-8 flex items-center justify-center">
          <div className="bg-white shadow-md rounded-full flex items-center w-full max-w-xl overflow-hidden">
            <input
              type="text"
              placeholder="Search for Products, Categories..."
              className="flex-1 px-5 py-3 outline-none text-gray-600"
            />
            <button className="px-6 py-3 text-white rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:brightness-110 transition">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/allProducts"
            className="px-6 py-3 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition"
          >
            Watch All Products
          </Link>

          <Link
            to="/createProduct"
            className="px-6 py-3 border border-purple-500 text-purple-500 rounded-lg shadow hover:bg-purple-500 hover:text-white transition"
          >
            Post a Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
