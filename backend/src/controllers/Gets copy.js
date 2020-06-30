const fetch = require('node-fetch')

let url = 'https://api.gueno.com.ar/challenge/'

const GetCuit = (req,res)=>{

  try{
    fetch(url + `getCuit/${req.params.id}`)
    .then(response=>response.json())
    .then(data=>{
      res.send(data)
    })
  }catch (e){
    res.json({
      status: 'error',
      message:'no se puede conectar con el Cuit'
    })
  }
}


const GetInfo = (req,res)=>{

  try{
    fetch(url + `getUserData/${req.params.id}`)
    .then(response=>response.json())
    .then(data=>{
      res.send(data)
    })
  }catch(e){
    res.json({
      status: 'error',
      message:'No se puede obtener la Informacion del propietario de ese CUIT'
    })
  }
}

module.exports={GetCuit, GetInfo}
