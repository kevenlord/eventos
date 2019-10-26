const express = require("express");
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessaoController = require('./controllers/SessaoController');
const LocalController= require('./controllers/LocalController');
const PerfilController = require('./controllers/PerfilController');
const ReservaController = require('./controllers/ReservaController');

const routes = express.Router();
const upload = multer(uploadConfig);//REZA A LENDA Q ESSE MULTER TA NA DOCUMENTAÇÃO DESSA FORMA, eu que n quero ver esse pesadelo...

routes.post('/sessao', SessaoController.store);

routes.get('/locais', LocalController.index);
routes.post('/locais', upload.single('imagem'),LocalController.store);
routes.get('/perfil', PerfilController.show);

routes.post('/locais/:local_id/reservas', ReservaController.store);// Usuário cria uma reserva dentro do local, infame rota encadeada
//A maioria dos erros acontecem nas rotas... impressionante!


module.exports = routes;

