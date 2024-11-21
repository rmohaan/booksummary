import React, { useState } from 'react';
import axios from 'axios';

const BookSummaryPage = () => {
  const [bookName, setBookName] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleBookNameChange = (e) => {
    setBookName(e.target.value);
  };

  const fetchSummary = async () => {
    setLoading(true);
    setError('');
    setSummary('');
    
    try {
      const response = await axios.post('http://localhost:5000/api/getBookSummary', {
        bookName: bookName
      });
      setSummary(response.data.summary);
    } catch (err) {
      setError('Failed to fetch summary');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1>Get Book Summary</h1>
        <p>Enter the book name and get a brief summary</p>
      </div>
      
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter book name"
          value={bookName}
          onChange={handleBookNameChange}
        />
      </div>

      <button className="btn btn-primary" onClick={fetchSummary} disabled={loading}>
        {loading ? 'Fetching...' : 'Get Summary'}
      </button>

      {error && <div className="mt-3 alert alert-danger">{error}</div>}

      {summary && (
        <div className="mt-3">
          <h4>Summary:</h4>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default BookSummaryPage;
