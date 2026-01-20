import { useState, useEffect } from "react";

/**
 * EmployeeForm Component
 * 
 * This is a reusable form component used for both:
 * 1. Adding a new employee
 * 2. Editing an existing employee
 *
 * The form automatically switches between Add Mode and Edit Mode
 * based on the presence of `initialData`.
 *
 * @param {Object} props
 * @param {Object|null} props.initialData - Existing employee data (used in Edit mode)
 * @param {Function} props.onSubmit - Callback function to handle form submission
 */
function EmployeeForm({ initialData, onSubmit }) {

  /**
   * Determines whether the form is in Edit mode or Add mode
   */
  const isEdit = !!initialData;

  /**
   * State to store form input values
   */
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    department: "",
  });

  /**
   * useEffect Hook
   * 
   * When initialData is provided (Edit mode),
   * populate the form fields with existing employee data.
   */
  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        role: initialData.role || "",
        department: initialData.department || "",
      });
    }
  }, [initialData]);

  /**
   * Handle Input Change
   * 
   * Updates the form state whenever the user types in any input field.
   *
   * @param {Object} e - Input change event
   */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * Handle Form Submission
   * 
   * Prevents default form submission behavior and
   * sends the form data to the parent component via onSubmit callback.
   *
   * @param {Object} e - Form submit event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    /**
     * Form Container
     * 
     * The border color and button style change based on whether
     * the form is in Add mode or Edit mode.
     */
    <form
      onSubmit={handleSubmit}
      className={`max-w-md mx-auto p-6 rounded-xl shadow-lg space-y-4 border-2
        ${isEdit ? "bg-white border-yellow-300" : "bg-white border-green-300"}
      `}
    >
      {/* Form Title and Mode Indicator */}
      <h2 className="text-2xl font-bold text-center text-gray-700 flex items-center justify-center gap-2">
        Employee Information
        {isEdit ? (
          <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
            Edit Mode
          </span>
        ) : (
          <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">
            Add Mode
          </span>
        )}
      </h2>

      {/* Employee Name Input */}
      <input
        type="text"
        name="name"
        placeholder="Employee Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        required
      />

      {/* Employee Role Input */}
      <input
        type="text"
        name="role"
        placeholder="Role"
        value={formData.role}
        onChange={handleChange}
        className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        required
      />

      {/* Employee Department Input */}
      <input
        type="text"
        name="department"
        placeholder="Department"
        value={formData.department}
        onChange={handleChange}
        className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        required
      />

      {/* Submit Button */}
      <button
        type="submit"
        className={`w-full text-white py-2 rounded font-semibold transition
          ${isEdit ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-600 hover:bg-green-700"}
        `}
      >
        {isEdit ? "Update Employee" : "Save Employee"}
      </button>
    </form>
  );
}

export default EmployeeForm;
