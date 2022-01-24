const express = require('express')
const { execMap } = require('nodemon/lib/config/defaults')
const router = express.Router()

router.post('/', (req, res) => {
    console.log(req.body)
    socio.find0neAndUpdate({'numsocio': {$eq: req.body.numsocio}})
    .exec()
    .then((result) =>{
        if(result == null){
            res.json({
                msg: 'Sócio não encontrado'
            })
        }
            else
         {
                socio.find0neAndUpdate(
                    {'numsocio': {$eq: req.body.numsocio}},
                    {$eq: numsocio.body.numsocio},
                    {new:true} 
                )}
     })

})


module.exports = router