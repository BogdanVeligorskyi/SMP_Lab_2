// файл налаштувань (використовує convict)
// Велігорський Б.О., КІ-191

const convict = require('convict');

var conf = convict({
	env: {
		doc: 'The application environment',
		format: ['production', 'development', 'test'],
		default: 'development',
		env: 'NODE_ENV'
	},
	port: {
		doc: "The port to bind",
		format: "port",
		default: "3001",
		env: "PROXY_PORT",
		arg: 'port'
	} 
});

conf.validate({allowed: 'strict'});
module.exports = conf;