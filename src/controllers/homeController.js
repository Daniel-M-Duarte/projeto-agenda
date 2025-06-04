const Contato = require("../models/ContatoModel");

exports.index = async (req, res) => {
  const contatos = await Contato.busca();
  res.render("index", { contatos });
};
