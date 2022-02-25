const express = require('express')
const router = express.Router()

const desconto = require('../models/descontoModel')

router.put('/', (req, res) => {
    desconto.findOne(
    {'nomeEmpresa':{$eq: req.body.nomeEmpresa}})
    .exec()
    .then((result) =>{
        if(result==null){
            res.json({
                msg: 'Desconto não encontrado',
            })  
        }
        else {
            desconto.findOneAndUpdate(
                {'nomeEmpresa':{$eq: req.body.nomeEmpresa}},
                {$set: {'descricao': req.body.descricao, 'percentagem': req.body.percentagem}},
                {new:true}
            )
            .then((obj)=>{
                res.json({
                    msg: 'Desconto alterado',
                    data: obj
                })
            })
            .catch(error => {
                res.json({
                    msg: 'Ocorreu um erro'
                })
            })
        }
        
    })

})

module.exports = router