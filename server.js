require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes"); // Import CRUD routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parses incoming JSON requests
app.use("/api", routes); // Uses CRUD routes

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

// Handle MongoDB connection status dynamically
mongoose.connection.on("connected", () => console.log("✅ MongoDB Connected"));
mongoose.connection.on("error", (err) => console.error("❌ MongoDB Error:", err));
mongoose.connection.on("disconnected", () => console.log("⚠️ MongoDB Disconnected"));

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
