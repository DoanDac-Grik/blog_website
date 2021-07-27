const express = require('express');
const app = express(); 
const port = 3000;
const db = require('./config/db');
const morgan =require('morgan');
const route =require ('./routes/index.js');

//Connect mongodb
db.connect();
//HTTP log
app.use(morgan('combined'));
//Set public folder. Note: '/public' behinds express.static
app.use('/public',express.static('public'));
//Set view engine
app.set('view engine','ejs');
//Body-parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//Instead of using app.use([path], middlewware). Spreading file to route folder
route(app);
//Listen req tới server
app.listen(port,()=> console.log(`App listening on port ${port}`));
