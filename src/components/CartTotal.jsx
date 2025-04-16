import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  const cartAmount = Number(getCartAmount());

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      <div className="text-2xl font-semibold text-gray-800">
        <Title text1={"CART"} text2={"TOTAL"} />
      </div>
      <div className="flex flex-col gap-4 mt-4 text-sm text-gray-600">
        <div className="flex justify-between items-center border-b border-gray-300 pb-2">
          <p>Subtotal</p>
          <p className="font-semibold text-gray-900">
            {currency}
            {cartAmount}.00
          </p>
        </div>
        
        <div className="flex justify-between items-center border-b border-gray-300 pb-2">
          <p>Shipping Fee</p>
          <p className="font-semibold text-gray-900">
            {currency}
            {delivery_fee}
          </p>
        </div>
        
        <div className="flex justify-between items-center pt-2">
          <b className="text-lg">Total</b>
          <b className="text-lg text-indigo-600 font-semibold">
            {currency}
            {cartAmount === 0 ? "0" : cartAmount + delivery_fee}
          </b>
        </div>
      </div>
      
 
      <button className="w-full mt-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300 font-semibold">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartTotal;
