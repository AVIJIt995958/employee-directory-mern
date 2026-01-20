/**
 * SearchBar Component
 * 
 * This component provides a search input field that allows the user
 * to filter employees based on name or department.
 *
 * @param {Object} props
 * @param {String} props.search - Current search query string
 * @param {Function} props.setSearch - Function to update the search query state
 */
function SearchBar({ search, setSearch }) {
    return (
      /**
       * Input Field
       * 
       * Controlled input component that updates the search state
       * whenever the user types in the input box.
       */
      <input
        type="text"
        placeholder="Search by name or department..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-4 py-2 rounded w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    );
  }
  
  export default SearchBar;
  