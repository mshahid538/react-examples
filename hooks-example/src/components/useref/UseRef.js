import React from "react";

function UseRef() {
  // Example#-01--------
  // Initialized a hook to hold the reference to the title div.
  const titleRef = React.useRef();

  React.useEffect(function () {
    setTimeout(() => {
      titleRef.current.textContent = "Updated Text";
    }, 2000); // Update the content of the element after 2seconds
  }, []);
  //---------------------

  // Example#2 Shallow Rendering-----------
  const userAvatar = (props) => {
    return <img alt="#" src={props.src} />;
  };

  const userName = (props) => {
    return <span>{props.name}</span>;
  };

  const user = React.useRef({
    name: "Aleem Isiaka",
    avatarURL: "https://icotar.com/avatar/jake.png?bg=e91e63",
  });

  React.useEffect(() => {
    setTimeout(() => {
      user.current = {
        name: "Isiaka Aleem",
        avatarURL: "https://icotar.com/avatar/craig.png?s=50", // a new image
      };
    }, 5000);
  });

  console.log("Original Name", user.current.name);
  console.log("Original Avatar URL", user.current.avatarURL);
  //----------------------------

  return (
    <>
      <h3>
        useRef(): The useRef hook allows you to persist values between renders.
      </h3>
      <h4>
        It can be used to store a mutable value that does not cause a re-render
        when updated. It can be used to access a DOM element directly.
      </h4>
      <h5>
        useState() vs useRef(): useState will re-render the component but
        useRef() will not.
      </h5>
      <ul>
        Use Cases for useRef() hooks:
        <li>If you want to count anything without re-render a component.</li>
        <li>Get html element focused.</li>
        <li>To access the DOM: div ref=myRef</li>
        <li>
          A value to be used in setTimeout / setInterval without re-rendering
          the component.
        </li>
        <li>Track previous state values.</li>
      </ul>

      <p>
        <h4>SHALLOW AND DEEP RERENDER</h4>
        In React, there are two rendering mechanisms, shallow and deep
        rendering. Shallow rendering affects just the component and not the
        children, while deep rendering affects the component itself and all of
        its children. When an update is made to a ref, the shallow rendering
        mechanism is used to re-render the component.
      </p>

      <p>
        const refObject = useRef(0) console.log(refObject) will return:
        current:0
      </p>

      <p>
        <div className="title" ref={titleRef}>
          Original title
        </div>
      </p>

      <div>
        <userAvatar name={user.name} />
        <userName src={user.avatarURL} />
      </div>

      <hr></hr>
    </>
  );
}
export default UseRef;
