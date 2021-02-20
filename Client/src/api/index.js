import axios from 'axios';

// Mobiles URL's
const url = 'http://localhost:5000/mobiles/';

export const fetchMobiles = async () => await axios.get(url); 

export const createNewMobileInfo = async (newMobileInfo) => await axios.post(url, newMobileInfo);

// Orders URL's 
const ordersURL = 'http://localhost:5000/orders/';

export const orders = async (orderInfo) => await axios.post(ordersURL, orderInfo);