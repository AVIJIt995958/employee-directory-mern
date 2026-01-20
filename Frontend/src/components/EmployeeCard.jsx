/**
 * EmployeeCard Component
 * 
 * This component is used to display a single employee's information
 * in a card format with Edit and Delete actions.
 *
 * @param {Object} props
 * @param {Object} props.employee - Employee object containing name, role, and department
 * @param {Function} props.onEdit - Callback function triggered when Edit button is clicked
 * @param {Function} props.onDelete - Callback function triggered when Delete button is clicked
 */
function EmployeeCard({ employee, onEdit, onDelete }) {
    return (
      /**
       * Card container
       * Displays employee details and action buttons
       */
      <div className="flex justify-between items-center p-4 rounded-xl bg-white/40 backdrop-blur-lg shadow-md border border-white/30 hover:shadow-xl transition">
  
        {/* Employee Information Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            {employee.name}
          </h3>
  
          <p className="text-gray-700">
            Role: {employee.role}
          </p>
  
          <p className="text-gray-700">
            Department: {employee.department}
          </p>
        </div>
  
        {/* Action Buttons Section */}
        <div className="space-x-2">
  
          {/* Edit Button - Opens edit employee form */}
          <button
            onClick={onEdit}
            className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Edit
          </button>
  
          {/* Delete Button - Deletes the employee */}
          <button
            onClick={onDelete}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
  
        </div>
  
      </div>
    );
  }
  
  export default EmployeeCard;
  