import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
  //--host 127.0.0.1
  const renderedBooks = books.map((book) => {
    return (
      <BookShow onDelete={onDelete} onEdit={onEdit} key={book.id} book={book} />
    );
  });
  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
