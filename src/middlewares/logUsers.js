const fs = require("fs");

const user= ["Ada", "Greta", "Vim", "Tim"]

function verUsuario (req, res, next){
    
    const userInput = req.body.nombre;
    
    if (user.includes(userInput)) {
        res.send(`Hola admin ${userInput}`)
        fs.appendFileSync("log.txt", `El Administrador ${req.body.nombre}, ha ingresado a la pagina.\n`);
        next();

    }else{
            res.send ("No tenes privilegios de Admin")
            fs.appendFileSync("log.txt", `El usuario ${req.body.nombre}, no es administrador.\n`)
        }
}


module.exports = verUsuario;
