import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Product from '../Product/product';

const AllProducts = () => {
    const  products  = useLoaderData()
    
    return (
      <div className="  bg-gray-100">
        <div className="py-15 max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center">
            Our All <span className="text-primary">Products</span>
          </h2>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    );
};

export default AllProducts;