const express = require('express')

class Serv {
    constructor(){
        this.main = express()
        this.routes();
    }

    routes(){
        this.main.get('/',(req, res) => res.send('rutas'))
        this.main.use('/rutas', require('../routes/rutas'))
        
    }
    listen(){
        this.main.listen(process.env.PORT, ()=>
            console.log("Puerto abierto: "+ process.env.PORT))
    }
}

module.exports = Serv