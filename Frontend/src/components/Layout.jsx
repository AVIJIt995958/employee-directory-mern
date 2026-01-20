import { useNavigate } from "react-router-dom";

/**
 * Layout Component
 * 
 * This component provides a common layout structure for all pages.
 * It includes:
 *  - A top header with navigation buttons
 *  - A centered title (Employee Directory)
 *  - A content area where page components are rendered
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - The page content to be rendered inside the layout
 */
function Layout({ children }) {
  /**
   * useNavigate hook from react-router-dom
   * Used for programmatic navigation between routes
   */
  const navigate = useNavigate();

  return (
    /**
     * Main wrapper
     * 
     * Applies a full-screen gradient background and wraps the entire application UI.
     */
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-100 via-indigo-300 to-green-400">

      {/* 
          Header Section
        */}
      <div className="bg-purple-100 shadow sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-6 py-4 grid grid-cols-3 items-center">

          {/* 
              Left Button Section
              (Currently navigates to Home / Dashboard)
              */}
          <div className="flex justify-start">
            <button
              onClick={() => navigate("/")}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg shadow"
            >
              + Edit Employee
            </button>
          </div>

          {/* 
              Center Title Section
             */}
          <div className="text-center">
            <h1
              className="text-3xl font-bold text-indigo-700 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Employee Directory
            </h1>
          </div>

          {/* 
              Right Button Section
              (Navigates to Add Employee page)
             */}
          <div className="flex justify-end">
            <button
              onClick={() => navigate("/add")}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg shadow"
            >
              + Add Employee
            </button>
          </div>

        </div>
      </div>

      {/*
          Page Content Section
          This is where child components/pages are rendered
         */}
      <div className="max-w-6xl mx-auto p-6">
        {children}
      </div>

    </div>
  );
}

export default Layout;
