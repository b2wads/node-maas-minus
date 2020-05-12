const logger = require('../clients/logger')

const HealthCheckService = {
  async status() {
    logger.debug({
      action: 'healthcheckService.status',
<<<<<<< HEAD
      msg: 'Checking API health',
    })
    return Promise.resolve({ status: 'ok' })
  },
=======
      msg: 'Checking API health'
    })
    return Promise.resolve({ status: 'ok' })
  }
>>>>>>> Initial commit
}

module.exports = HealthCheckService
