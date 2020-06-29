

/*------------------------------------------------------------------------------------ */

const {Router} = require ('express');
const router = Router();

const {getDatos, getCuit} = require('../controllers/Gets');
//Aqui se hace el enrutamiento donde se solicitaran los datos
router.get('/getinformacion/:id', getDatos);
router.get('/getcuit/:id', getCuit);

//jeje

module.exports = router;


