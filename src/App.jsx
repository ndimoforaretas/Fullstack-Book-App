import { useEffect } from "react";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import store from "./store/Context";

function App() {
  const { getBooks } = store();

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
