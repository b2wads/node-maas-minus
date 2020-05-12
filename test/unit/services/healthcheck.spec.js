const HealthCheckService = require('../../../services/healthcheck-service')

describe('HealthCheckService', () => {
  describe('check()', () => {
    it("should return { stauts: 'ok' } ", async () => {
      const status = await HealthCheckService.status()
      expect(status).to.be.eql({
<<<<<<< HEAD
        status: 'ok',
=======
        status: 'ok'
>>>>>>> Initial commit
      })
    })
  })
})
