import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = ({ cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    setProduct(filterProduct[0]);
    const relatedProducts = items.filter(
      (p) => p.category === product.category
    );
    setRelatedProduct(relatedProducts);
    // console.log(filterProduct)
  }, [id, product.category]);

  return (
    <>
      <div className="container container-prod-details">
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>
        <div>
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">{product.price} ₹</button>
          <button className="btn btn-warning">Add to cart</button>
        </div>
      </div>

      <Product cart={cart} setCart={setCart} items={relatedProduct} />
    </>
  );
};

export default ProductDetail;
