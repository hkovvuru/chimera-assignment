import React, { Fragment } from "react";

function OrderHistory({ placedDevices }) {
  const orderedItems = placedDevices.map(item => {
    const { id, device, lastCheckedOutDate, lastCheckedOutBy= 'Hussain' } = item;
    return (
      <Fragment key={id}>
        <div className="history-items">
          <span className="orderNow">
            <strong>Device:</strong> {device}
          </span>
          <p className="orderNow">
            <strong>Ordered On: </strong> {lastCheckedOutDate}
          </p>
          <p className="orderNow">
            <strong>Ordered By: </strong> {lastCheckedOutBy}
          </p>
        </div>
      </Fragment>
    );
  });
  return <div className="history">{orderedItems}</div>;
}

export default OrderHistory;
