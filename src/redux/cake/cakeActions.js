import { BUY_CAKE } from "./cakeTypes";
import { ADD_CAKE } from "./cakeTypes";

export const buyCake = (number = 0) => {
  return {
    type: BUY_CAKE,
    payload: number,
  };
};
export const addCake = (number = 0) => {
  return {
    type: ADD_CAKE,
    payload: number,
  };
};
