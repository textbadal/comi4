const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Middleware for CORS and JSON parsing
app.use(cors());
app.use(express.json()); // Replaces body-parser.json()

// MongoDB connection
(async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI environment variable is missing');
    }
    await mongoose.connect(process.env.MONGO_URI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process with failure
  }
})();

// Define the Certificate model with validations
const certificateSchema = new mongoose.Schema({
  certificateID: { type: String, required: true },
  studentName: { type: String, required: true },
  courseName: { type: String, required: true },
  issueDate: { type: Date, default: Date.now }
});

const Certificate = mongoose.model('Certificate', certificateSchema);

// API Route: Verify certificates
app.post('/api/certificates/verify', async (req, res) => {
  try {
    const { certificateIDs } = req.body;

    // Validate input
    if (!Array.isArray(certificateIDs)) {
      return res.status(400).json({ message: 'certificateIDs must be an array' });
    }

    // Find certificates in the database
    const certificates = await Certificate.find({ certificateID: { $in: certificateIDs } });

    if (certificates.length === 0) {
      return res.status(404).json({ message: 'No certificates found' });
    }

    return res.status(200).json(certificates);
  } catch (err) {
    console.error('Error verifying certificates:', err);
    res.status(500).json({ message: 'Error verifying certificates' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
