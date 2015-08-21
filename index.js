var express = require('express')
var path = require('path')
var app = express()

var port = process.env.PORT || 8080;

var router = express.Router()
var angular = express.Router()
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})
router.get('/angularProjects', function (req, res) {
    res.sendFile(path.join)(__dirname + '/angular/index.html')
})
app.use('/', router)
app.use('/angularProjects', angular)
app.use('/angularProjects' + express.static(__dirname + '/public'))
app.use('/' + express.static(__dirname + 'assets'))

app.listen(port)
