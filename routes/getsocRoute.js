const express = require('express')
const router = express.Router()

const socio = require('../models/socioModel')

router.post('/', (req, res) => {
    console.log(req.body)
    socio.findOne({'numsocio': {$eq: req.body.numsocio}})
    .exec()
    .then((result)=>{
        console.log(result)
        if(result == null){
            console.log('Sócio inexistente')
            res.json({
                msg: 'Sócio inexistente'
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