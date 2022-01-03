import React, { useState } from "react";
import { connect } from "react-redux";
import { inputFeild } from "../redux";

const InputSet = () => {
  const [myNumber, setMyNumber] = useState(0);
  const [number, setNumber] = useState(myNumber);
  //   console.log(number);

  return (
    <div>
      <h4>{number}</h4>
      <button onClick={() => setNumber(myNumber)}>Set</button>
      <input
        type="text"
        value={myNumber}
        onChange={(e) => setMyNumber(e.target.value)}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    inputFeild: (number) => dispatch(inputFeild(number)),
  };
};

export default connect(mapDispatchToProps)(InputSet);
