const router = require('express').Router()
const HealthcheckRoutes = require('./healthcheck')

const CalculatorController = require('../controllers/calculator-controller')

router.use('/healthcheck', HealthcheckRoutes)
router.post('/api/v1/calculator/minus', CalculatorController.minus)

module.exports = router
