
const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('public'))
app.set('views', './');
app.set('view engine', 'ejs');
const connection = mysql.createConnection({
    host: "nagpdatabase.ccq7lxbjhtoi.ap-south-1.rds.amazonaws.com",
    user: "admin",
    database: "nagp",
    password: "Sakshisea"
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






