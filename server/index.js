const express = require("express");
const axios = require("axios");
const app = express();
const bodyParser = require("body-parser");

const config = require("./config");
//app.use(express.static('build'))
app.use(bodyParser.json());

app.get("/api/order/:id", (req, response) => {
  const id = req.params.id;
  getOrder(id)
    .then(async res => {
      const orderData = await parseOrderData(res.data);
      console.log(orderData);
      response.json(orderData);
    })
    .catch(err => {
      response.status(500).send({ error: err });
    });
});

app.get("/api/product/:id", (req, response) => {
  const id = req.params.id;
  getProduct(id)
    .then(res => {
      console.log(res.data);
      const productData = parseProductData(res.data);
      response.json(productData);
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

const parseOrderData = async data => {
  const order = data.order;
  const productArray = order.line_items.map(item => {
    console.log(item.product_id);

    return item.product_id;
  });
  const promises = productArray.map(async id => {
    const response = await getProduct(id);
    return response.data;
  });
  const results = await Promise.all(promises);
  console.log("test result:", results);

  return results;
};
//  const orderArray = order.line_items.map(item => {
//    const orderObject = {
//      product_id: item.product_id,
//      title: item.title,
//      total_price: item.price
//    };
//    return orderObject;
//  });
//  return {
//    orderArray
//  };
//};

const parseProductData = data => {
  const product = data.product;
  const size = product.variants[0].option1;
  const price = product.variants[0].price;
  const image_url = product.image.src;
  const body = product.body_html;
  return {
    size,
    price,
    image_url,
    body
  };
};
