const { Store, Package } = require("../models");

class StoreController {
  static async getAllItems(req, res) {
    try {
      const store = await Store.findAll({
        include: [Package] // Relasi database
      });
      res.status(200).json(store);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getDetailsById(req, res) {
    try {
      const id = Number(req.params.id);
      let store = await Store.findByPk(id);

      doorsmeer
        ? res.status(200).json(store)
        : res.status(404).json({ message: "Not Found" });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async createItems(req, res) {
    try {
      const { nama_toko, alamat, no_telpon } = req.body;

      let result = await Store.create({
        nama_toko,
        alamat,
        no_telpon
      });
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async editItems(req, res) {
    try {
      const id = Number(req.params.id);
      const { nama_toko, alamat, no_telpon } = req.body;

      let result = await Store.update(
        {
          nama_toko,
          alamat,
          no_telpon
        },
        {
          where: { id }
        }
      );
      result[0] === 1
        ? res.status(200).json({ message: "update success" })
        : res.status(400).json({ message: "not update" });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async removeItems(req, res) {
    try {
      const id = Number(req.params.id);
      let result = await Store.destroy({
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

module.exports = StoreController;
