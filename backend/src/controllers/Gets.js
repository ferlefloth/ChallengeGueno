const fetch = require("node-fetch");


let url = "https://api.gueno.com.ar/challenge/"

const getCuit = (req, res) =>{

  try{
    fetch(url + `getCuit/${req.params.id}`) //Aquí se solicita la info del cuit a la api de gueno
    .then(response =>response.json())
    .then(data=>{
      res.send(data);
      console.log(data)
    })
  }catch (e){
    res.json({
      status: 'error',
      message:'Error al realizar la consulta'
    })
  }
  }
  
  const getDatos = (req, res) => {

  try {
    fetch(url + `getUserData/${req.params.id}`) //acá se introduce el cuit para mostrarnos los datos de esa
    .then(response=> response.json())
    .then(data =>{
      res.send(data);
      console.log(data)
    })
  } catch (e) {
    console.log(e);
    res.json({
        status: 'error',
        message: 'Error al realizar la consulta'
    })
  }
};
//comentdd
module.exports = {getDatos,getCuit};
//getId,getCuit,Dd