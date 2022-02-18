const { model, Schema } = require("mongoose");

const ClienteSchema = new Schema({
    nome: {
      type: String,
      required: true,
    }
})

module.exports = model("Cliente", ClienteSchema);