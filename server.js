var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

const port = 3002;
var app = new express();
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function(req, res) {
    res.sendFile('/search.html', { root: __dirname });


});
app.get('/liff', function(req, res) {

    res.send("0000");
});

app.listen(process.env.PORT || port, function() {
    console.log('Node start on port : ' + port);
});
