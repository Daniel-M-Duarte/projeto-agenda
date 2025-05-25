const Contato = require("../models/ContatoModel");

exports.index = (req, res, next) => {
  res.render("contato");
  next();
};

exports.register = async function (req, res) {
  try {
    const contato = new Contato(req.body);
    await contato.register();

    if (contato.errors.length > 0) {
      req.flash("errors", contato.errors);
      req.session.save(function () {
        return res.redirect("/contato/index");
      });
      return;
    }

    req.flash("success", "Contato criado com sucesso");
    res.redirect("/contato/index");
    return;
  } catch (e) {
    return res.render("404");
  }
};

exports.logout = function (req, res) {
  req.session.destroy();
  res.redirect("/login/index");
};
