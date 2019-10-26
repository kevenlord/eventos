const Local = require('../models/Local');

module.exports = {
    async show(req, res) //Exibir o perfil
    {
        const{ usu_id } = req.headers; //buscar o id do usuario logado

        const local = await Local.find({ usu: usu_id}); //buscar todos os locais

        return res.json(local);
    }
}