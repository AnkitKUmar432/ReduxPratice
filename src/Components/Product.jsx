// import React from "react";
// import { addItem } from "../redux/slices/cartSlice";
// import { useDispatch } from "react-redux";

// const Product = (props) => {
//   const dispatch = useDispatch();
//   return (
//     <div className="card" style={{ width: "18rem;", margin: "10px" }}>
//       <img className="card-img-top" src={props.image} alt={props.productName} />
//       <div className="card-body">
//         <h5 class="card-title">{props.productName}</h5>
//         <p class="card-text">Rs. {props.price}/-</p>
//         <button
//           onClick={(e) =>
//             dispatch(addItem({ name: props.productName, price: props.price }))
//           }
//           className="btn btn-primary"
//         >
//           Add to cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Product;


import React from "react";
import { addItem, clearCart, removeItem } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const Product = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="card" style={{ width: "18rem", margin: "10px" }}>
      <img className="card-img-top" src={props.image} alt={props.productName} />
      <div className="card-body">
        <h5 className="card-title">{props.productName}</h5>
        <p className="card-text">Rs. {props.price}/-</p>
        <button
          onClick={() =>
            dispatch(
              addItem({ id: props.id, name: props.productName, price: props.price })
            )
          }
          className="btn btn-primary m-1 p-2"
        >
          Add to Cart
        </button>
        <button
          onClick={() => dispatch(removeItem(props.id))}
          className="btn btn-warning m-1"
        >
          Remove Item
        </button>
        <button
          onClick={() => dispatch(clearCart())}
          className="btn btn-danger m-1"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
