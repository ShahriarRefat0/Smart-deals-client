//import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
//import useAxios from "../../hooks/useAxios";
import useAxiosSecure from "../../hooks/AxiosSecure";

//import { data } from "react-router";

const CreateProduct = () => {
  const { user } = useAuth()
  // const axiosInstance = useAxios()
  const axiosSecure = useAxiosSecure()

  const handleCreateProduct = (e) => {
    e.preventDefault();

    e.preventDefault();
    const title = e.target.title.value;
    const image = e.target.image.value;
    const price_min = e.target.price_min.value;
    const price_max = e.target.price_max.value;
    //console.log(title, image, price_max, price_min)

    const newProduct = {
      title,
      image,
      price_max,
      price_min,
      email: user.email,
      seller_name: user.displayName,
    };

    // axios.post("http://localhost:3000/products", newProduct)
    //   .then((data) => {
    //   console.log(data);
    //   if (data.data.insertedId) {
    //     Swal.fire({
    //       position: "top-end",
    //       icon: "success",
    //       title: "Your product has been created.",
    //       showConfirmButton: false,
    //       timer: 1500,
    //     });
    //   }
    // });

    //use instance

    // axiosInstance.post('/products', newProduct)
    //   .then(data => {
    //     console.log(data.data)
    //   });

    //use interceptor
    
    axiosSecure.post("/products", newProduct)
      .then((data) => {
      console.log('after secure call',data);
    });

  };

  return (
    <div>
      <form onSubmit={handleCreateProduct}>
        <fieldset className="fieldset">
          <label className="label">Product</label>
          <input type="text" name="title" className="input" />
          {/* email */}
          <label className="label">Photo Url</label>
          <input type="text" className="input" name="image" />
          {/* bid amount */}
          <label className="label">Min price</label>
          <input
            type="text"
            name="price_min"
            className="input"
            placeholder="min price"
          />

          <label className="label">Max price</label>
          <input
            type="text"
            name="price_max"
            className="input"
            placeholder="max price"
          />
          <button className="btn btn-neutral mt-4">Add product</button>
        </fieldset>
      </form>
    </div>
  );
};

export default CreateProduct;
