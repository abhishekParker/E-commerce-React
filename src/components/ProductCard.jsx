import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addCartItem } from "../store/cartSlice";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const productDetail = (id) => {
    navigate(`${location.pathname}/${id}`);
  };

  const addItemHandler = (title, image, price, id) => {
    dispatch(
      addCartItem({
        id,
        title,
        image,
        price,
        quantity: 1,
        perItemPrice: price,
      })
    );
  };
  return (
    <div
      onClick={() => productDetail(props.id)}
      className="flex flex-col h-full justify-center items-center bg-white space-y-3 p-2 border-[1px] border-black hover:scale-110 duration-300 cursor-pointer"
    >
      <img src={props.image} alt={props.id} className="h-28 py-3" />
      <h3 className="text-center break-words text-sm font-medium">
        {props.title}
      </h3>
      <p className="text-center text-orange-700 font-medium">${props.price}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          addItemHandler(props.title, props.image, props.price, props.id);
        }}
        className="px-2 py-1 border-2 border-black hover:bg-red-600 font-bold hover:border-red-600 duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
