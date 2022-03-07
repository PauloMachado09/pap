const mongoose = require('mongoose')

const socio = mongoose.Schema({
    'nome' : {'type': 'String'},
    'numsocio' : {'type': 'Number'},
    'cc' : {'type': 'Number'},
    'nif' : {'type': 'Number'},
    'telemovel' : {'type' : 'Number'},
    'email': {'type': 'String'},
    'pin' : {'type' : 'Number'},
    'pin_changed' : {'type': Boolean},
    date: {'type': Date, default: Date.now}
})

module.exports = mongoose.model('socioModel',socio)