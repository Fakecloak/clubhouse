const { Router } = require('express');
const messageController = require('../controllers/messageController');
const { ensureAuthenticated } = require('../middleware/authMiddleware');
const { ensureAdmin } = require('../middleware/adminMiddleware');
const { validateMessage } = require('../middleware/validation');

const messageRouter = Router();

// messageRouter.get("/", (req,res) =>{
//     res.send("msg router works");
// });

messageRouter.get("/new", ensureAuthenticated, messageController.createMessageGet);
messageRouter.post("/new", ensureAuthenticated, validateMessage, messageController.createMessagePost);
messageRouter.post("/:id/delete", ensureAdmin, messageController.deleteMessagePost);
module.exports = messageRouter; 