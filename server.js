import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes.js"; // ✅ Correct import for ES Modules

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", routes); // ✅ Mount routes correctly

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
};

connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
