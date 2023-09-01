import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMaterials, searchMaterials } from "../actions/materialActions";
import "../style/FilterBar.css"; // Import the CSS file

const FilterBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const handleClear = () => {
    setSearchQuery("");
    dispatch(fetchMaterials()); // Reset to fetch all materials
  };

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // Debounced search function
  const debouncedSearch = debounce((query) => {
    dispatch(searchMaterials(query));
  }, 300); // Adjust the debounce delay as needed

  // Watch for changes in the searchQuery and trigger debounced search
  useEffect(() => {
    debouncedSearch(searchQuery);
  }, [searchQuery, debouncedSearch]);

  return (
    <div>
      <input
        className="filter-bar-input"
        type="text"
        placeholder="Search materials"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <button className="filter-bar-clear-button" onClick={handleClear}>
        Clear Search
      </button>
    </div>
  );
};

export default FilterBar;
