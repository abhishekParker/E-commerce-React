import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useDispatch } from "react-redux";
import { addCartItem, fetchProductsData } from "../store/cartSlice";
import { useEffect } from "react";

const ProductDetail = () => {
  const products = useSelector((state) => state.cart.products);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  const addToCart = () => {
    dispatch(
      addCartItem({
        id: prod[0].id,
        title: prod[0].title,
        image: prod[0].image,
        price: prod[0].price,
        quantity: 1,
        perItemPrice: prod[0].price,
      })
    );
  };

  const prod = products.filter(({ id }) => id === parseInt(params.id));

  return (
    <>
      {prod.length > 0 && (
        <div className="w-full h-screen flex px-36 py-10 space-x-8 bg-gray-200 justify-center">
          <div className="px-20 py-10 border-[1px] border-gray-400 bg-white w-[30%] h-[70%] flex justify-center items-center shadow-xl">
            <img
              src={prod[0].image}
              alt={prod[0].title}
              className="object-cover hover:scale-150 duration-300"
            />
          </div>
          <div className="h-[70%] w-[40%] border-gray-300 p-6">
            <h3 className="text-lg font-medium pb-3">{prod[0].title}</h3>
            <p className="pb-3">
              {prod[0].description.length > 218
                ? prod[0].description.slice(0, 216) + "..."
                : prod[0].description}
              .
            </p>
            <div className="flex items-center space-x-3">
              <h1 className="text-3xl font-bold">${prod[0].price}</h1>
              <span className="text-md line-through">
                ${(prod[0].price * 1.5).toFixed(2)}
              </span>
              <span className="text-md text-green-600 font-medium">
                {Math.floor((prod[0].price / (prod[0].price * 1.5)) * 100)}%
              </span>
            </div>
            <div className="flex space-x-4 py-12">
              <button
                onClick={addToCart}
                className="px-6 py-2 bg-orange-500 text-white font-medium w-[50%] hover:bg-orange-400 duration-300"
              >
                <span>
                  <ShoppingCartIcon />
                </span>{" "}
                Add to Cart
              </button>
              <button className="px-6 py-2 bg-green-600 text-white font-medium w-[50%] hover:bg-green-500 duration-300">
                <span>
                  <LocalMallIcon />
                </span>{" "}
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
