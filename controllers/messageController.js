const db = require("../db/queries");
const { validationResult } = require("express-validator");

exports.createMessageGet = (req, res) => {
  res.render("messages/create", { errors: []});
};

exports.createMessagePost = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).render("messages/create",{
      errors: errors.array(),
    });
  }

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