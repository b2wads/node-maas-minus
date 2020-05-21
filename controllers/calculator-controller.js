module.exports = {
  async minus(req, res) {
    const { left, right } = req.body
    const sum = left - right
    const response = {
      result: sum,
    }
    return res.status(200).json(response)
  },
}
