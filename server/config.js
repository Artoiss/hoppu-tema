require("dotenv").config();

const API_KEY = process.env.API_KEY;
const PASSWORD = process.env.PASSWORD;
const API_URL = process.env.API_URL;

module.exports = {
  API_KEY,
  PASSWORD,
  API_URL
};
