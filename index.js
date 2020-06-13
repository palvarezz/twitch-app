const express = require('express');
const app = express();
const tmi = require("tmi.js");
const bodyParser = require('body-parser')
const cors = require("cors")

const messages = [];
let chanName;
//create a  tmi client objects
const client = new tmi.Client({
    connection:{
        secure:true,
        reconnect:true
    },
    identity: {
		username: 'pol',
		password: 'oauth:jq29bcnf415qeazuomxtx8wzb3kh8y'
	},
    channels :["theneedledrop"]
});
client.connect();
//when a message is received log  and store display name and user messages  
//into a message arrat as objects
client.on('message',(channel, tags, message, self) => {
    console.log(`${tags['display-name']}: ${message}`)
    messages.push({
        name: tags['display-name'],
        message: message
    });
    chanName = channel;
});


app.use(express.json());
app.use(cors());
//when front end request meesages send the message store in messages array
//as json back to frontend
app.get("/api/messages",(req,res)=> {
   res.json(messages);
});

app.post("/api/messages",(req,res) =>{
    let msg = req.body.message;
    console.log("Fecth post succeeded")
    console.log(msg);
    client.say(chanName, msg);
    res.redirect('/api/messages');
    
});
//connect to port
let port = 5000;
app.listen(port, function(){
    console.log("Connected on port " + port);
})