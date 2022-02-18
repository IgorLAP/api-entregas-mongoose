const { Router } = require("express")
const PedidosController = require("../controllers/PedidosController")
const router = Router()

router.post('/cadastrar', PedidosController.cadastrar)
router.post('/editar', PedidosController.editar)
router.get('/visualizar', PedidosController.visualizar)
router.post('/deletar', PedidosController.deletar)
router.post('/ver-status', PedidosController.verStatus)
router.post('/att-status', PedidosController.attStatus)

module.exports = router

