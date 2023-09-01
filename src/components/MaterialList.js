// MaterialList.js
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchMaterials } from "../actions/materialActions";
import "../style/MaterialList.css"; // Import the CSS file

const MaterialList = ({ materials, fetchMaterials }) => {
  const [minAmount, setMinAmount] = useState(""); // Minimum amount filter
  const [maxAmount, setMaxAmount] = useState(""); // Maximum amount filter

  useEffect(() => {
    fetchMaterials();
  }, [fetchMaterials]);

  // Filter materials based on the amount range
  const filteredMaterials = materials.filter((material) => {
    const amount = material.amount;

    // If both minAmount and maxAmount are empty, show all materials
    if (!minAmount && !maxAmount) {
      return true;
    }

    // If only maxAmount is empty, filter materials with amount greater than or equal to minAmount
    if (!maxAmount && minAmount) {
      return amount >= parseInt(minAmount, 10);
    }

    // If only minAmount is empty, filter materials with amount less than or equal to maxAmount
    if (!minAmount && maxAmount) {
      return amount <= parseInt(maxAmount, 10);
    }

    // Filter materials within the specified range
    return (
      amount >= parseInt(minAmount, 10) && amount <= parseInt(maxAmount, 10)
    );
  });

  const clearFilters = () => {
    setMinAmount("");
    setMaxAmount("");
  };

  return (
    <div>
      <h1 className="material-list-heading">Filter Materials</h1>
      <div className="filter-bar">
        <label>Min Amount:</label>
        <input
          className="amount-bar-input"
          type="number"
          min="1" // Restrict to positive values
          value={minAmount}
          onChange={(e) => setMinAmount(e.target.value)}
        />

        <label>Max Amount:</label>
        <input
          className="amount-bar-input"
          type="number"
          min="1" // Restrict to positive values
          value={maxAmount}
          onChange={(e) => setMaxAmount(e.target.value)}
        />
        <button className="filter-clear-button" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>

      <div className="material-list-container">
        {filteredMaterials.map((material) => (
          <div key={material.id} className="material-list-item">
            <img alt={material.name} src={material.image} />
            <div>
              <p>Name: {material.name}</p>
              <p>Description: {material.description}</p>
              <p>Amount: {material.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  materials: state.materials.materials,
});

export default connect(mapStateToProps, { fetchMaterials })(MaterialList);
