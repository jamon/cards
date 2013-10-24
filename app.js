var express = require('express');

var app = express();

// configure Express
app.configure(function() {
  app.use(express.logger());
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.static('www'));
});



app.listen(process.env.PORT);