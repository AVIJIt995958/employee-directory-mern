import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeList from "./pages/EmployeeList";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";

/**
 * App Component
 * 
 * This is the root component of the application.
 * It is responsible for:
 *   Setting up client side routing using React Router
 *   Defining all application routes and their corresponding pages
 *
 * Routes:
 *  - "/"            = Displays the Employee List (Dashboard)
 *  - "/add"         = Displays the Add Employee page
 *  - "/edit/:id"    = Displays the Edit Employee page for a specific employee
 */
function App() {
  return (
    /**
     * Router Component
     * 
     * Wraps the entire application and enables client side routing.
     */
    <Router>
      {/**
       * Routes Component
       * 
       * Contains all route definitions for the application.
       */}
      <Routes>

        {/**
         * Home / Dashboard Route
         * Displays the list of all employees
         */}
        <Route path="/" element={<EmployeeList />} />

        {/**
         * Add Employee Route
         * Displays the form to add a new employee
         */}
        <Route path="/add" element={<AddEmployee />} />

        {/**
         * Edit Employee Route
         * Displays the form to edit an existing employee using its ID
         */}
        <Route path="/edit/:id" element={<EditEmployee />} />

      </Routes>
    </Router>
  );
}

export default App;
