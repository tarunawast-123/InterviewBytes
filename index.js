if(process.env.NODE_ENV!=="production")
{
  require("dotenv").config();
}
console.log(process.env.SECRET);
const express = require("express");
const path = require('path');
const http = require('http');
const mongoose = require("mongoose");
const ejs = require("ejs");
const app = express();
const socketio = require('socket.io');

const server=http.createServer(app);
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./util/ExpressError");
const port = 3000; //when deployin to server we will change it to 80

const authRoutes = require('./routes/auth');
// const authRoutes = require('./routes/auth');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
// const csrf = require('csurf');
const flash = require('connect-flash');

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGODB_URI ='mongodb+srv://tarun:air1tarun@cluster0.uij0l.mongodb.net/shop?retryWrites=true&w=majority';
