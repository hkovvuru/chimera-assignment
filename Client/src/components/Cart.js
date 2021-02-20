import React, { Fragment } from "react";

export const Cart = ({ cart, placeOrderItem, deleteItem }) => {
  console.log("cart", cart);

  const cartDisplay = cart.map(item => {
    const { id, device } = item;
    return (
      <Fragment key={id}>
        <div className="cart-list">
          <div className="cart-items">
            <h4>
              <strong>{device}</strong>
            </h4>
            <button
              className="place order"
              type="submit"
              onClick={() => deleteItem(item)}
            >
              Delete Item
            </button>

            <button
              className="place order"
              type="submit"
              onClick={() => placeOrderItem(item)}
            >
              Place Order
            </button>
          </div>
        </div>
      </Fragment>
    );
  });
  return <div className="cart">{cartDisplay}</div>;
};
