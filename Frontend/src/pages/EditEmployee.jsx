import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import EmployeeForm from "../components/EmployeeForm";
import { getEmployeeById, updateEmployee } from "../services/EmployeeService";
import Layout from "../components/Layout";

/**
 * EditEmployee Page
 * 
 * This page is responsible for:
 *  Fetching an existing employee's data using the ID from the URL
 *  Displaying the EmployeeForm in "Edit Mode"
 *  Updating the employee details in the backend
 *  Redirecting the user back to the Employee List page after successful update
 */
function EditEmployee() {

  /**
   * useParams hook
   * 
   * Used to extract the dynamic employee ID from the URL (/edit/:id)
   */
  const { id } = useParams();

  /**
   * useNavigate hook
   * 
   * Used to programmatically navigate between routes
   */
  const navigate = useNavigate();

  /**
   * State to store the employee data fetched from the server
   */
  const [employee, setEmployee] = useState(null);

  /**
   * useEffect Hook
   * 
   * Fetches the employee details from the backend API
   * whenever the page loads or when the ID in the URL changes.
   */
  useEffect(() => {
    const fetchEmployee = async () => {
      const data = await getEmployeeById(id);
      setEmployee(data);
    };

    fetchEmployee();
  }, [id]);

  /**
   * Handle Form Submission
   * 
   * This function is called when the EmployeeForm is submitted.
   * It sends the updated employee data to the backend API
   * and then redirects the user back to the home page (Employee List).
   *
   * @param {Object} data - Updated employee data from the form
   */
  const handleSubmit = async (data) => {
    await updateEmployee(id, data);
    navigate("/");
  };

  /**
   * Show loading state while employee data is being fetched
   */
  if (!employee) {
    return <div className="text-white text-center">Loading...</div>;
  }

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
       * Centers the edit form vertically and horizontally on the page
       */}
      <div className="flex justify-center items-center min-h-[70vh]">
        <EmployeeForm initialData={employee} onSubmit={handleSubmit} />
      </div>
    </Layout>
  );
}

export default EditEmployee;
