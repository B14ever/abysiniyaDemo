require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const cookieParser = require('cookie-parser');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());

// CORS Configuration
app.use(
  cors({
    origin: [process.env.FORNENDPORT], // Ensure this is the correct variable name for your frontend URL
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

// Start server and connect to MongoDB
const PORT = process.env.PORT || 8000;
const Server = app.listen(PORT, () => {
  console.log(`Connected to Server and MongoDB database on port ${PORT}`);
});

// MongoDB connection
mongoose.connect(process.env.MoGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB...');
  })
  .catch(err => {
    console.error('Could not connect to MongoDB...', err);
  });

// Routes
app.use('/api/products', require('./routes/product/product'));
app.use('/api/faqs', require('./routes/faqs/faqs'));
app.use('/api/blog', require('./routes/blog/blogs'));
