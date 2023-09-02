import { FETCH_MATERIALS_SUCCESS } from "../actions/materialActions";
import { UPDATE_MATERIAL_AMOUNT_SUCCESS } from "../actions/materialActions";

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
    case UPDATE_MATERIAL_AMOUNT_SUCCESS:
      // Find the material in the state and update its amount
      const updatedMaterials = state.materials.map((material) => {
        if (material.id === action.payload.materialId) {
          return { ...material, amount: action.payload.newAmount };
        }
        return material;
      });

      return { ...state, materials: updatedMaterials };
    default:
      return state;
  }
};

export default materialReducer;
