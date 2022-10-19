// app.js - файл-клієнт
// тут відбувається прослухлвування порту 3001
// Велігорський Б.О., КІ-191

const app = require('./server.js');
const config = require('./config.js');

app.listen(config.get('port'));
