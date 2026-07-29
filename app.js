const path = require('node:path');
const express = require('express');
const app = express()
require("dotenv").config();

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(express.urlencoded({extended:true}));


//routes
// const indexRouter = require("./routes/indexRouter");

const authRouter = require("./routes/authRouter");
app.use("/auth", authRouter);

// const messageRouter = require("./routes/messageRouter");
// app.use("/msg", messageRouter);










const port = 3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})