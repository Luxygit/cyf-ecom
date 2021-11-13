const express = require("express");
const app = express();
const apiFunction = require("./api.js");
const api = apiFunction();
const PORT = 4000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get(`/customers/:customerId/orders`, api.getCustomerOrderItems);
app.delete(`/customers/:customerId`, api.deleteCustomer);
app.delete(`/orders/:orderId`, api.deleteOrder);
app.put(`/customers/:customerId`, api.putCustomer);
app.post(`/customers/:customerId/orders`, api.postNewOrder);
app.post(`/products`, api.postNewProduct);
app.post(`/customers`, api.postNewCustomer);
app.get(`/customers/:customerId`, api.getCustomerById);
app.get("/products", api.getProducts);
app.get("/", (request, response) => {
  response.json("Welcome to the Ecommerce application.");
});

app.listen(PORT, () => console.log(`listening to ${PORT}`));
