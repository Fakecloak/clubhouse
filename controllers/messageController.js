const db = require("../db/queries");

exports.createMessageGet = (req, res) => {
  res.render("messages/create");
};

exports.createMessagePost = async (req, res, next) => {
  try{
    const {title, message} = req.body;

    await db.createMessage({title, message, user_id: req.user.id,});

    res.redirect("/");
  } catch(err) {
    next(err);
  }
};

exports.deleteMessagePost = async (req, res, next) => {
  try{
    const messageId = req.params.id;

    await db.deleteMessage(messageId);

    res.redirect("/");
  }catch(err) {
    next(err);
  }
};