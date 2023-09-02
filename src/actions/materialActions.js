import axios from "axios";

// src/actions/materialActions.js

const API_URL = "http://localhost:8000/api/materials";

// Action Types
export const FETCH_MATERIALS_SUCCESS = "FETCH_MATERIALS_SUCCESS";
export const UPDATE_MATERIAL_AMOUNT_SUCCESS = "UPDATE_MATERIAL_AMOUNT_SUCCESS";

// ... other action types

// Action Creators
export const fetchMaterialsSuccess = (materials) => ({
  type: FETCH_MATERIALS_SUCCESS,
  payload: materials,
});

export const updateMaterialAmountSuccess = (materialId, newAmount) => ({
  type: UPDATE_MATERIAL_AMOUNT_SUCCESS,
  payload: { materialId, newAmount },
});
// ... other action creators

// Thunk for fetching materials
export const fetchMaterials = () => async (dispatch) => {
  try {
    const response = await axios.get(API_URL + "/");
    dispatch(fetchMaterialsSuccess(response.data));
  } catch (error) {
    console.log("error", error);
    // Handle error
  }
};

// Thunk for searching materials
export const searchMaterials = (searchTerm) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}?search=${searchTerm}`);
    dispatch(fetchMaterialsSuccess(response.data));
  } catch (error) {
    // Handle error
  }
};

export const updateMaterialAmount =
  (materialId, newAmount) => async (dispatch) => {
    try {
      const response = await axios.patch(
        `${API_URL}/${materialId}/update_amount/`,
        { amount: newAmount },
        { headers: { "Content-Type": "application/json" } }
      );

      // Dispatch an action to update the amount in the store
      dispatch(updateMaterialAmountSuccess(materialId, response.data.amount));
    } catch (error) {
      // Handle error
    }
  };
