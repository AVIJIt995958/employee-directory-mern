import mongoose from "mongoose";

/**
 * Employee Schema
 * ----------------
 * This schema defines the structure for storing employee information
 * in the database such as name, role, and department.
 * It also automatically maintains createdAt and updatedAt timestamps.
 */
const employeeSchema = new mongoose.Schema(
  {
    /**
     * Name of the employee
     */
    name: {
      type: String,
      required: true,
      trim: true,
    },

    /**
     * Role / Designation of the employee
     */
    role: {
      type: String,
      required: true,
      trim: true,
    },

    /**
     * Department of the employee
     */
    department: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    // Automatically adds createdAt and updatedAt fields
    timestamps: true,
  }
);

/**
 * Employee Model
 * Used to perform CRUD operations on employees collection
 */
const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
