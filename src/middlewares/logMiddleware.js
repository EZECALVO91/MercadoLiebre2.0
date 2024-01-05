const fs = require("fs");


// logMiddleware va a dejar registro en log.txt de las paginas en las que entran los usuarios 
function logMiddleware(req, res, next){
    fs.appendFileSync("log.txt", "Se ingreso en la pagina " + req.url +" ");
    
    next();
}

module.exports=logMiddleware;