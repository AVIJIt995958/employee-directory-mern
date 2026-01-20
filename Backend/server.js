import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import EmployeeRoutes from "./Routes/EmployeeRoutes.js";

/**
 * Load environment variables from .env file
 */
dotenv.config();

/**
 * Create Express application
 */
const app = express();

/**
 *
 * Global Middlewares
 * 
 */

/**
 * Enable Cross-Origin Resource Sharing (CORS)
 * Allows frontend to communicate with backend
 */
app.use(cors());

 /**
 * Parse incoming JSON request bodies
 */
app.use(express.json());

/**
 * 
 * API Routes
 * 
 */

/**
 * All employee-related routes are prefixed with:
 * /api/employees
 */
app.use("/api/employees", EmployeeRoutes);

/**
 * 
 * Test Route
 * 
 * This route is used to verify that the API is running properly.
 */
app.get("/", (req, res) => {
  res.send("Employee Directory API is running...");
});

/**
 * 
 * Database Connection
 * 
 * Connect to MongoDB using Mongoose and start the server
 */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");

    /**
     * Start the server only after successful DB connection
     */
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });
