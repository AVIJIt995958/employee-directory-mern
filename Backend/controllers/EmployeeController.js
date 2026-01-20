/**
 * Employee Controller
 * Handles all CRUD operations related to Employee
 */

import Employee from "../models/Employee.js";

/**
 * Get all employees
 * @route   GET /api/employees
 * @desc    Fetch all employees sorted by latest first
 */
export const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find().sort({ createdAt: -1 });
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch employees" });
  }
};

/**
 * Add new employee
 * @route   POST /api/employees
 * @desc    Create a new employee
 * @param   {Object} req.body - name, role, department
 */
export const addEmployee = async (req, res) => {
  try {
    const { name, role, department } = req.body;

    const employee = await Employee.create({
      name,
      role,
      department,
    });

    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ message: "Failed to add employee" });
  }
};

/**
 * Update employee
 * @route   PUT /api/employees/:id
 * @desc    Update existing employee details
 * @param   {String} req.params.id - Employee ID
 */
export const updateEmployee = async (req, res) => {
  try {
    const updated = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Failed to update employee" });
  }
};

/**
 * Delete employee
 * @route   DELETE /api/employees/:id
 * @desc    Delete employee by ID
 * @param   {String} req.params.id - Employee ID
 */
export const deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete employee" });
  }
};

/**
 * Get single employee by ID
 * @route   GET /api/employees/:id
 * @desc    Fetch one employee details
 * @param   {String} req.params.id - Employee ID
 */
export const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch employee" });
  }
};
