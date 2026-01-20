import EmployeeForm from "../components/EmployeeForm";
import { addEmployee } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

/**
 * AddEmployee Page
 * 
 * This page is responsible for:
 *  Displaying the EmployeeForm in "Add Mode"
 *  Sending the form data to the backend API to create a new employee
 *  Redirecting the user back to the Employee List page after successful creation
 */
function AddEmployee() {

  /**
   * useNavigate hook
   * 
   * Used to programmatically navigate between routes
   */
  const navigate = useNavigate();

  /**
   * Handle Form Submission
   * 
   * This function is called when the EmployeeForm is submitted.
   * It sends the new employee data to the backend using the service layer
   * and then redirects the user back to the home page (Employee List).
   *
   * @param {Object} data - New employee data from the form
   */
  const handleSubmit = async (data) => {
    await addEmployee(data);
    navigate("/");
  };

  return (
    /**
     * Layout Wrapper
     * 
     * Wraps the page inside the common layout (header + background)
     */
    <Layout>
      {/**
       * Centered Container
       * 
       * Centers the form vertically and horizontally on the page
       */}
      <div className="flex justify-center items-center min-h-[70vh]">
        <EmployeeForm onSubmit={handleSubmit} />
      </div>
    </Layout>
  );
}

export default AddEmployee;
