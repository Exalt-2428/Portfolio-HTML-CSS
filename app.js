const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

// Parse incoming JSON data
app.use(bodyParser.json());

// PostgreSQL database connection setup
const pool = new Pool({
  user: 'your_db_user',
  host: 'localhost',
  database: 'your_db_name',
  password: 'your_db_password',
  port: 5433,
});

// Hire Me Form Submission
app.post('/hire-me', (req, res) => {
  const { fullName, emailAddress } = req.body;

  // Save the data to the PostgreSQL database
  const query = 'INSERT INTO hire_me (full_name, email_address) VALUES ($1, $2)';
  pool.query(query, [fullName, emailAddress], (error, result) => {
    if (error) {
      console.error('Error executing query:', error);
      return res.status(500).json({ error: 'An error occurred while submitting the form.' });
    }
    res.status(200).json({ message: 'Form submitted successfully!' });
  });
});

// Let's Talk Form Submission
app.post('/lets-talk', (req, res) => {
  const { fullName, mobileNumber, emailSubject } = req.body;

  // Save the data to the PostgreSQL database
  const query = 'INSERT INTO lets_talk (full_name, mobile_number, email_subject) VALUES ($1, $2, $3)';
  pool.query(query, [fullName, mobileNumber, emailSubject], (error, result) => {
    if (error) {
      console.error('Error executing query:', error);
      return res.status(500).json({ error: 'An error occurred while submitting the form.' });
    }
    res.status(200).json({ message: 'Form submitted successfully!' });
  });
});

// Contact Form Submission
app.post('/contact', (req, res) => {
  const { fullName, emailAddress, mobileNumber, emailSubject, message } = req.body;

  // Save the data to the PostgreSQL database
  const query =
    'INSERT INTO contact (full_name, email_address, mobile_number, email_subject, message) VALUES ($1, $2, $3, $4, $5)';
  pool.query(query, [fullName, emailAddress, mobileNumber, emailSubject, message], (error, result) => {
    if (error) {
      console.error('Error executing query:', error);
      return res.status(500).json({ error: 'An error occurred while submitting the form.' });
    }
    res.status(200).json({ message: 'Form submitted successfully!' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
