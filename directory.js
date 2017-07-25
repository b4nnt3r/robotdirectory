const express = require('express');
const mustacheExpress = require('mustache-express');
const robot = require('./robot_data.json');
const app = express();

app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

// app.get('/', function(request, response) {
//   let i;
//   response.send(robot.users[1].name);
// });

app.get('/index', function(request, response){
  response.render('index', { robots: robot.users});
});

app.get('/single', function(request, response){
  response.render('index', { robots: robot.users});
});

app.get('/index/:id', function(request, response) {
  let person = robot.find(function(member) {
    return member.name.toLowerCase() === request.params.id;
  });
  response.render('index', person)
});



app.listen(3000, function() {
  console.log('Robot app listening on port 3000');
});
