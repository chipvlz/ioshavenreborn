var express =require('express')
var app = express()
var server = require('http').Server(app)
const bodyParser  =  require('body-parser')
const env = require('./env.json')

const Dropbox = require('dropbox');
const dbx = new Dropbox({ accessToken: env.dropbox });

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.get('/api/apps', api_apps)


function api_apps(req, res) {
  dbx.filesDownload({path: '/json/apps.json'}).then(function(response) {
    let a = response.fileBinary
    a = JSON.parse(a)
    Object.keys(a).forEach(app => {
      if (!a[app].tags) a[app].tags = ''
      if (!a[app].dl) a[app].dl = ''
      if (!a[app].signed) a[app].signed = ''
    })
    res.json(a)
  })
}

server.listen(4433, ()=>{console.log('Server is ready and listening on port 4433')})
