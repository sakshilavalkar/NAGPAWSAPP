
const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('public'))
app.set('views', './');
app.set('view engine', 'ejs');
const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DATABASE,
    password: process.env.MYSQL_PWD
});



app.get('/', async (req, res) => {
    connection.query(
        'select * from posts',
        (err, results, fields) => {
            if (!err) {
                res.render('index', { articles: results });
            }
        }
    );
});




//Starting app
app.listen(PORT, () => {
    console.log(`Listening on port : ${PORT}`);
});






