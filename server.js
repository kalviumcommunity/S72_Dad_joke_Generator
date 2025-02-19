require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
  }
};

connectDB();

// Check Database Connection Status
app.get("/", (req, res) => {
  const status = mongoose.connection.readyState;
  const dbStatus = status === 1 ? "Connected" : "Disconnected";
  console.log(`🔍 DB Status: ${dbStatus}`);
  res.json({ database: dbStatus });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
