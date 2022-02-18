const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
    nome: {
      type: String,
      required: true,
    }
})

module.exports = model("Cliente", UserSchema);