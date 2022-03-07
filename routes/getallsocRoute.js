const express = require('express')
const router = express.Router()

const socio = require('../models/socioModel')

router.get('/', (req, res) => {
    let arr = []
    socio.find()
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
            for(i in result){
                let data = {
                    _id: result[i]._id,
                    nome: result[i].nome,
                    nif: result[i].nif
                }
                arr.push(data)
            }
            res.json({
                msg:'Socio encontrado',
                dados: arr
            })   
        }
    })
    .catch(error =>{
        console.log(error)
    })
})

module.exports = router