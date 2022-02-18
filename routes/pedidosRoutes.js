const { Router } = require("express")
const PedidosController = require("../controllers/PedidosController")
const router = Router()

router.post('/cadastrar', PedidosController)
router.post('/editar', PedidosController)
router.post('/editar2', PedidosController)
router.get('/visualizar', PedidosController)
router.post('/deletar', PedidosController)


module.exports = router

