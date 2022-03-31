function UseCallback() {
  return (
    <>
      <h3>
        # useCallback(): It returns a memoized function (or callback). It
        accepts two arguments - "function" and "dependency" array. It will
        return new i.e. re-created function only when one of the dependencies
        has changed, or else it will return the old i.e. memoized one.
      </h3>
      <p>
        useCases of useCallback(): Passing memoized functions to child
        components (that are optimized with React.memo or shouldComponentUpdate
        using shallow equal - Object.is) to avoid unnecessary rerender of child
        component due to functions passed as props.
      </p>
    </>
  );
}
export default UseCallback;
