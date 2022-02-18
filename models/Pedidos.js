const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
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
  },
  entregadorId: {
    type: String,
    required: true,
  },
  clienteId: {
    type: String,
    required: true,
  },
});

module.exports = model("Pedidos", UserSchema);