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
    .then(res => {
      const orderData = parseOrderData(res.data);
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

// app.get("/api/product_image/:id", (req, response) => {
//   const id = req.params.id;
//   // const image_id = req.query.imageId;
//   getImage(id, image_id)
//     .then(res => {
//       const imageData = parseImageData(res.data);
//       response.json(imageData);
//     })
//     .catch(err => response.status(500).send({ error: err }));
// });

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
//
// const getImage = id =>
//   axios.get(
//     `https://${config.API_KEY}:${config.PASSWORD}${config.API_URL}/products/${id}/images.json`
//   );

// const getImageAndProduct = id => {
//   return axios.all([
//     axios.get(
//       `https://${config.API_KEY}:${config.PASSWORD}${config.API_URL}/products/${id}.json`
//     ),
//     axios.get(
//       `https://${config.API_KEY}:${config.PASSWORD}${config.API_URL}/products/${id}/images.json`
//     )
//   ]);
// };
const parseOrderData = data => {
  const order = data.order;
  const orderArray = order.line_items.map(item => {
    const color = item.variant_title.split(" ")[2];
    const orderObject = {
      product_id: item.product_id,
      title: item.title,
      total_price: item.price,
      color: color
    };
    return orderObject;
  });
  return {
    orderArray
  };
};

const parseProductData = data => {
  const product = data.product;
  const image_id = product.variants[0].image_id;
  const size = product.variants[0].option1;
  const image_url = product.image.src;
  return {
    image_url,
    size
  };
};

// const parseImageData = data => {
//   const image = data.image;
//   const image_url = image.src;
//   return {
//     image_url
//   };
// };
