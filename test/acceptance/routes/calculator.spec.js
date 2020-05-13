const httpStatus = require('http-status')
const request = require('supertest')

const app = require('../../../app')

describe('[ Acceptance ] Calculator routes', () => {
  context('POST /api/v1/calculator/minus', () => {
    const left = 100
    const right = 100

    let res

    before(async () => {
      res = await request(app).post('/api/v1/calculator/minus').send({ left, right })
    })

    it('should return 200', () => {
      expect(res.status).to.be.eql(httpStatus.OK)
    })

    it('should return the sum', () => {
      expect(res.body).to.be.eql({ result: 0 })
    })
  })
})
