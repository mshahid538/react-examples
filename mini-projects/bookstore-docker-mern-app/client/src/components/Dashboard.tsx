import React from "react";
import { Typography } from "@material-ui/core"; 
import { getAllBooks } from "../services/BookService";

const Dashboard = ({ userInfo, logout }: any) => {
  const [books, setBooks] = React.useState<any>([]);

  React.useEffect(() => {
    const getBooks = async () => {
      const res = await getAllBooks();
      setBooks(res.data);
    };

    getBooks();
  }, []);

  const logoutHandle = () => {
    logout();
  };

  return (
    <div style={{ width: "600px", margin: "20px auto" }}>
      <div>
        <Typography variant="h3">
          Dashboard [{userInfo?.user?.fullname}]
        </Typography>
      </div>
      <button onClick={logoutHandle}>Logout</button>
      <div>
        <h3>Books Details</h3>

        {books &&
          books.map((book: any) => {
            return (
              <div
                key={book._id}
                style={{
                  padding: "20px",
                  border: "1px solid #ccc",
                  marginBottom: "10px",
                }}
              >
                <h3>{book.title}</h3>
                <ul>
                  <li>Isbn: {book.isbn}</li>
                  <li>Title: {book.title}</li>
                  <li>Author: {book.author}</li>
                  <li>Price: {book.price}</li>
                </ul>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Dashboard;
