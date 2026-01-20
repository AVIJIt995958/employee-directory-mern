import { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import EmployeeCard from "../components/EmployeeCard";
import SearchBar from "../components/SearchBar";

/**
 * EmployeeList Page (Dashboard)
 * 
 * This page is responsible for:
 *  Fetching and displaying all employees from the backend
 *  Searching employees by name or department
 *  Deleting an employee
 *  Navigating to Add and Edit employee pages
 */
function EmployeeList() {

  /**
   * State to store the list of employees
   */
  const [employees, setEmployees] = useState([]);

  /**
   * State to store the search query
   */
  const [search, setSearch] = useState("");

  /**
   * useNavigate hook
   * 
   * Used to navigate to different pages (Add / Edit)
   */
  const navigate = useNavigate();

  /**
   * Fetch Employees from Server
   * 
   * This function calls the backend API to get all employees
   * and stores them in the state.
   */
  const fetchEmployees = async () => {
    try {
      const data = await getEmployees();
      setEmployees(data || []);
    } catch (err) {
      console.error("Failed to fetch employees", err);
      setEmployees([]);
    }
  };

  /**
   * useEffect Hook
   * 
   * Fetches all employees when the page loads for the first time.
   */
  useEffect(() => {
    fetchEmployees();
  }, []);

  /**
   * Delete Employee Handler
   * 
   * Deletes an employee by ID and refreshes the list.
   *
   * @param {String} id - Employee ID to be deleted
   */
  const handleDelete = async (id) => {
    await deleteEmployee(id);
    fetchEmployees();
  };

  /**
   * Filtered Employees
   * 
   * Filters employees based on search query (name or department).
   */
  const filteredEmployees = (employees || []).filter(
    (emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    /**
     * Page Wrapper
     * 
     * Applies full-screen background and padding
     */
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-500 p-6">

      {/**
       * Main Container
       * 
       * Holds the dashboard content
       */}
      <div className="max-w-5xl mx-auto bg-yellow-50 p-6 rounded-2xl shadow-xl border border-black/80">

        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-6 text-center">
          Employee Directory
        </h1>

        {/**
         * Top Bar
         * 
         * Contains Add Employee button and SearchBar component
         */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">

          {/* Add Employee Button */}
          <button
            onClick={() => navigate("/add")}
            className="bg-indigo-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow"
          >
            + Add Employee
          </button>

          {/* Search Bar */}
          <SearchBar search={search} setSearch={setSearch} />
        </div>

        {/**
         * Employee List Section
         * 
         * Displays all employee cards or a "No employees found" message
         */}
        <div className="grid gap-4">

          {/* If no employees match the search */}
          {filteredEmployees.length === 0 && (
            <p className="text-center text-gray-500">
              No employees found.
            </p>
          )}

          {/* Render Employee Cards */}
          {filteredEmployees.map((emp) => (
            <EmployeeCard
              key={emp._id}
              employee={emp}
              onEdit={() => navigate(`/edit/${emp._id}`)}
              onDelete={() => handleDelete(emp._id)}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default EmployeeList;
