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

    static async editar(req, res){
        const { id } = req.body;
        
        if(
            !id ||
            !req.body.nome ||
            !req.body.dataDesejada ||
            !req.body.endereco ||
            !req.body.status ||
            !req.body.nomeEntregador
        ){
            res.status(402).json({
                message: `parametro(s)-necessario(s)-nulo(s)`
            })
            return;
        }

        const updatePedido = {
            nome: req.body.nome,
            dataDesejada: req.body.dataDesejada,
            endereco: req.body.endereco,
            status: req.body.status,
            nomeEntregador: req.body.nomeEntregador
        }

        const pedido = await Pedidos.findById(id);

        if(!pedido){
            res.status(406).json({
                message: 'pedido-inexistente'
            })
            return;
        }

        await Pedidos.findByIdAndUpdate(id, updatePedido);

        res.json({
            message: `pedido-${id}-atualizado`,
            pedido: updatePedido
        })
    }

  static async visualizar(req, res) {
    const pedido = await Pedidos.find().lean();
    if (!pedido) {
      res.status(402).json({ message: "lista-pedido-nulo" });
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

  static async verStatus(req, res) {}

  static async attStatus(req, res) {}
}

module.exports = PedidoController;
