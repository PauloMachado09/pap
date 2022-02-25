const express = require('express')
const router = express.Router()

const desconto = require('../models/descontoModel')

router.post('/', (req, res) => {
    console.log(req.body)
    desconto.find({'nomeEmpresa': {$eq: req.body.nomeEmpresa}})
    .exec()
    .then((result)=>{
        if(result == 0){
            newDesconto = new desconto({
               nomeEmpresa: req.body.nomeEmpresa,
               descricao: req.body.descricao,
               percentagem : req.body.percentagem
            
            })
            newDesconto.save()
            .then((result) => {
                console.log('Desconto criado')
                res.json({
                    msg: 'Desconto criado', 
                    socio: result
                })
            })
            .catch(error => {
                console.log(error)
                res.json({msg: 'Ocorreu um erro'})
            })
        }
        else {
            res.json({msg:'Desconto existente'})
            console.log(result)
        }
    })
    .catch(error =>{
        console.log(error)
    })
})

module.exports = router