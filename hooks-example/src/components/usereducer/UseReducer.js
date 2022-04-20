import React, { useReducer } from "react";

// Defining the initial state and the reducer
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "add":
      return state + 1;
    case "subtract":
      return state - 1;
    case "reset":
      return 0;
    default:
      throw new Error("Unexpected action");
  }
};

function UseReducer() {
  // Initialising useReducer hook
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>
        <h3>
          The useReducer Hook is similar to the useState Hook. It allows for
          custom state logic. If you find yourself keeping track of multiple
          pieces of state that rely on complex logic, useReducer may be useful.
        </h3>
      </p>
      <p>
        <h4>
          The useReducer Hook accepts two arguments: reducer, initialState
        </h4>
        <h5>{/* useReducer(<reducer>, <initialState>) */}</h5>
      </p>
      //Example
      <div>
        <h2>{count}</h2>
        <button onClick={() => dispatch("add")}>add</button>
        <button onClick={() => dispatch("subtract")}>subtract</button>
        <button onClick={() => dispatch("reset")}>reset</button>
      </div>
    </>
  );
}

export default UseReducer;
