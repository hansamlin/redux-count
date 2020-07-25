import React from "react";
import { useSelector } from "react-redux";

// const mapStateToProps = (state) => {
//   return {
//     count: state.count,
//   };
// };

const Count = () => {
  const count = useSelector((state) => state.count);
  return (
    <div className="text">
      You have clicked <span>{count}</span> times.
    </div>
  );
};

export default Count;
