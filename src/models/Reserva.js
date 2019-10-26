const mongoose = require('mongoose');

const ReservaSchema = new mongoose.Schema({
    motivo: String,
    aprovado: Boolean,

    usu: { //salvar usuário que criou essa informação
        type: mongoose.Schema.Types.ObjectId, //Informação de usuario referenciada ao model Usuario
        ref: 'Usuario'
    },
    local: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Local'
    }
});

module.exports = mongoose.model('Reserva', ReservaSchema);

