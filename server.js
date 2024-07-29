// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const cors = require('cors');
// // const mysql = require('mysql2');

// // const app = express();
// // const port = 3000;

// // app.use(bodyParser.json());
// // app.use(cors());

// // const pool = mysql.createPool({
// //   connectionLimit: 10, // Maximum number of connections in the pool
// //   host: '127.0.0.1', // or your MySQL server address
// //   user: 'root', // your MySQL username
// //   password: 'Pradnya@02', // your MySQL password
// //   database: 'questionDB',
// //   port: 3306 // MySQL default port
// // });

// // app.get('/', (req, res) => {
// //   pool.query('SELECT * FROM questions', (error, results) => {
// //     if (error) {
// //       res.status(500).json({ message: error.message });
// //     } else {
// //       res.json(results);
// //       console.log(results)
// //     }
// //   });
// // });

// // app.listen(port, () => {
// //   console.log(`Server running at http://localhost:${port}`);
// // });

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mysql = require('mysql');

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Pradnya@02',
//   database: 'questionsdb'
// });

// db.connect((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('MySQL connected...');
// });

// app.get('/questions', (req, res) => {
//   const sql = 'SELECT * FROM questions';
//   db.query(sql, (err, results) => {
//     if (err) throw err;
//     res.send(results);
//   });
// });

// app.post('/questions', (req, res) => {
//   const question = req.body;
//   const sql = 'INSERT INTO questions SET ?';
//   db.query(sql, question, (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

// app.put('/questions/:id', (req, res) => {
//   const question = req.body;
//   const sql = 'UPDATE questions SET ? WHERE id = ?';
//   db.query(sql, [question, req.params.id], (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

// app.delete('/questions/:id', (req, res) => {
//   const sql = 'DELETE FROM questions WHERE id = ?';
//   db.query(sql, [req.params.id], (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mysql = require('mysql');

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Pradnya@02',
//   database: 'questionsdb'
// });

// db.connect((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('MySQL connected...');
// });

// app.get('/questions', (req, res) => {
//   const sql = 'SELECT * FROM questions';
//   db.query(sql, (err, results) => {
//     if (err) throw err;
//     res.send(results);
//   });
// });

// app.post('/questions', (req, res) => {
//   const question = req.body;
//   const sql = 'INSERT INTO questions SET ?';
//   db.query(sql, question, (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

// app.put('/questions/:id', (req, res) => {
//   const question = req.body;
//   const sql = 'UPDATE questions SET ? WHERE id = ?';
//   db.query(sql, [question, req.params.id], (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

// app.delete('/questions/:id', (req, res) => {
//   const sql = 'DELETE FROM questions WHERE id = ?';
//   db.query(sql, [req.params.id], (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors());

// app.get('/questions', (req, res) => {
//   res.json([{ id: 1, title: 'Sample Question', description: 'Description' }]);
// });

// app.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Create MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10, // Maximum number of connections in the pool
  host: '127.0.0.1', // MySQL server address
  user: 'root', // MySQL username
  password: 'Pradnya@02', // MySQL password
  database: 'questionDB',
  port: 3306 // MySQL default port
});

// Route to get all questions
app.get('/questions', (req, res) => {
  pool.query('SELECT * FROM questions', (error, results) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.json(results);
      console.log(results); // Optional: Log results to the console
    }
  });
});

// Route to add a question
app.post('/questions', (req, res) => {
  const { title, description } = req.body;
  pool.query('INSERT INTO questions (title, description) VALUES (?, ?)', [title, description], (error, results) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(201).json({ id: results.insertId, title, description });
    }
  });
});

// Route to update a question
app.put('/questions/:id', (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  pool.query('UPDATE questions SET title = ?, description = ? WHERE id = ?', [title, description, id], (error, results) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.json({ id, title, description });
    }
  });
});

// Route to delete a question
app.delete('/questions/:id', (req, res) => {
  const { id } = req.params;
  pool.query('DELETE FROM questions WHERE id = ?', [id], (error, results) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(204).end(); // No content
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
