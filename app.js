
const express = require('express');
const cors = require('cors');
const dbConnection = require('./db-connect');
const { pool } = require('mssql');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/api/artists', (req, res) => {

  const query = req.query.q.toLowerCase();

  console.log(query);

  pool.query('SELECT * FROM artists WHERE name LIKE $1', [`%${query}%`], (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.status(200).json(results.rows);
    }
  });

});


app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
