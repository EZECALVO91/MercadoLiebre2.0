const fs = require('fs');
const path = require('path');

const lecturaJson = () => {
    const userFilePath = path.join(__dirname, '../data/registerUserData.json');
    const userRead = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
	return userRead
}

const userFilePath = path.join(__dirname, '../data/registerUserData.json');


const users = {
    // Register
	register: (req, res) => {
		res.render('register')
	},

	userCreate: (req, res ) => {
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
		console.log("req:",req.body);
		


	}


}

module.exports = users;