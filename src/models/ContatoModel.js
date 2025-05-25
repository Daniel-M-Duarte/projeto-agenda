const mongoose = require("mongoose");
const validator = require("validator");

const ContatoSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: false },
  surname: { type: String, required: false },
  phone: { type: String, required: false },
  criadoEm: { type: Date, default: Date.now,}
});

const ContatoModel = mongoose.model("Contato", ContatoSchema);

class Contato {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  async Contato() {
    this.validaContato();
    if (this.errors.length > 0) return;
    this.user = await ContatoModel.findOne({ email: this.body.email });

    if (!this.user) {
      this.errors.push("Usuário ou senha incorretos");
      return;
    }
  }

  async register() {
    this.valida();
    if (this.errors.length > 0) return;

    this.user = await ContatoModel.findOne({ email: this.body.email });

    if (this.user) {
      this.errors.push("E-mail já cadastrado");
      return;
    }

    try {
      this.user = await ContatoModel.create(this.body);
    } catch (err) {}

    if (this.errors.length > 0) return;
  }

  async userExists() {
    this.user = await ContatoModel.findOne({ email: this.body.email });
    if (this.user) this.errors.push("Usuário já existe.");
  }

  valida() {
    this.cleanUp();

    // Validação
    // O e-mail precisa ser válido
    if (this.body.email && !validator.isEmail(this.body.email)) {
      this.errors.push("E-mail inválido");
    }

    if (!this.body.name) {
      this.errors.push("Nome é um campo obrigatório!");
    }

    if (!this.body.email || !this.body.phone) {
      this.errors.push("Envie pelo menos um contato: e-mail ou telefone");
    }
  }

  validaContato() {
    this.cleanUp();

    // Validação
    // O e-mail precisa ser válido
    if (!validator.isEmail(this.body.email))
      this.errors.push("E-mail inválido");
  }

  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] !== "string") {
        this.body[key] = "";
      }
    }

    this.body = {
      email: this.body.email,
      name: this.body.name,
      surname: this.body.surname,
      phone: this.body.phone,
    };
  }
}

module.exports = Contato;
