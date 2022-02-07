const express = require('express')
const router = express.Router()

const socio = require('../models/socioModel')

router.post("/",(req, res) => {
    console.log(req.body); 
    socio.getAll()
      .then(result => {
        res.json("numsocio", {
            nome: req.body.nome,
            numsocio: req.body.numsocio,
            cc: req.body.cc,
            nif: req.body.nif,
            email: req.body.email,
            username: req.body.email,
        })
      })
  });

  module.exports = router
  