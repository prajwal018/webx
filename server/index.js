const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

const db = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'Starboylover@1',
	database: 'cruddatabase',
});

db.getConnection((err, connection) => {
	if (err) {
		console.error('Error connecting to MySQL database: ', err);
		return;
	}
	console.log('Connected to MySQL database.');
	connection.release();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
	res.send('hello world');
});
app.post('/', (req, res) => {
	const { name, email, comment } = req.body;
	const sql = 'INSERT INTO comments (name, email, comment) VALUES (?, ?, ?)';
	db.query(sql, [name, email, comment], (err, results) => {
		if (err) {
			console.log(err);
			res.status(500).send('Error submitting comment');
		} else {
			console.log(results);
			res.status(200).send('Comment submitted successfully');
		}
	});
});

const port = 3001;
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
