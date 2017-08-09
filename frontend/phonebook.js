var express = require('express');
var router = express.Router();
var path = require('path');


/*router.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/public/phonebook.html'));
});*/

router.get('/getAllContacts', function(req, res){
	var v={"contactList":[{"id":1,"name":"Sarah","phone":"543-524-5925","img":"https://randomuser.me/api/portraits/thumb/women/1.jpg"},{"id":2,"name":"Vincent","phone":"543-545-2552","img":"https://randomuser.me/api/portraits/thumb/men/6.jpg"},{"id":3,"name":"Judy","phone":"876-352-7483","img":"https://randomuser.me/api/portraits/thumb/women/2.jpg"},{"id":4,"name":"Patrick","phone":"847-363-8494","img":"https://randomuser.me/api/portraits/thumb/men/1.jpg"},{"id":5,"name":"Leah","phone":"534-545-3255","img":"https://randomuser.me/api/portraits/thumb/women/3.jpg"},{"id":6,"name":"Vanessa","phone":"543-525-4352","img":"https://randomuser.me/api/portraits/thumb/women/4.jpg"},{"id":7,"name":"Angel","phone":"352-543-4525","img":"https://randomuser.me/api/portraits/thumb/men/2.jpg"},{"id":8,"name":"DJ","phone":"282-827-3738","img":"https://randomuser.me/api/portraits/thumb/men/3.jpg"},{"id":9,"name":"John","phone":"294-857-3928","img":"https://randomuser.me/api/portraits/thumb/men/4.jpg"},{"id":10,"name":"Mike","phone":"973-626-0183","img":"https://randomuser.me/api/portraits/thumb/men/5.jpg"}]};
	res.json(v);
});


module.exports = router;