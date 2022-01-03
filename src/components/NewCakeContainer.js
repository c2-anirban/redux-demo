import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";
import { addCake } from "../redux";
import { inputFeild } from "../redux";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(0);

  console.log(number);
  // console.log(setNumber);
  return (
    <div>
      <h2>{number} </h2>
      <button onClick={() => props.addCake(number)}>+ {number}</button>
      <button onClick={() => props.buyCake(number)}>- {number}</button>
      <br />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    setNumber: state.input.inputValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
    addCake: (number) => dispatch(addCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
