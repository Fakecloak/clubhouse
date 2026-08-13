const path = require('node:path');
const express = require('express');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const passport = require('passport');

require("dotenv").config();

const pool = require("./db/pool");

//passport configuration
require('./middleware/passport')

const app = express()

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//session setup
app.use(session({
  store: new pgSession({
    pool,
    createTableIfMissing: true,
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

//passport setup
app.use(passport.initialize());
app.use(passport.session());

//Make current user available in every EJS view
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

//routes
const indexRouter = require("./routes/indexRouter");
app.use("/", indexRouter);



const authRouter = require("./routes/authRouter");
app.use("/auth", authRouter);

const messageRouter = require("./routes/messageRouter");
app.use("/msg", messageRouter);

//server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server app listening on port ${PORT}`)
})