import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UseState from "./components/usestate/UseState";
import UseEffect from "./components/useeffect/UseEffect";
import UseRef from "./components/useref/UseRef";
import UseMemo from "./components/usememo/UseMemo";
import UseContext from "./components/usecontext/UseContext";
import UseCallback from "./components/usecallback/UseCallback";
import UseReducer from "./components/usereducer/UseReducer";

function App() {
  return (
    <>
      <h3>What are Hooks?</h3>
      Hooks allow us to "hook" into React features such as state and lifecycle
      methods. Hooks were added to React in version 16.8. Hooks allow function
      components to have access to state and other React features. Because of
      this, class components are generally no longer needed.
      <p>
        <Route path="/usestate" element={<UseState />}></Route>
      </p>
      <BrowserRouter>
        <Routes>
          <Route path="/usestate" element={<UseState />}></Route>
          <Route path="/useeffect" element={<UseEffect />}></Route>
          <Route path="/useref" element={<UseRef />}></Route>
          <Route path="/usememo" element={<UseMemo />}></Route>
          <Route path="/usecontext" element={<UseContext />}></Route>
          <Route path="/useCallback" element={<UseCallback />}></Route>
          <Route path="/usereducer" element={<UseReducer />}></Route>
        </Routes>
        <ul>
          <li>
            <Link to="/usestate">useState</Link>
          </li>
          <li>
            <Link to="/useeffect">useEffect</Link>
          </li>
          <li>
            <Link to="/useref">useRef</Link>
          </li>
          <li>
            <Link to="/usememo">useMemo</Link>
          </li>
          <li>
            <Link to="/usecontext">useContext</Link>
          </li>
          <li>
            <Link to="/usecallback">useCallback</Link>
          </li>
          <li>
            <Link to="/usereducer">useReducer</Link>
          </li>
        </ul>
      </BrowserRouter>
    </>
  );
}

export default App;
