const mongoose = require('mongoose');

const LocalSchema = new mongoose.Schema({
    imagem: String,
    data: String,
    tipo: String,
    empresa: String,
    preco: Number,
    categoria: [String],// olha o vetor ae oh :D
    usu: { //salvar usuário que criou essa informação
        type: mongoose.Schema.Types.ObjectId, //Informação de usuario referenciada ao model Usuario
        ref: 'Usuario'
    }
}, {
    toJSON:{
        virtuals: true,
    },
});

LocalSchema.virtual('imagem_url').get(function(){
    return `http://localhost:3333/files/${this.imagem}`
})

module.exports = mongoose.model('Local', LocalSchema);

