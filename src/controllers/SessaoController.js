const Usuario = require('../models/Usuario');

//index = Retorna uma listagem mano :D
//show = lista uma unica sessão pco
//store = criar 
//update = atualizar 
//destroy = sem comentários...


module.exports = 
{
    
    async store(req, res) //Asyncronismo serve pro await, para mais detalhes leia o comentario do... await?!
    {
        const { email } = req.body; //procurando email dentro do body
        //Verificação pra saber se um infeliz já ta cadastrado na base!!!!1!!111!
        let usu = await Usuario.findOne({ email }); //await = ele impede que avance sem antes terminar a instrução, MAS o await só funciona se colocar o async :D!
        if(!usu)//facilite sua vida e use "!"...
        {
            usu = await Usuario.create({ email });
        }
        return res.json(usu);
    }
};