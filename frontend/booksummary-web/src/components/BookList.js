import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, deleteBook } from '../redux/booksSlice';

function BookList() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const bookStatus = useSelector((state) => state.books.status);
  const error = useSelector((state) => state.books.error);
  const currentPage = useSelector((state) => state.books.currentPage);
  const totalPages = useSelector((state) => state.books.totalPages);
  const [sortBy, setSortBy] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    dispatch(fetchBooks({ page: currentPage, limit: 5, sortBy, sortOrder }));
  }, [dispatch, currentPage, sortBy, sortOrder]);

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  if (bookStatus === 'loading') {
    return <div>Loading...</div>;
  }

  if (bookStatus === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <h2 className="my-4">Book Summaries</h2>
      <div className="list-group">
        {books.map((book) => (
          <div className="list-group-item d-flex justify-content-between" key={book._id}>
            <div>
              <h5>{book.title}</h5>
              <p>{book.summary.slice(0, 100)}...</p>
            </div>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(book._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="pagination mt-3">
        <button
          className="btn btn-secondary"
          onClick={() => dispatch(fetchBooks({ page: currentPage - 1, limit: 5, sortBy, sortOrder }))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="mx-2">{currentPage} / {totalPages}</span>
        <button
          className="btn btn-secondary"
          onClick={() => dispatch(fetchBooks({ page: currentPage + 1, limit: 5, sortBy, sortOrder }))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default BookList;
