import store from "../store/Context";
import BookShow from "./BookShow";

function BookList() {
  //--host 127.0.0.1

  const { books } = store();

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  const noBooks = <h2>Your Booklist is empty!</h2>;

  return (
    <div className="book-list">
      {books.length !== 0 ? renderedBooks : noBooks}
    </div>
  );
}

export default BookList;
