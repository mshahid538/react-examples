//Basic Example of useContext() hook. You can also uncomment the below section for advance understanding when Context Updated.
// import { useContext, createContext } from "react";
// const myContext = createContext("Unknown");

// // function MyComponent() {
//   const userName = "John Smith";
//   return (
//     <myContext.Provider value={userName}>
//       <Layout>Main content</Layout>
//     </myContext.Provider>
//   );
// }

// function Layout({ children }) {
//   return (
//     <div>
//       <Header />
//       <main>{children}</main>
//     </div>
//   );
// }

// function Header() {
//   return (
//     <header>
//       <UserInfo />
//     </header>
//   );
// }

// function UserInfo() {
//   const userName = useContext(myContext);
//   return <span>{userName}</span>;
// }

// Updating the Context : uncomment below lines
import { createContext, useState, useContext, useMemo } from "react";
const UserContext = createContext({
  userName: "",
  setUserName: () => {},
});
function MyComponent() {
  const [userName, setUserName] = useState("John Smith");
  const value = useMemo(() => ({ userName, setUserName }), [userName]);

  return (
    <UserContext.Provider value={value}>
      <UserNameInput />
      <UserInfo />
    </UserContext.Provider>
  );
}
function UserNameInput() {
  const { userName, setUserName } = useContext(UserContext);
  const changeHandler = (event) => setUserName(event.target.value);
  return <input type="text" value={userName} onChange={changeHandler} />;
}
function UserInfo() {
  const { userName } = useContext(UserContext);
  return <span>{userName}</span>;
}

export default MyComponent;
