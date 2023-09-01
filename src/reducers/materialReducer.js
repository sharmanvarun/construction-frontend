import { FETCH_MATERIALS_SUCCESS } from "../actions/materialActions";

const initialState = {
  materials: [],
};

const materialReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MATERIALS_SUCCESS:
      return {
        ...state,
        materials: action.payload,
      };
    // ... other cases
    default:
      return state;
  }
};

export default materialReducer;
