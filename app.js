// setup application
let express = require('express');
let Res = require('express-resource');
let app = express();
let path = require('path');

app.use('/', express.static(path.join( __dirname, '/public')));
// register REST controllers
app.resource('qrlabels', require('./controllers/qrlabel'), {id: 'id'})

// start application
app.listen(3003)