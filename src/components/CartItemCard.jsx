import React from "react";
import { useDispatch } from "react-redux";
import { addCartItem, removeCartItem } from "../store/cartSlice";

const CartItemCard = ({ id, image, title, price, quantity, perItemPrice }) => {
  const dispatch = useDispatch();

  const addItemCartHandler = () => {
    dispatch(addCartItem({ id, price, quantity: 1, perItemPrice }));
  };

  const removeItemCartHandler = () => {
    dispatch(
      removeCartItem({
        id,
        price,
        quantity,
        perItemPrice,
      })
    );
  };
  return (
    <div className="flex p-2 text-lg font-medium">
      <div className="flex basis-7/12 py-2">
        <img src={image} alt={title} className="h-[90px] w-[120px]" />
        <div className="flex justify-start items-center w-[60%] px-6">
          <h3 className="text-left">{title}</h3>
        </div>
      </div>
      <div className="basis-1/3 flex space justify-start w-[20%]">
        <div className="w-[33%] h-[70%] flex justify-center items-center">
          <button
            className="px-2 bg-gray-200 text-lg rounded-l hover:bg-gray-300"
            onClick={removeItemCartHandler}
          >
            <span className="font-medium">-</span>
          </button>
          <div className="px-2 bg-gray-200">{quantity}</div>
          <button
            className="px-2 bg-gray-200 text-lg rounded-r hover:bg-gray-300"
            onClick={addItemCartHandler}
          >
            <span className="font-medium">+</span>
          </button>
        </div>
      </div>

      <h4 className="basis-1/4 text-right py-5">${perItemPrice.toFixed(2)}</h4>
    </div>
  );
};

export default CartItemCard;
