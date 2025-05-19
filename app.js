
var express = require('express')
, routes = require ('./routes')
var app = express();







// view engine setup
app.set('views',(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',routes.index);
app.get('/usuarios', routes.user.index);

app.listen(300,function(){
  console.log("Ntalk no ar.")
})



