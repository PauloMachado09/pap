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
               telemovel: req.body.telemovel,
               email: req.body.email,
               password: req.body.password,
               password_changed: false
            })
            newSocio.save()
            .then((result,error) => {
                if (error) throw error
                console.log('Sócio criado')
                res.json({
                    type: 'sucess',
                    msg: 'Objeto criado'
                })
            })
            .catch(error => {
                console.log(error)
                res.json({
                    type: 'error',
                    msg: 'Não foi possivel fazer a sua inscrição. Tente Novamente'})
            })
        }
        else {
            res.json({msg:'Socio existente'})
            console.log(result)
        
            
        }
    })
    .catch(error =>{
        console.log(error)
        res.json({
            type: 'error',
            msg: 'Não foi possivel fazer a sua inscrição. Tente Novamente'
        })
    })
})

module.exports = router