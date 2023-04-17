import React from "react";
import { useSelector } from "react-redux";
import CartItemCard from "../components/CartItemCard";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  return cartItems.length ? (
    <div className="w-full h-full p-8">
      <h2 className="text-3xl font-bold pb-4 text-center">Shopping Cart</h2>
      <div className="flex p-2 bg-red-500 text-white justify-center items-center font-bold">
        <h4 className="basis-7/12">Product</h4>
        <h4 className="basis-[30%]">Quantity</h4>
        <h4 className="basis-1/4 text-right">Subtotal</h4>
      </div>

      <div className="w-[full] h[full] p-4 border-b-2 border-gray-500">
        {cartItems.map(
          ({ id, title, image, price, quantity, perItemPrice, thumbnail }) => (
            <CartItemCard
              key={id}
              id={id}
              title={title}
              image={image}
              thumbnail={thumbnail}
              price={price}
              quantity={quantity}
              perItemPrice={perItemPrice}
            />
          )
        )}
      </div>
      <div className="w-[20%] mx-auto p-6 text-lg font-bold">
        <div className="w-full flex justify-between">
          <p>Subtotal</p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-center p-6">
          <button className="px-3 rounded-md py-1 border-2 bg-red-600 font-medium border-red-600 text-white whitespace-nowrap hover:border-red-500 hover:bg-red-500 duration-300">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full h-screen flex justify-center items-center">
      <h2 className="text-3xl font-bold pb-4 text-center">
        Shopping Cart is Empty...
      </h2>
    </div>
  );
};

export default Cart;
