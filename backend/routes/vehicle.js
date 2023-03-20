const { Router } = require("express");
const vehicleRouter = Router();
const VehicleController = require("../controllers/VehicleController.js");

vehicleRouter.get("/vehicle", VehicleController.getAllItems);
vehicleRouter.get("/vehicle/detail/:id", VehicleController.getDetailsById);
vehicleRouter.post("/vehicle/add", VehicleController.createItems);
vehicleRouter.put("/vehicle/edit/:id", VehicleController.editItems);
vehicleRouter.delete("/vehicle/remove/:id", VehicleController.removeItems);

module.exports = vehicleRouter;
