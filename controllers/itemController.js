const { Item } = require("../models");

exports.dashboard = async (req, res) => {
  try {
    const items = await Item.findAll({ where: { is_active: true } });
    res.render("dashboard", { items, user: req.user });
  } catch (error) {
    console.error("❌ Dashboard Error:", error);
    res.send("Tabel items belum ada atau database error. Jalankan migration.");
  }
};


exports.addForm = (req, res) => res.render("addItem");

exports.create = async (req, res) => {
  await Item.create({
    ...req.body,
    is_active: true,
    created_by: req.user.username
  });
  res.redirect("/dashboard");
};

exports.editForm = async (req, res) => {
  const item = await Item.findByPk(req.params.id);
  res.render("editItem", { item });
};

exports.update = async (req, res) => {
  await Item.update({
    ...req.body,
    updated_by: req.user.username
  }, { where: { id: req.params.id } });
  res.redirect("/dashboard");
};

exports.remove = async (req, res) => {
  await Item.update(
    { is_active: false, updated_by: req.user.username },
    { where: { id: req.params.id } }
  );
  res.redirect("/dashboard");
};
