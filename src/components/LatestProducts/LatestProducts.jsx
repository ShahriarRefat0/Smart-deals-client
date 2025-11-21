import React from "react";
import Product from "../Product/product";
import { Link } from "react-router";

const LatestProducts = ({ latestProductsPromise }) => {
  const products = React.use(latestProductsPromise);

  return (
    <div className="py-15 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center">
        Recent <span className="text-primary">Products</span>
      </h2>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <Link
          to="/allProducts"
          className="btn btn-primary w-40 animate-glow hover:scale-105 transition-all duration-300"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default LatestProducts;
