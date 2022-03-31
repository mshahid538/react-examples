function UseMemo() {
  return (
    <>
      <h3>
        useMemo(): It returns a memoized value. The primary purpose of this hook
        is "performance optimization". Use it sparingly to optimise the
        performance when needed. It accepts two arguments - "create" function
        (which should return a value to be memoized) and "dependency" array.
      </h3>

      <h4>useCase for useMemo():</h4>
      <span>
        Optimise expensive calculations (e.g. operations on data like sort,
        filter, changing format etc.) while rendering.
      </span>
      <hr></hr>
    </>
  );
}

export default UseMemo;
