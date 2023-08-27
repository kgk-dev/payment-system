function handler(Fn, ErrorCode) {
  return async (req, res) => {
    try {
      await Fn(req, res)
    } catch (error) {
      res.status(ErrorCode).send("Internal Server error")
    }
  }
}

module.exports = handler