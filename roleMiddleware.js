exports.managerOnly = (req, res, next) => {
  if (req.user.role !== "manager") {
    return res.status(403).send("Akses ditolak");
  }
  next();
};
