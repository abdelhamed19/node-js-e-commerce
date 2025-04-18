require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const DB = require('../config/database');
const productsRoutes = require('../routes/products');
const categoriesRoutes = require('../routes/categories');
DB.connectDB();

app.listen(PORT);

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// products sroutes
app.use('/products', productsRoutes);
app.use('/categories', categoriesRoutes);

