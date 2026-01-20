import axios from "axios";

/**
 * Base API URL for Employee-related endpoints
 * All requests will be made relative to this URL
 */
const API_URL = "http://localhost:5000/api/employees";

/**
 * 
 * Employee Service
 * 
 * This file acts as a service layer between the frontend UI
 * and the backend API. It contains all functions required to:
 *  - Fetch employees
 *  - Fetch a single employee
 *  - Add a new employee
 *  - Update an existing employee
 *  - Delete an employee
 *
 * All functions return the response data received from the server.
 */

/**
 * Fetch all employees from the server
 * @returns {Promise<Array>} List of all employees
 */
export const getEmployees = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

/**
 * Fetch a single employee by ID
 * @param {String} id - Employee ID
 * @returns {Promise<Object>} Employee object
 */
export const getEmployeeById = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

/**
 * Add a new employee
 * @param {Object} employee - Employee data (name, role, department)
 * @returns {Promise<Object>} Newly created employee object
 */
export const addEmployee = async (employee) => {
  const res = await axios.post(API_URL, employee);
  return res.data;
};

/**
 * Update an existing employee
 * @param {String} id - Employee ID
 * @param {Object} employee - Updated employee data
 * @returns {Promise<Object>} Updated employee object
 */
export const updateEmployee = async (id, employee) => {
  const res = await axios.put(`${API_URL}/${id}`, employee);
  return res.data;
};

/**
 * Delete an employee by ID
 * @param {String} id - Employee ID
 * @returns {Promise<Object>} Server response message
 */
export const deleteEmployee = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};
