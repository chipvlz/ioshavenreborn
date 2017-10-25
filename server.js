var express =require('express')
var app = express()
var server = require('http').Server(app)
const bodyParser  =  require('body-parser')
const env = require('./env.json')

const Dropbox = require('dropbox');
const dbx = new Dropbox({ accessToken: env.dropbox });

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  next();
});

app.get('/api/apps/:type', api_apps)
app.post('/api/apps/:mode', api_apps_save)


function api_apps(req, res) {
  dbx.filesDownload({path: '/json/'+req.params.type+'.json'}).then(function(response) {
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

function api_apps_save(req, res) {
  let file = (req.params.mode === 'live') ? 'live' : 'saved'
  dbx.filesUpload({
    path: '/json/'+file+'.json',
    contents: JSON.stringify(req.body.apps),
    mode: 'overwrite'
  }).then(response => {
    res.json(req.body.apps)
  }).catch(err=>{
    res.json(err)
  })

}

server.listen(4433, ()=>{console.log('Server is ready and listening on port 4433')})
