import  bodyParser   from 'body-parser';
import  cookieParser from 'cookie-parser';
import  Debug        from 'debug';
import  express      from 'express';
import  cors         from 'cors';
import  path         from 'path';
import  logger       from 'morgan';
import  compression  from 'compression';
import  favicon      from 'serve-favicon';
import  expressValidator from 'express-validator';
import  dotenv       from 'dotenv';
import  jwt          from 'jsonwebtoken';
import  moment       from 'moment';
import  request      from 'request';
import  http         from 'http';
import  fileUpload   from 'express-fileupload';
import  fs           from 'fs-extra';

import './config/database';
import './api/models/users';

let  objectID = ('mongodb').Object;

// Load environment vaiables from .env file
dotenv.load();

let app = express();

app.use(cors());
let engines = require('consolidate');
app.set('views', __dirname + '/public');
app.engine('html', engines.mustache);
app.use(compression());
app.use(logger('dev'));
app.use(fileUpload());

app.use('/public', express.static('public'));

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);

  if ('OPTIONS' == req.method) {
    res.send(200);
  } else {
    next();
  }
};
app.use(allowCrossDomain);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb',extended: false}));
app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'html');

let server = http.createServer(app);

let io = require('socket.io').listen(server);
module.exports.io = io;

let Admin = require('./api/models/admin');

require('./api/routes/routes')(app, express);
require('./api/routes/admin/routes')(app, express);




// Production error handler
if (app.get('env') === 'production') {
    app.use(function (err, req, res, next) {
        console.error(err.stack);
        res.sendStatus(err.status || 500);
    });
}

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  err.msg = "Unable to proccess request" ;
  res.status(404).send(err);
});

server.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

export default app;

