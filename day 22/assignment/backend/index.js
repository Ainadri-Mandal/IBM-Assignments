const express = require('express');
const fs = require('fs');
const path = require('path');
const os = require('os');
const crypto = require('crypto');
const logRequest = require('./logger');
const productsData = require('./data');
const app = express();
const PORT = 3000;
// Middleware
app.use(express.json());
app.use(logRequest);
// System Information (Logged on server start)
console.log(`Hostname: ${os.hostname()}`);
console.log(`OS Type: ${os.type()}`);
console.log(`Total Memory: ${os.totalmem()}`);
// Routes
// Home Route
app.get('/', (req, res) => {
 res.send('Welcome to the Node.js Express API!');
});
// Get all products
app.get('/products', (req, res) => {
 res.json(productsData);
});
// Get product by ID
app.get('/products/:id', (req, res) => {
 const product = productsData.find(p => p.id === req.params.id);
 if (!product) {
 return res.status(404).json({ message: 'Product not found' });
 }
 res.json(product);
});
// Add a new product
app.post('/products', (req, res) => {
 const { name, price, category } = req.body;
 if (!name || !price || !category) {
 return res.status(400).json({ message: 'All fields are required' });
 }
 const newProduct = {
 id: crypto.randomUUID(),
 name,
 price,
 category
 };
 productsData.push(newProduct);
 fs.writeFileSync(path.join(__dirname, 'products.json'), JSON.stringify(productsData, 
null, 2));
 res.status(201).json(newProduct);
});
// Update a product
app.put('/products/:id', (req, res) => {
 const { id } = req.params;
 const { name, price, category } = req.body;
 const productIndex = productsData.findIndex(p => p.id === id);
 if (productIndex === -1) {
 return res.status(404).json({ message: 'Product not found' });
 }
 productsData[productIndex] = { ...productsData[productIndex], name, price, category 
};
 fs.writeFileSync(path.join(__dirname, 'products.json'), JSON.stringify(productsData, 
null, 2));
 res.json(productsData[productIndex]);
});
// Delete a product
app.delete('/products/:id', (req, res) => {
 const { id } = req.params;
 const updatedProducts = productsData.filter(p => p.id !== id);
 if (updatedProducts.length === productsData.length) {
 return res.status(404).json({ message: 'Product not found' });
 }
 fs.writeFileSync(path.join(__dirname, 'products.json'), 
JSON.stringify(updatedProducts, null, 2));
 res.json({ message: 'Product deleted successfully' });
});
// Handle invalid routes
app.use((req, res) => {
 res.status(404).json({ message: 'Route not found' });
});
// Start server on some port
// const PORT = 8080
app.listen(PORT, () => {
 console.log(`Server is running on http://localhost:${PORT}`);
});