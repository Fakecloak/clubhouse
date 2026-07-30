const { Router } = require('express');
const messageController = require('../controllers/messageController');

const messageRouter = Router();

messageRouter.get("/", (req,res) =>{
    res.send("msg router works");
});

module.exports = messageRouter; 