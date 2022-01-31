const express = require('express')
const router = express.Router()

const Socio = require('../models/socioModel')

router.post('/', (req, res) => {
    Socio.findOneAndUpdate(
        {'numsocio':{$eq: req.body.numsocio}})
    .exec()
    .then((result) =>{
        if(result==null){
            res.json({
                msg: 'Socio não encontrado',
            })  
        }
        else {
            Socio.findOneAndUpdate(
                {'numsocio':{$eq: req.body.numsocio}},
                {$set: {'cc': req.body.cc, 'nif': req.body.nif}},
                {new:true}
            )
            .then((obj)=>{
                res.json({
                    msg: 'Socio alterado',
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

