import React, { Fragment } from "react";
const MainDisplay = props => {
  const { store, addToCart, removeDevice } = props;
  const data = store.map(item => {
    const { id, device } = item;
    return (
      <Fragment key={id}>
        <div className="list-items">
          <h3>{device}</h3>
          <hr />
          <button
            className="addToCart"
            type="submit"
            onClick={() => addToCart(item)}
          >
            AddToCart (+)
          </button>
          <button
            className="remove"
            type="submit"
            onClick={() => removeDevice(item)}
          >
            Remove (-)
          </button>
        </div>
      </Fragment>
    );
  });
  return <div className="list">{data}</div>;
};

export default MainDisplay;
