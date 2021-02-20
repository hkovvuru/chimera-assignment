import React, { useState, useEffect } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import "./App.css";
import { AddDevice } from "./components/AddDevice";
import { Cart } from "./components/Cart";
//import { storageData } from "./components/Assets";
import MainDisplay from "./components/MainDisplay";
import OrderHistory from "./components/OrderHistory";
import * as api from './api/index';

function App(props) {
  const [store, setStore] = useState(() => []);
  const [cart, addCart] = useState(() => []);
  const [placedDevices, setPlacesDevices] = useState(() => []);

  const [data, setData] = useState(() => { });

  useEffect(() => {
    api.fetchMobiles()
      .then(data => {
        setStore(data.data);
      })
  }, [])

  const setFields = e => {
    setData(prevState => ({
      ...prevState,
      id: Math.floor(Math.random() * 1000 + 10),
      [e.target.name]: e.target.value
    }));
  };

  const addDeviceData = e => {
    e.preventDefault();
    setStore(prevState => [...prevState, data]);
    setData({});
    api.createNewMobileInfo(data);
    props.history.push("/");
  };

  const addToCart = data => {
    if (cart.length > 9) {
      alert("Maximum limit exceed 10");
    } else {
      const newData = { 
        ...data, 
        id: Math.floor(Math.random() * 1000 + 10),
      };
      addCart([...cart, newData]);
    }
  };

  const removeItem = data => {
    const modifiedList = store.filter(item => {
      if (item.id !== data.id) {
        return item;
      }
    });
    setStore(modifiedList);
  };

  const placeOrderItem = item => {
    let today = new Date();
    let hour = +today.getHours();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + " " + time;

    if (hour >= 9 && hour <= 17) {
      let orderedItems = [];
      const orderedItem = cart.filter(data => {
        if (data.id !== item.id) {
          return data;
        } else {
          const newData = {
            ...data,
            lastCheckedOutDate: dateTime.toString()
          }
          orderedItems.push(newData);
          console.log(newData);
          api.orders(newData);
        }
      });
      addCart(orderedItem);
      setPlacesDevices(prevState => [...prevState, ...orderedItems]);
    }else {
      alert(` We Take Orders Between 9 AM to 5 PM `);
    }
  }; 

  const deleteItemHandler = (item) => {
    const updatedCart = cart.filter(data => {
      return data.id === item.id ? null : data;
    })
    addCart(updatedCart);
  }

  return (
    <div>
      <header>
        <div className="header">
          <h2 style={{ textAlign: "center", color: "blue" }}>
            Mobile Shopping
          </h2>
          <nav>
            <ul>
              <li>
                <NavLink to="/">DashBoard</NavLink>
              </li>
              <li>
                <NavLink to="/add-device/">Add Device (+)</NavLink>
              </li>
              <li>
                <NavLink to="/cart/">Cart ({cart.length})</NavLink>
              </li>
              <li>
                <NavLink to="/OrderHistory/">
                  OrderHistory ({placedDevices.length})
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <hr />

      <Switch>
        <Route
          path="/"
          exact
          render={props => {
            return (
              <div>
                <MainDisplay
                  {...props}
                  store={store}
                  cart={cart}
                  addToCart={addToCart}
                  removeDevice={removeItem}
                />
              </div>
            );
          }}
        />
        <Route
          path="/add-device/"
          exact
          render={props => (
            <AddDevice
              addDeviceData={addDeviceData}
              setFields={setFields}
              {...props}
            />
          )}
        />
        <Route
          path="/cart/"
          render={props => (
            <Cart {...props} placeOrderItem={placeOrderItem} cart={cart} deleteItem={deleteItemHandler} />
          )}
        />

        <Route
          path="/OrderHistory/"
          exact
          render={props => (
            <OrderHistory {...props} placedDevices={placedDevices} />
          )}
        />
      </Switch>
    </div>
  );
}

export default withRouter(App);

