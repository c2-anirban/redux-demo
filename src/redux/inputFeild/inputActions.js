import { INPUT_FEILD } from "./inputTypes";

export const inputFeild = (number) => {
  return {
    type: INPUT_FEILD,
    payload: number,
  };
};
