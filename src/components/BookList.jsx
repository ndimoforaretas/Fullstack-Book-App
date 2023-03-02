import store from "../store/Context";
import BookShow from "./BookShow";

function BookList() {
  //--host 127.0.0.1

  const { books } = store();
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
