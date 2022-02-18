const Pedido = require('./../models/Pedidos');

class PedidoController{
    static async cadastrar(req, res){

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

        const pedido = await Pedido.findById(id);

        if(!pedido){
            res.status(406).json({
                message: 'pedido-inexistente'
            })
            return;
        }

        await Pedido.findByIdAndUpdate(id, updatePedido);

        res.json({
            message: `pedido-${id}-atualizado`,
            pedido: updatePedido
        })
    }

    static async visualizar(req, res){

    }

    static async deletar(req, res){

    }

    static async verStatus(req, res){

    }

    static async attStatus(req, res){

    }

}


module.exports = PedidoController;