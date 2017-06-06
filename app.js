var express = require("express");
var app = express();
var request = require("request"); // must require request for any API work
app.set("view engine", "ejs");
app.use(express.static("public")); //serve up custom style sheet


app.get("/", function(req, res){
	request("https://localbitcoins.com/bitcoinaverage/ticker-all-currencies/", function(error, response, body){
		if(!error && response.statusCode == 200){
			var data = JSON.parse(body)
			res.render("index", {data: data});
		}
	});
});

app.listen(80, function(){
    console.log("Bitcoin Template Has Started");
});