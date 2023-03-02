import axios from "axios";
import { createContext, useState, useContext } from "react";

const BookContext = createContext();

export function ParentContext({ children }) {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.put(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const value = { books, getBooks, editBookById, deleteBookById, createBook };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
}

const store = () => useContext(BookContext);
export default store;
