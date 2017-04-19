var express = require('express'); 	//call express
var app	= express();	//define our app using express

var port = process.env.PORT || 8080; //set our port

var router = express.Router(); //get an instance of the express router

router.get('/', function(req, res){
	res.json({
		"GroupName": "D",
		"Count": 4,
		"teams":[{
			"country": "England",
		},{
			"country": "Pakistan",
		},{
			"country": "Sri Lanka",
		},{
			"Country": "India"
		}]

	});
});

app.use('/api', router); //register our routes
app.listen(port); 	// start the server
console.log('magic happens on port' + port);