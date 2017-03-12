var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var chatCtrl = require('./controllers/chatCtrl');
var secret = require('./secrets')
var port = 3737;

// TODO server front end files with static
app.use(express.static('../public'))

app.use(bodyParser.json());

// TODO Initialize Session
app.use(session({
  secret: 'secret.hidden',
  resave: true,
  saveUninitialized: true
}))

app.post("/api/screenname", function(req, res){
  console.log("body: " + req.body.screenname);
  req.session.screenname = req.body.screenname;
  res.end();
})

app.get("/api/chats", chatCtrl.getChats);
app.post("/api/chats", chatCtrl.postChats);
app.delete("/api/chats", chatCtrl.deleteChats);



app.listen(port, function(){
  console.log("Listeing on port ", port, " INSERT-WITTY-STATEMENT-HERE");
});
