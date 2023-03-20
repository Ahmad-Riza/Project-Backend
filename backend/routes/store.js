const { Router } = require("express");
const storeRouter = Router();
const StoreController = require("../controllers/StoreController.js");

storeRouter.get("/store", StoreController.getAllItems);
storeRouter.post("/store/add", StoreController.createItems);
storeRouter.put("/store/edit/:id", StoreController.editItems);
storeRouter.delete("/store/remove/:id", StoreController.removeItems);
storeRouter.get("/store/detail/:id", StoreController.getDetailsById);

module.exports = storeRouter;
