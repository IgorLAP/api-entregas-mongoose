const { model, Schema } = require("mongoose");

const PedidoSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  dataDesejada: {
    type: String,
    required: true,
  },
  endereco: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  }
});

module.exports = model("Pedidos", PedidoSchema);