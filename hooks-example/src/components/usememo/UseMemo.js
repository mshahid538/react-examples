import { useState, useMemo } from "react";

function UseMemo() {
  //Every time you change the value of the number, 'factorialOf(n) called!' is logged to console.
  //That's expected.However, if you click Re-render button, 'factorialOf(n) called!' isn't logged to console
  //because useMemo(() => factorialOf(number), [number]) returns the memoized factorial calculation. Great!
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);
  const factorial = useMemo(() => factorialOf(number), [number]);
  const onChange = (event) => {
    setNumber(Number(event.target.value));
  };

  const onClick = () => setInc((i) => i + 1);

  return (
    <div>
      Factorial of
      <input type="number" value={number} onChange={onChange} />
      is {factorial}
      <button onClick={onClick}>Re-render</button>
      <h3>
        useMemo(): It returns a memoized value. The primary purpose of this hook
        is "performance optimization". Use it sparingly to optimise the
        performance when needed. It accepts two arguments - "create" function
        (which should return a value to be memoized) and "dependency" array.
      </h3>
      <p>
        The useCallback hook is similar to useMemo, but it returns a memoized
        function, while useMemo has a function that returns a value.
      </p>
      <h4>useCase for useMemo():</h4>
      <span>
        Optimise expensive calculations (e.g. operations on data like sort,
        filter, changing format etc.) while rendering.
      </span>
      <hr></hr>
    </div>
  );

  function factorialOf(n) {
    console.log("factorialOf(n) called!");
    return n <= 0 ? 1 : n * factorialOf(n - 1);
  }
}

export default UseMemo;
