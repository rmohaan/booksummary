import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for adding a new book
export const addBook = createAsyncThunk('books/addBook', async (book) => {
    const response = await axios.post('http://localhost:5000/api/books', book);
    return response.data;
});  

// Async thunk for fetching books from the API (with pagination and sorting)
export const fetchBooks = createAsyncThunk('books/fetchBooks', async (params) => {
  const { page, limit, sortBy, sortOrder } = params;
  const response = await axios.get('http://localhost:5000/api/books', {
    params: {
      page,
      limit,
      sortBy,
      sortOrder,
    },
  });
  return response.data;
});

// Async thunk for deleting a book
export const deleteBook = createAsyncThunk('books/deleteBook', async (id) => {
  await axios.delete(`http://localhost:5000/api/books/${id}`);
  return id; // Return the book ID to be removed from the state
});

// Create a slice for books
const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    status: 'idle',
    error: null,
    totalBooks: 0,
    totalPages: 0,
    currentPage: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch books actions
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload.books;
        state.totalBooks = action.payload.totalBooks;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Delete book actions
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book._id !== action.payload);
      });
  },
});

export default booksSlice.reducer;