const Usuario = require('../models/Usuario');
const Local = require('../models/Local');

module.exports = {
    async index(req, res){
        const { categoria } = req.query; // 15 min procurando o erro... UMA LETRA!!!!!!

        const local = await Local.find({ categoria: categoria });

        return res.json(local);
    },   // bora fazer uma listagem maravilhosa!


    async store(req, res){
        const { filename } = req.file; //salvar o nome do arquivo no bando e não a imagem inteira :/
        const { data, tipo, empresa, preco, categoria }= req.body;
        const { user_id } = req.headers; //envio de autenticação... FOI ESSA DISGRAÇA Q ACABOU COM O MEU CINEMAAAAAA

        const usu = await Usuario.findById(user_id);

        if(!usu)//verifica se o usuário existe!
        {
            return res.status(400).json({ error: 'Usuário não existe!'});
        }

        const local = await Local.create({
            usu: user_id,
            imagem: filename, 
            data,
            tipo,
            empresa,
            categoria: categoria.split(',').map(tech => tech.trim()),//Separar o vetor por virgular e remover o espaçamento que sobrar!!
            preco
        })//já se passaram 5h... meus lindos olhos... 6 da manhã, câmbio desligo!

        return res.json(local);
    }
};