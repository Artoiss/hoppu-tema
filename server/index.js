const express = require("express");
const axios = require("axios");
const app = express();
const bodyParser = require("body-parser");

const config = require("./config");
//app.use(express.static('build'))
app.use(bodyParser.json());

// const getProductById = axios.get(
//   `https://${API_KEY}:${PASSWORD}${API_URL}/products/${product_id}.json`
// );

app.get("/api/order/:id", (req, response) => {
  const id = req.params.id;
  getOrder(id)
    .then(res => {
      const orderData = parseOrderData(res.data);
      response.json(orderData);
    })
    .catch(err => response.status(500).send({ error: err }));
});

app.get("/api/product/:id", (req, response) => {
  const id = req.params.id;
  getProduct(id)
    .then(res => {
      console.log(res.data);
      const orderData = parseOrderData(res.data);
      response.json(orderData);
    })
    .catch(err => response.status(500).send({ error: err }));
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT} `);
});
const getOrder = id =>
  axios.get(
    `https://${config.API_KEY}:${config.PASSWORD}${config.API_URL}/orders/${id}.json`
  );

const getProduct = id =>
  axios.get(
    `https://${config.API_KEY}:${config.PASSWORD}${config.API_URL}/products/${id}.json`
  );

const parseOrderData = data => {
  const order = data.order;
  console.log(order);
  const name = order.shipping_address.first_name;
  console.log("@@@", name);
  const product_id = order.line_items.map(item => item.product_id);
  console.log(product_id);
  const title = order.line_items.map(item => item.title);
  console.log(title);
  return {
    first_name: name,
    product_id: product_id,
    title: title
  };
};

const parseProductData = data => {
  const product = data.order;
  console.log(order);
  const name = order.shipping_address.first_name;
  console.log("@@@", name);
  const product_id = order.line_items.map(item => item.product_id);
  console.log(product_id);
  const title = order.line_items.map(item => item.title);
  console.log(title);
  return {
    first_name: name,
    product_id: product_id,
    title: title
  };
};
