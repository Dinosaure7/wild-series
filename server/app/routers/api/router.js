const express = require("express");

const router = express.Router();

const sayWelcome = (req, res) => {
    res.send("Welcome to Wild Series !");
  };

  router.get("/", sayWelcome);

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const programsRouter = require("./programs/router");

router.use("/items", itemsRouter);
router.use("/programs", programsRouter);
/* ************************************************************************* */

module.exports = router;
