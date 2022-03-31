import React from "react";

function UseEffect() {
  const [count, setCount] = React.useState(0);
  const [title, setTitle] = React.useState(null);

  // component did mount : effects only executed once
  React.useEffect(() => {
    alert("render!!");
  }, []);

  // component did updated
  React.useEffect(() => {
    alert("componentDidUpdate!");
  }, [count]);

  //title update is placed in a callback and supplied to useEffect().
  React.useEffect(() => {
    document.title = title;
  }, [title]);

  // component will unmount : Return the cleanup function which cleans the effect(event).
  React.useEffect(() => {
    alert("compnentWillUnmount!");
    return () => {
      setCount(0);
    };
  }, [setCount]);

  // Fetching data from API with useEffect.
  // The API URL.
  const APIurl = "https://api.github.com/users";
  // useState.
  const [users, setUsers] = React.useState([]);
  // useEffect.
  React.useEffect(() => {
    getUser();
  }, []);

  //If you’re using async/await,
  //then you will have to create a separate function because the effect callback is anonymous
  // and cannot be async.

  // Separate function.
  async function getUser() {
    const response = await fetch(APIurl);
    const data = await response.json();
    setUsers(data);
  }

  return (
    <>
      <p>
        <h3>useEffect(): Effect Hook is used to handle side effects.</h3>
        <br></br>
        <h4>
          What are effects, really? Examples are:
          <ul>
            <li>Fetching data</li>
            <li>Reading from local storage</li>
            <li>Registering and deregistering event listeners</li>
          </ul>
        </h4>

        <span>
          By default always take effect / run after every render. By using this
          hook you tell react what to perform after rendering.
          componentDidMount, componentDidUpdate, and componentWillUnmount.
        </span>
        <h5>
          useEffect() hook accepts 2 arguments: useEffect(callback[,
          dependencies]); callback is the function containing the side-effect
          logic. callback is executed right after changes were being pushed to
          DOM. dependencies is an optional array of dependencies. useEffect()
          executes callback only if the dependencies have changed between
          renderings
        </h5>
        <h4>
          Basically, two types of side effects reside in the React component:
        </h4>
        <ol>
          <li>
            Effects Without Cleanup: Some of the most common examples of effects
            that do not require clean-up are: Manual DOM Mutation, Network
            Requests, Logging. These operations do not prevent the screen from
            being changed by the browser.
          </li>
          <li>
            Effects With Cleanup: Some effects need cleanup after a DOM update
            happens. If there is an update that creates Subscription on every
            change you must Clean that subscription before returning from
            useEffect or componentDidMount(); so that you can avoid Memory
            Leaks.
          </li>
        </ol>

        <ul>
          useCases of useEffect Hook:
          <li>Running once on mount: fetch API data</li>
          <li>Running on state change: validating input field</li>
          <li>Running on state change: live filtering</li>
          <li>
            Running on state change: trigger any animation on new array value
          </li>
          <li>
            Running on props change: update some list on fetched API data update
          </li>
          <li>
            Running on props change: updating fetched API data to get some
            updated prices
          </li>
        </ul>
      </p>
      <hr></hr>
      <p>
        <button onClick={() => setCount(count + 1)}>
          Click Effect: {count}
        </button>
        <button onClick={() => setTitle("Updated...")}>Update Title</button>
      </p>

      {/* Binding fetched users from API. */}
      <p>
        <h5>Github Users:</h5>
        <ol>
          {users.map((user) => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ol>
      </p>
      <hr></hr>
    </>
  );
}
export default UseEffect;
