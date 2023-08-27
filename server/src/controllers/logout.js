const get = async (req, res) => {
  res.clearCookie('token')
  return res.status(200).json({ msg: "Logout" })
}

module.exports = {
  get
}