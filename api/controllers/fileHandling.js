let constantObj = require('./../config/constants.js');
const fs = require('fs');
let path = require('path');

exports.errorMessages = function(req, res, next) {
	let rawdata = fs.readFileSync(path.join(__dirname + './../config/constantJsonFile.json'))

	res.status(200).send({
		msg: constantObj.messages.userSuccess,
		"data": JSON.parse(rawdata)
	});
}
