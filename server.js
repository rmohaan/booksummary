const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Book = require('./models/Book'); 
const seedDB = require('./preSeedData/seedData.js');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json()); // For parsing application/json

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// MongoDB connection
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected')
    //seedDB.seedDB(MONGO_URI)
    })
  .catch((err) => console.log("---Mongo connection failed----", err));


// Routes
// Route to get books with pagination and sorting
app.get('/api/books', async (req, res) => {
    const { page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'asc' } = req.query;
  
    try {
      // Convert page and limit to numbers
      const pageNum = parseInt(page);
      const limitNum = parseInt(limit);
  
      // Build sort object
      const sortObject = {};
      sortObject[sortBy] = sortOrder === 'asc' ? 1 : -1; // 1 for ascending, -1 for descending
  
      // Fetch books with pagination and sorting
      const books = await Book.find()
        .sort(sortObject)
        .skip((pageNum - 1) * limitNum)
        .limit(limitNum);
  
      // Get the total count of books for pagination
      const totalBooks = await Book.countDocuments();
  
      res.json({
        books,
        totalBooks,
        totalPages: Math.ceil(totalBooks / limitNum),
        currentPage: pageNum,
      });
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch books' });
    }
  });
  

app.post('/api/books', async (req, res) => {
  const { title, author, summary, genre } = req.body;
  const newBook = new Book({ title, author, summary, genre });
  try {
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get('/api/books/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/getBookSummary', async (req, res) => {
    const { bookName } = req.body;

    if (!bookName) {
        return res.status(400).send('Book name is required');
    }

    try {

        const existingBook = await Book.findOne({ title: new RegExp(bookName, 'i') });

        if (existingBook) {
            return res.json({ summary: existingBook.summary });
        }

        const response = await axios.post(
            'https://api.openai.com/v1/completions',
            {
                model: 'gpt-3.5-turbo', // Or any latest model
                prompt: `Provide a brief summary of the book: ${bookName}`,
                max_tokens: 150,
                temperature: 0.7,
            },
            {
                headers: {
                    'Authorization': process.env.API_KEY
                }
            }
        );

        // Return the generated summary
        const summary = response.data.choices[0].text.trim();
        res.json({ summary });
    } catch (error) {
        console.error('Error fetching summary:', error);
        res.status(500).send('Failed to get summary');
    }
});

app.delete('/api/books/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const book = await Book.findByIdAndDelete(id);
      if (!book) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.status(200).json({ message: 'Book deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete book' });
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});