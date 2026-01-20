import express from "express";
import {
  getEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controllers/EmployeeController.js";

/**
 * Employee Routes
 * ----------------
 * This file defines all REST API routes related to employee operations.
 * It maps HTTP methods and endpoints to their respective controller functions.
 */
const router = express.Router();

/**
 * @route   GET /api/employees
 * @desc    Fetch all employees
 * @access  Public
 */
router.get("/", getEmployees);

/**
 * @route   GET /api/employees/:id
 * @desc    Fetch a single employee by ID
 * @access  Public
 */
router.get("/:id", getEmployeeById);

/**
 * @route   POST /api/employees
 * @desc    Add a new employee
 * @access  Public
 */
router.post("/", addEmployee);

/**
 * @route   PUT /api/employees/:id
 * @desc    Update an existing employee by ID
 * @access  Public
 */
router.put("/:id", updateEmployee);

/**
 * @route   DELETE /api/employees/:id
 * @desc    Delete an employee by ID
 * @access  Public
 */
router.delete("/:id", deleteEmployee);

export default router;
