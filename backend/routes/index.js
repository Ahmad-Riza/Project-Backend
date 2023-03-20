const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("Welcome to home");
});

const packageRouter = require("./package.js");
router.use(packageRouter);

const vehicleRouter = require("./vehicle.js");
router.use(vehicleRouter);

const storeRouter = require("./store.js");
router.use(storeRouter);

module.exports = router;
