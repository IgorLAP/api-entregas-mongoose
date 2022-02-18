const { Router } = require("express")
const pedidosRoutes = require("./pedidosRoutes")
const router = Router();


router.use(pedidosRoutes)

module.exports = router
