const {Router} = require("express");
const indexController = require("../controllers/indexController");
const { ensureAuthenticated } = require("../middleware/authMiddleware");

const indexRouter = Router();

indexRouter.get("/", indexController.indexGet);

indexRouter.get("/join", ensureAuthenticated, indexController.joinGet);
indexRouter.post("/join", ensureAuthenticated, indexController.joinPost);

module.exports = indexRouter;
