const jwt = require("jsonwebtoken");

const users = [
  { username: "manager", password: "12345", role: "manager" },
  { username: "admin", password: "12345", role: "admin" }
];

exports.loginPage = (req, res) => {
  res.render("login");
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) return res.send("Login gagal");

  const token = jwt.sign(
    { username: user.username, role: user.role },
    process.env.JWT_SECRET
  );

  res.cookie("token", token).redirect("/dashboard");
};
