import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import BookSummaryPage from './components/BookSummaryPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/booklist" element={<BookList />} />
          <Route path="/book-summary" element={<BookSummaryPage />} />
          <Route path="/add-book" element={<BookForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
