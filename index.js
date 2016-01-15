var express = require('express')
var path = require('path')
var app = express()

var port = process.env.PORT || 8080;

var router = express.Router()

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})
router.get('/termsofservice', function(req, res){
    res.sendFile(path.join(__dirname + '/termsofservice.html'))
})
router.get('/privacypolicy', function(req, res){
    res.sendFile(path.join(__dirname + '/privacypolicy.html'))
})
app.use('/', router)

app.use(express.static('assets'))

app.listen(process.env.PORT)
