const mongoose = require('mongoose')

const socio = mongoose.Schema({
    'nome' : {'type': 'String'},
    'cc' : {'type': 'Number'},
    'nif' : {'type': 'Number'},
    'telemovel' : {'type' : 'Number'},
    'email': {'type': 'String'},
    'password' : {'type' : 'String'},
    'password_changed' : {'type': Boolean},
    date: {'type': Date, default: Date.now}
})

module.exports = mongoose.model('socioModel',socio)