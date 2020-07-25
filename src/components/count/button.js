import React from "react";
import { useDispatch } from "react-redux";

const Button = () => {
  const dispatch = useDispatch();
  return (
    <div className="button-container">
      <button className="add" onClick={() => dispatch({ type: "add" })}>
        +
      </button>
      <button
        className="subtract"
        onClick={() => dispatch({ type: "subtract" })}
      >
        -
      </button>
    </div>
  );
};

export default Button;
