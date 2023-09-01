import axios from "axios";

// src/actions/materialActions.js

const API_URL = "http://localhost:8000/api/materials";

// Action Types
export const FETCH_MATERIALS_SUCCESS = "FETCH_MATERIALS_SUCCESS";
// ... other action types

// Action Creators
export const fetchMaterialsSuccess = (materials) => ({
  type: FETCH_MATERIALS_SUCCESS,
  payload: materials,
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
