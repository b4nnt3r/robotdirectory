const express = require('express');
const mustacheExpress = require('mustache-express');
const robot = require('./robot_data.json');
const app = express();
app.use(express.static('public'))

app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');


app.get('/', function(request, response) {
  response.render('index', {
    robots: robot.users
  });
});

app.get('/details', function(request, response) {
  response.render('details', {
    robots: robot.users
  });
});


app.get('/:username', function (request, response) {
  const user = robot.users.find(function (user) { return user.username === request.params.username })
    response.render('profile', { robots: user});
  });


app.listen(3000, function() {
  console.log('Robot app listening on port 3000');
});
