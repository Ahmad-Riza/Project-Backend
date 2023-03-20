const { Router } = require("express");
const packageRouter = Router();
const PackageController = require("../controllers/PackageController.js");

packageRouter.get("/package", PackageController.getAllItems);
packageRouter.post("/package/add", PackageController.createItems);
packageRouter.put("/package/edit/:id", PackageController.editItems);
packageRouter.delete("/package/remove/:id", PackageController.removeItems);
packageRouter.get("/package/detail/:id", PackageController.getDetailsById);

module.exports = packageRouter;
