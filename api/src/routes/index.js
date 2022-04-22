const { Router } = require('express');
// Importar todos los routers;

const breedRoutes = require('./Breed');
const temperamentRoutes = require('./Temperament');

const router = Router();

// Configurar los routers
router.use("/", breedRoutes) 
router.use("/", temperamentRoutes)

module.exports = router;