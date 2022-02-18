const { model, Schema } = require("mongoose");

const EntregadorSchema = new Schema({
    nome: {
      type: String,
      required: true,
    }
})

module.exports = model("Entregador", EntregadorSchema);