const Pedidos = require("./../models/Pedidos");

class PedidoController {

    static async cadastrar(req, res){
        const { nome, dataDesejada, endereco, status, nomeEntregador } = req.body

        const pedido = Pedidos( { nome, dataDesejada, endereco, status, nomeEntregador } )

        if(!nome || !dataDesejada || !endereco ||!status ||!nomeEntregador) {
            res.status(402).json( { message: 'Campos não preenchidos corretamente'} )
            return
        }
        
        await pedido.save()    

        res.status(201).json( { message: `Pedido ${nome} cadastrado` } )

    }

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
