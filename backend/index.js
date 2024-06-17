const express = require('express');
const dotenv = require('dotenv');
const { Pool } = require('pg');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(express.json());

app.get('/api/navigation', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM navigation');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching navigation content:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});