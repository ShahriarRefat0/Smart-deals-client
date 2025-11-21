import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser().catch();
  };

  const links = (
    <>
      <li>
        <NavLink to="/"  >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allProducts"  >
          All Products
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/myProducts"  >
              My Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/myBids"  >My Bids</NavLink>
          </li>
          <li>
            <NavLink to="/createProduct"  >Create Product</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 max-w-7xl mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        {/* Glowing Logo */}
      <Logo></Logo>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn btn-primary animate-glow hover:scale-105 transition-all duration-300"
          >
            Sign Out
          </button>
        ) : (
          <Link
            to="/register"
            className="btn  btn-primary animate-glow hover:scale-105 transition-all duration-300"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
