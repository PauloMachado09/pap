const mongoose = require('mongoose')

const socio = mongoose.Schema({
    'nome' : {'type': 'String'},
    'numsocio' : {'type': 'Number'},
    'cc' : {'type': 'Number'},
    'nif' : {'type': 'Number'},
    'email': {'type': 'String'},
    'username' : {'type': 'String'},
    'password' : {'type': 'String'},
    'pwd_changed' : {'type': Boolean},
    date: {'type': Date, default: Date.now}
})

module.exports = mongoose.model('socioModel',socio)