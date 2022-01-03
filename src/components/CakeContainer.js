import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";
import { addCake } from "../redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>{props.numOfCakes} </h2>
      {/* <button onClick={props.buyCake}>+</button>
      <button onClick={props.buyCake}>-</button> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    addCake: () => dispatch(addCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
