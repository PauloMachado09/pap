const mongoose = require('mongoose')

const desconto = mongoose.Schema ({

    'nomeEmpresa': {'type': 'String'},
    'descricao' : {'type': 'String'},
    'percentagem': {'type': 'Number'},
    'categoria' : {'type' : 'String'}
    
})

module.exports = mongoose.model('descontoModel',desconto)