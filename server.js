const express = require('express');
const mySql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

const connection = mySql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '//123456789',
  database: 'advertisement',
});

connection.connect();

app.use(bodyParser.json());
app.use(cors());


app.get('/products', (req, res) => {
  try {
    const sql = 'SELECT * FROM products';
    connection.query(sql, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/add', (req, res) => {
  try {
    const { title, store, photo, latitude, longitude} = req.body;

    const sql = 'INSERT INTO products (title, store, photo, latitude, longitude) VALUES (?, ?, ?, ?, ?)';
    connection.query(sql, [title, store, photo, latitude, longitude], (err, result) => {
      if (err) throw err;

      console.log('Record inserted:', result);
      res.json({ message: 'Data successfully inserted into the database' });
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
