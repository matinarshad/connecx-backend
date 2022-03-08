module.exports = checkToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ error: "mysecrettoken" });
  }
  next();
};
