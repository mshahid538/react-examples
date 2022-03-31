import React from "react";
import { BOOKS_LIST } from "../../constants/booksConstants";

function Counter() {
  //useState:
  const [count, setCount] = React.useState(5);
  const [student, setStudent] = React.useState({
    name: "student name",
    age: 44,
    gender: "Male",
  });
  const [books, setBooks] = React.useState(BOOKS_LIST);
  const [isShowBooks, setIsShowBooks] = React.useState(false);

  

  //useMemo
  const TotalBooksAmount = React.useMemo(() => {
    console.log(" useMemo Called");
    //using map()
    // let sum = 0;
    // books.map(book => sum = sum + book.price);
    // return sum;

    //using map()
    // let sum = 0;
    // books.map(book => book.price).map(x => sum = sum + x);
    // return sum;

    //using reduce()
    return books.reduce((prev, curr) => prev + curr.price, 0);
  }, [books]);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <p>
        <h3>useState(): hook used to manage the state.</h3>
        <h4>5-usecases of useState hook:</h4>
        <ul>
          <li>State Management</li>
          <li>Conditional Rendering</li>
          <li>Counters</li>
          <li>Toggle Flags</li>
          <li>Fetch Data from API & Store Local State.</li>
        </ul>
      </p>
      <hr></hr>
      <button onClick={() => setIsShowBooks(!isShowBooks)}>Toggle Books</button>
      <h2>Counter App</h2>
      <label>
        <h3>
          Counter:<span>{count}</span>
        </h3>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </label>

      <h2>Student</h2>
      <h4>Name: {student.name}</h4>
      <h4>age: {student.age}</h4>
      <h4>gender: {student.gender}</h4>
      <button
        onClick={() => {
          setStudent({ ...student, age: 55 });
        }}
      >
        change age
      </button>
      {isShowBooks && (
        <>
          <h2>
            Books <span>Total books price: {TotalBooksAmount}</span>
          </h2>
          <ul>
            {books.map((book) => {
              return (
                <li
                  style={{
                    height: "120px",
                    width: "100%",
                    border: "1px solid #ccc",
                    marginBottom: "20px",
                  }}
                >
                  <h2>Title: {book.name}</h2>
                  <label>Author: Shahid</label> | <label>IBSN: {book.id}</label>
                  <h4>Price: {book.price}$</h4>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
}

export default Counter;
