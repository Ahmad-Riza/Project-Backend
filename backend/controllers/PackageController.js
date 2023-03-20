const { Package, Store, Vehicle } = require("../models");

class PackageController {
  static async getAllItems(req, res) {
    try {
      const package1 = await Package.findAll({
        include: [Store, Vehicle] // Relasi database
      });
      res.status(200).json(package1);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getDetailsById(req, res) {
    try {
      const id = Number(req.params.id);
      let package1 = await Package.findByPk(id);

      package1
        ? res.status(200).json(package1)
        : res.status(404).json({ message: "Paket cuci not found" });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async createItems(req, res) {
    try {
      const { nama_paket, harga, StoreId, VehicleId } = req.body;

      let result = await Package.create({
        nama_paket,
        harga,
        StoreId,
        VehicleId
      });
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async editItems(req, res) {
    try {
      const id = Number(req.params.id);
      const { nama_paket, harga, StoreId, VehicleId } = req.body;

      let result = await Package.update(
        {
          nama_paket,
          harga,
          StoreId,
          VehicleId
        },
        {
          where: { id }
        }
      );
      result[0] === 1
        ? res.status(200).json({ message: "Paket cuci update success" })
        : res.status(400).json({ message: "Paket cuci not update" });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async removeItems(req, res) {
    try {
      const id = Number(req.params.id);
      let result = await Package.destroy({
        where: { id }
      });
      result
        ? res.status(200).json({ message: "Delete success" })
        : res.status(404).json({ message: "Delete not success" });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = PackageController;
