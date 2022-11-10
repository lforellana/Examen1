require('dotenv').config()

const Serv = require('./models/server')
const server = new Serv();
server.listen();
//server.listen(process.env.PORT)