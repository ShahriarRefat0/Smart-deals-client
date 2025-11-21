import { Link } from "react-router";
import { FaXTwitter, FaLinkedin, FaFacebookF, FaLocationDot } from "react-icons/fa6";
import { IoIosCall, IoIosMail } from "react-icons/io";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-[#051A2E] text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <Logo></Logo>
          <p className="text-gray-400 leading-relaxed">
            Your trusted marketplace for authentic local products. Discover the
            best deals from across Bangladesh.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/allProducts"
                className="hover:text-primary duration-300"
              >
                All Products
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-primary duration-300">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-primary duration-300">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-primary duration-300">
                Register
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li>
              <Link className="hover:text-primary duration-300">
                Electronics
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary duration-300">Fashion</Link>
            </li>
            <li>
              <Link className="hover:text-primary duration-300">
                Home & Living
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary duration-300">Groceries</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact & Support</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <IoIosMail />
              <span>support@Smartdeals.com</span>
            </li>
            <li className="flex items-center gap-3">
              <IoIosCall /> <span>+880 123 456 789</span>
            </li>
            <li className="flex items-center gap-3">
              <FaLocationDot />{" "}
              <span>123 Commerce Street, Dhaka, Bangladesh</span>
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-4">
            <a className="bg-white/10 p-2 rounded-full hover:bg-primary duration-300 cursor-pointer">
              <FaXTwitter />
            </a>
            <a className="bg-white/10 p-2 rounded-full hover:bg-primary duration-300 cursor-pointer">
              <FaLinkedin />
            </a>
            <a className="bg-white/10 p-2 rounded-full hover:bg-primary duration-300 cursor-pointer">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <hr className="border-gray-700 my-8" />
      <p className="text-center text-gray-500">
        © 2025 SmartDeals. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
