const Reserva = require('../models/Reserva');

module.exports = {
    async store(req, res) {
        const { usu_id } = req.headers;
        const { local_id } = req.params;
        const { motivo } = req.body;

        const reserva = await Reserva.create({
            usu: usu_id,
            local: local_id,
            motivo,
        });

        await reserva.populate('local').populate('usu').execPopulate();//CARALHOOOO!!Mongo é foda!
        //aqui mostra todas as informações e não só as ID

        return res.json(reserva);
    }
};