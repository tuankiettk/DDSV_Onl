const siteRoute = require('./site');
const classRoute = require('./class');
const subjectRoute = require('./subject');
const studentRoute = require('./student');
const attendanceRoute = require('./attendance');
const statisticalRoute = require('./statistical');


function route(app){
     app.use('/', siteRoute);
     app.use('/', classRoute);
     app.use('/', subjectRoute);
     app.use('/', studentRoute);
     app.use('/', attendanceRoute);
     app.use('/', statisticalRoute);

}

module.exports = route;