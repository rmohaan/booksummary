import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Updated import
import '../css/LandingPage.css'; // custom CSS for additional styling

function LandingPage() {
  const navigate = useNavigate(); // useNavigate hook to navigate

  const goToBookList = () => {
    navigate('/booklist'); // Navigate to the book list page
  };

  const goToBookForm = () => {
    navigate('/add-book'); // Navigate to the add book form page
  };

  return (
    <div className="landing-page">
      <div className="overlay">
        <div className="container text-center text-white">
        <h1 className="display-4 mt-5">Welcome to the Book Summary App</h1>
      <p className="lead">Get book summaries and explore your favorite books</p>
      <div className="mt-4">
        <Link to="/book-summary" className="btn btn-light btn-lg mx-2">Get Book Summary</Link>
        <Link to="/booklist" className="btn btn-light btn-lg mx-2">Explore Book List</Link>
      </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
