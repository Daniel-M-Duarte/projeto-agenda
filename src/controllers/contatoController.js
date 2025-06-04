const Contato = require("../models/ContatoModel");

exports.index = (req, res, next) => {
  res.render("contato", {
    contato: {},
  });
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
    res.redirect(`/contato/index/${contato.contato._id}`);
    return;
  } catch (e) {
    return res.render("404");
  }
};

exports.logout = function (req, res) {
  req.session.destroy();
  res.redirect("/login/index");
};

exports.editIndex = async function (req, res) {
  try {
    const { id } = req.params;
    if (!req.params) return res.render("404");

    const contato = await Contato.buscaPorId(id);

    res.render("contato", { contato });
  } catch (error) {
    console.error(error);
    // É uma boa prática verificar se o erro é um CastError para dar uma resposta mais específica
    if (error.name === "CastError") {
      return res.status(400).send("ID de contato inválido");
    }
  }
};

exports.edit = async function (req, res) {
  try {
    const { id } = req.params;

    if (!req.params) return res.render("404");

    const contato = new Contato(req.body);

    await contato.edit(id);

    if (contato.errors.length > 0) {
      req.flash("errors", contato.errors);
      req.session.save(function () {
        return res.redirect("/contato/index");
      });
      return;
    }

    req.flash("success", "Contato editado com sucesso");
    return res.redirect(`/contato/index/${contato.contato._id}`);

    return;
  } catch (e) {
    console.log(e)
    return res.render("404");
  }
};
