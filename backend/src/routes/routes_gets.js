

/*------------------------------------------------------------------------------------ */

const {Router} = require ('express'); // Averiguar porque {Router} esta definido así, testear la app. 
const router = Router();

const {getDatos, getCuit} = require('../controllers/Gets');
//Aqui se hace el enrutamiento donde se solicitaran los datos
router.get('/getinformacion/:id', getDatos);
router.get('/getcuit/:id', getCuit);

//jeje

module.exports = router;


