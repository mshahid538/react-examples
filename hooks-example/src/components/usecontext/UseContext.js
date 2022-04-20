import MyComponent from "./MyComponent";

const myStyles = {
  border: "1px solid #000",
};
function UseContext() {
  return (
    <>
      <h3>
        The React context provides data to components no matter how deep they
        are in the components tree. The context is used to manage global data,
        e.g. global state, theme, services, user settings, and more.
      </h3>
      <p>
        <h3>
          <a
            href="https://dmitripavlutin.com/react-context-and-usecontext/#:~:text=The%20React%20context%20provides%20data,%2C%20user%20settings%2C%20and%20more."
            target="noref"
            rel="norefferer noopener"
          >
            Click to Read
          </a>
        </h3>
      </p>
      <p>
        <h3>Props Drilling Problem:</h3>
        <>
          You can see the problem: because UserInfo component renders deep down
          in the tree, and all the parent components Layout Header have to pass
          the userName prop. This problem is also known as props drilling.
        </>
      </p>
      <p>
        React context requires 3 actors: the context, the provider extracted
        from the context, and the consumer.
      </p>
      <p>
        <ul>
          UseCases of useContext()
          <li>global state</li>
          <li>theme</li>
          <li>application configuration</li>
          <li>authenticated user name</li>
          <li>user settings</li>
          <li>preferred language</li>
          <li>a collection of services</li>
        </ul>
      </p>
      <div style={myStyles}>
        <MyComponent />
      </div>
    </>
  );
}

export default UseContext;
