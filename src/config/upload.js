const multer = require('multer');
const path = require('path');
//TOTALMENTE STACKOVERFLOW!!!!!11111!2!2"1 GRRR!
module.exports = {
    storage: multer.diskStorage({//eu me odeio...
        destination: path.resolve(__dirname, '..','..', 'uploads'),// path resolve serve para separar as pastas por virgula invez de ficar voltando pasta com "..\..\" NOJO!
                                    //dirname é uma váriavel global, ela serve pra informar o diretorio do arquivo atual  
        filename: (req, file, cb) => 
        { //função com 3 parametros, requisição, file - serve pra pegar as informações do arquivo como extensão, tamanho, tipo e nome do arquivo, cb é o callback=>assim que o nome do arquivo estiver pronto a função será chamada quando estiver pronto
           const ext = path.extname(file.originalname);
           const name = path.basename(file.originalname, ext);//ESSA LINHA... ESSA MALDITA LINHA!
            cb(null, `${name}-${Date.now()}${ext}`); //OLHA QUE PESADELO FAZER UPLOAD DE IMAGEM AHSUHASUHHAUSHUA gzus...
        }//Na sexta tentativa vai funcionar... Glória! Glória a deux!
        //esse filename é um...
    }),
};//ELE ESTÁ VIIIIIIIIIIIIIIIIIIIIIIIIIVOOO ASHASUHHUSAHUS!!!! 