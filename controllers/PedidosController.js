const { json } = require("express");
const Pedidos = require("./../models/Pedidos");

class PedidoController {
  static async cadastrar(req, res) {
    const { nome, dataDesejada, endereco, status, nomeEntregador } = req.body;

    const pedido = Pedidos({
      nome,
      dataDesejada,
      endereco,
      status,
      nomeEntregador,
    });

    if (!nome || !dataDesejada || !endereco || !status || !nomeEntregador) {
      res.status(402).json({ message: "Campos não preenchidos corretamente" });
      return;
    }

    await pedido.save();

    res.status(201).json({ message: `Pedido ${nome} cadastrado` });
  }

  static async editar(req, res) {
    const { id } = req.body;

    if (
      !id ||
      !req.body.nome ||
      !req.body.dataDesejada ||
      !req.body.endereco ||
      !req.body.status ||
      !req.body.nomeEntregador
    ) {
      res.status(402).json({
        message: `parametro(s)-necessario(s)-nulo(s)`,
      });
      return;
    }

    const updatePedido = {
      nome: req.body.nome,
      dataDesejada: req.body.dataDesejada,
      endereco: req.body.endereco,
      status: req.body.status,
      nomeEntregador: req.body.nomeEntregador,
    };

    const pedido = await Pedidos.findById(id);

    if (!pedido) {
      res.status(406).json({
        message: "pedido-inexistente",
      });
      return;
    }

    await Pedidos.findByIdAndUpdate(id, updatePedido);

    res.json({
      message: `pedido-${id}-atualizado`,
      pedido: updatePedido,
    });
  }

  static async visualizar(req, res) {
    const pedido = await Pedidos.find().lean();
    if (!pedido) {
      res.status(402).json({ message: "Pedidos não encontrados" });
      return;
    }
    res.status(202).json(pedido);
  }

  static async deletar(req, res) {
      if (!req.body.id){
          res.status(402).json({message: "Parâmetro não recebido."})
          return;
      }
      const { id } = req.body
    const pedido = await Pedidos.findByIdAndDelete(id)
    if (!pedido){
        res.status(402).json({message:"Pedido não existente!"})
        return;
    }

      res.json({ message: "Pedido deletado!"})
  }

  static async verStatus(req, res) {
        
        if (!req.body.nomeEntregador) {
        res.status(402).json({ message: "Nome entregador necessário"})
      }
      const nomeEntregador = req.body.nomeEntregador

      const pedido = await Pedidos.findOne({nomeEntregador})
      if (!pedido) {
          res.status(406).json({ message: "Não encontramos um pedido associado à esse entregador"})
      }
      res.json({nome:pedido.nome , status:pedido.status});
  }


  static async attStatus(req, res) {
    const id = req.body.id;
    const pedido = {
      status: req.body.status,
    };
    if (!id) {
      res.status(402).json({ message: "Parâmetro id nulo" });
      return;
    }
    const procurarAttpedido = await Pedidos.findByIdAndUpdate(id, pedido);
    if (!procurarAttpedido) {
      res.status(402).json({ message: "Pedido não encontrado" });
      return;
    }
    if (!pedido.status) {
      res.status(402).json({ message: "Parâmetro status nulo" });
      return;
    }
    res.status(200).json({ status: `Status alterado para ${pedido.status}` });
  }
}

module.exports = PedidoController;
