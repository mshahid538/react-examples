import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <p>OOP'S...missing </p>{" "}
      <p>
        <Link to="/home">Go to Home</Link>
      </p>
    </>
  );
}
export default NotFound;
