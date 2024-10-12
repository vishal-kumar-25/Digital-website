require('dotenv').config();  // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Initialize express app
const app = express();

// Middleware for parsing application/x-www-form-urlencoded and application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Define the Contact model (schema)
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  details: { type: String, required: true },
});

const Contact = mongoose.model('Contact', contactSchema);

// Serve static files (e.g., CSS, JS)
app.use(express.static('public'));

// Route for handling POST request when the form is submitted
app.post('/contact', async (req, res) => {
  const { name, email, details } = req.body;

  // Create a new Contact document
  const newContact = new Contact({
    name,
    email,
    details,
  });

  try {
    // Save the document to the MongoDB collection
    await newContact.save();
    res.status(200).send('Message received! Thank you for contacting us.');
  } catch (error) {
    res.status(500).send('Failed to submit message. Please try again.');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
