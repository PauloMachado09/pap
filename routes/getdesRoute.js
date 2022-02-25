const express = require('express')
const router = express.Router()

const desconto = require('../models/descontoModel')

router.post('/', (req, res) => {
    console.log(req.body)
    desconto.findOne()
    .exec()
    .then((result)=>{
        console.log(result)
        if(result == null){
            console.log('Desconto inexistente')
            res.json({
                msg: 'Desconto inexistente'
            })
        }
        else {
            console.log(result)
            res.json({
                msg:'Desconto encontrado',
                dados: result
            })
            
        }
    })
    .catch(error =>{
        console.log(error)
    })
})

module.exports = router