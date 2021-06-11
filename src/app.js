const express = require('express');
const logger = require('morgan');
const path = require('path');
const routes = require('./routes');
const port = 3000;
const app = express();
const db = require('./config/db/index');
const cookieParser = require('cookie-parser');

app.set('views', path.join(__dirname, 'resources', 'views', 'pages'));
app.set('view engine', 'ejs');
//log
app.use(logger('dev'));
//middle wware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());
//static file
app.use(express.static(path.join(__dirname, 'public')));
//routes
routes(app);
//connect to db
db.connect();
//app listen
app.set('port', process.env.PORT || 80);
app.listen(app.get('port'), () => {
     console.log('App listening on port ' + app.get('port'));
});
