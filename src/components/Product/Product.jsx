import React from "react";
import { Link } from "react-router";

const Product = ({ product }) => {
  const { _id, title, price_min, price_max, image } = product;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="px-4 pt-4 h-60 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          Price: ${price_min} - {price_max}
        </p>
        <div className="card-actions  ">
          <Link
            to={`/productDetails/${_id}`}
            className="btn btn-primary w-full animate-glow hover:scale-105 transition-all duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
