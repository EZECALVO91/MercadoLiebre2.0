const fs = require('fs');
const path = require('path');
const {validationResult} = require("express-validator");

const lecturaJson = () => {
    const userFilePath = path.join(__dirname, '../data/registerUserData.json');
    const userRead = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
	return userRead
}

const userFilePath = path.join(__dirname, '../data/registerUserData.json');


const users = {
    //Login
	login: (req, res)=>{
		res.render('login')
	},

    // Register
	register: (req, res) => {
		res.render('register')
	},
	userCreate: (req, res, next ) => {
		
        const error = validationResult(req);
		if( !error.isEmpty()){
			res.render("register", {error : error.mapped(), old:req.body})
			// res.send (error.mapped())
		}
		const users = lecturaJson();
		const {nombre,apellido,email,contraseña} = req.body;
		const nuevaId = Date.now();
		let newUser = {
			id:+nuevaId,
			nombre:nombre.trim(),
			apellido: apellido.trim(),
			email: email.trim(),
			contraseña
		}
		users.push(newUser);
		const json = JSON.stringify(users);
		fs.writeFileSync(userFilePath, json, 'utf-8');
		res.redirect('/')
	}


}

module.exports = users;