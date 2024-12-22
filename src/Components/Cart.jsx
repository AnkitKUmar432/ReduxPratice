import React from "react";
import { useSelector } from "react-redux";
import { getItemsSelector } from "../redux/slices/cartSlice";

const Cart = () => {
  const items = useSelector(getItemsSelector);
  const total = items.length> 0 ? items.reduce((sum, item) => sum + item.price, 0): 0;
  return (
    <div className="alert alert-success">
      <h3 className="text-center">
        Total Items: {items.length} (Rs. {total})/-
      </h3>
      {items.length === 0 && (
        <p className="text-center text-muted">Your cart is empty. </p>
      )}
  
    </div>
  );
};

export default Cart;
