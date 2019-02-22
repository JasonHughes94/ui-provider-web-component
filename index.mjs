import express from 'express';
var app = express();
var port = 5003;

app.set('views', 'views')
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(port);
console.log(`App running on port ${port}`);