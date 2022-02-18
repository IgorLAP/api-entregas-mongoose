const Pedidos = require("./../models/Pedidos");

class PedidoController {
  static async cadastrar(req, res) {}

  static async editar(req, res) {}

  static async visualizar(req, res) {
    const pedido = await Pedidos.find().lean();
    if (!pedido) {
      res.status(402).json({ message: "lista-pedido-nulo" });
      return;
    }
    res.status(202).json(pedido);
  }

  static async deletar(req, res) {}

  static async verStatus(req, res) {}

  static async attStatus(req, res) {}
}

module.exports = PedidoController;
