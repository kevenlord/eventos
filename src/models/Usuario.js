const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    email: String,//senha 
});

module.exports = mongoose.model('Usuario', UsuarioSchema);