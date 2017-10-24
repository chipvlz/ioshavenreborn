var express =require('express')
var app = express()
var server = require('http').Server(app)
const Discord = require('discord.js')
const client = new Discord.Client()
client.login('MzA2ODU5OTgwMDMwNzM4NDQy.DM7jjw.HCQdxCQHxg8M7PHzU2AnpM75Xzs')

client.on('ready', () => {
  // client.user.send('hello!')
  // .then(message => console.log('sent'))
  // .catch(console.error)
  client.channels.find('name', 'general').send('hello!')
  .then(message => console.log('sent'))
  .catch(console.error)
  console.log();
})


const bodyParser  =  require('body-parser')


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// this is one last test

app.post('/', home)


function home(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.json({
    test: 'did it work?'
  })
}

server.listen(4433, ()=>{console.log('Server is ready and listening on port 4433')})
