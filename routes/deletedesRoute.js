const express = require('express')
const router = express.Router()

const desconto = require('../models/descontoModel')

router.delete('/', (req, res) => {
    desconto.findOneAndDelete(
        {'nomeEmpresa':{$eq: req.body.nomeEmpresa }}      
    )
    .then((result,error)=>{
      if(error) res.json({
        msg: 'Ocorreu um problema'
      })
      if(result)res.json({
        msg: 'Desconto elmininado'
      })
      if(result==null)res.json({
        msg: 'Desconto não encontrado'
      })
    })
    .catch(error => {
        res.json({
            msg: 'Ocorreu um erro'
        })
    })
  })



  module.exports = router