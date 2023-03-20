const { Vehicle, Package } = require("../models");

class VehicleController {
  static async getAllItems(req, res) {
    try {
      const vehicle = await Vehicle.findAll({
        include: [Package] // Relasi database
      });
      res.status(200).json(vehicle);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getDetailsById(req, res) {
    try {
      const id = +req.params.id;
      let result = await Vehicle.findByPk(id);
      result
        ? res.status(200).json(result)
        : res.status(404).json({ message: "Jenis Kendaraan Not Found" });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async createItems(req, res) {
    try {
      const { nama_pemilik, nama_kendaraan, plat_nomor, no_telpon } = req.body;

      let result = await Vehicle.create({
        nama_pemilik,
        nama_kendaraan,
        plat_nomor,
        no_telpon
      });
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async editItems(req, res) {
    try {
      const id = +req.params.id;
      const { nama_pemilik, nama_kendaraan, plat_nomor, no_telpon } = req.body;

      let result = await Vehicle.update(
        {
          nama_pemilik,
          nama_kendaraan,
          plat_nomor,
          no_telpon
        },
        {
          where: { id }
        }
      );
      result[0] === 1
        ? res.status(200).json({ message: "Jenis kendaraan update success" })
        : res.status(400).json({ message: "Jenis kendaraan not update" });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async removeItems(req, res) {
    try {
      const id = req.params.id;
      let result = await Vehicle.destroy({
        where: { id }
      });
      result
        ? res.status(200).json({ message: "Jenis kendaraan delete success" })
        : res.status(404).json({ message: "Delete not success" });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = VehicleController;
