var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + 'public'));

require('./app/routes')(app);

app.listen(port);

console.log('Node.js server has started on port ' + port);