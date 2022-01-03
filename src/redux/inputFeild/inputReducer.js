import { INPUT_FEILD } from "./inputTypes";

const initialState = {
  inputValue: 0,
};

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_FEILD:
      return {
        ...state,
        inputValue: action.payload,
      };

    default:
      return state;
  }
};
export default inputReducer;
