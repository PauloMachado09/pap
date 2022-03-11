const express = require('express')
const router = express.Router()

const socio = require('../models/socioModel')

router.delete('/:numsocio', (req, res) => {
    socio.findOneAndDelete(
        {'numsocio':{$eq: req.body.numsocio}}      
    )
    .then((result,error)=>{
      if(error) res.json({
        msg: 'Ocorreu um problema'
      })
      if(result)res.json({
        msg: 'Sócio elmininado'
      })
      if(result==null)res.json({
        msg: 'Sócio não encontrado'
      })
    })
    .catch(error => {
        res.json({
            msg: 'Ocorreu um erro'
        })
    })
  })



  module.exports = router
  