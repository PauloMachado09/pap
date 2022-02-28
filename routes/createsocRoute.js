const express = require('express')
const router = express.Router()

const socio = require('../models/socioModel')

router.post('/', (req, res) => {
    console.log(req.body)
    socio.find({'numsocio': {$eq: req.body.numsocio}})
    .exec()
    .then((result)=>{
        if(result == 0){
            newSocio = new socio({
               nome: req.body.nome,
               numsocio: req.body.numsocio,
               cc: req.body.cc,
               nif: req.body.nif,
               email: req.body.email,
               username: req.body.email,
               password: null,
               pwd_changed: false
            })
            newSocio.save()
            .then((result) => {
                console.log('Sócio criado')
                res.json({
                    msg: 'Objeto criado', 
                    socio: result
                })
            })
            .catch(error => {
                console.log(error)
                res.json({msg: 'Ocorreu um erro'})
            })
        }
        else {
            res.json({msg:'Socio existente'})
            console.log(result)
        }
    })
    .catch(error =>{
        console.log(error)
    })
})

module.exports = router