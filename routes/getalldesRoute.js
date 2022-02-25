const express = require('express')
const router = express.Router()

const desconto = require('../models/descontoModel')

router.get('/', (req, res) => {
    console.log(req.body)
    desconto.find()
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
                msg:'Socio encontrado',
                dados: result
            })
            
        }
    })
    .catch(error =>{
        console.log(error)
    })
})

module.exports = router