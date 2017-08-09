var express = require('express');
var app = express();

/*
var ejs = require('ejs');
 ejs.open = '{{';
 ejs.close = '}}';
 */

var phonebook = require('./phonebook.js');
app.use('/phonebook', phonebook);

/*var todo = require('./todo.js');
app.use('/todo', todo);*/

app.use(express.static('public'));
app.use(express.static('node_modules'));


app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/public/index.html'));
});


app.get('/ping', function(req, res) {
	res.send('Pong');
});





app.listen(process.env.PORT || 9001);
