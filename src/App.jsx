import { useState } from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log("You have submitted the following:", title);
  };
  return (
    <div>
      <h1>Helloo</h1>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
