import { BUY_CAKE } from "./cakeTypes";
import { ADD_CAKE } from "./cakeTypes";

const initialState = {
  numOfCakes: 100,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case ADD_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + parseInt(action.payload),
      };

    default:
      return state;
  }
};

export default cakeReducer;
