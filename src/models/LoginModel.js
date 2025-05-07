const mongoose = require("mongoose");
const validator = require("validator");

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
});

const LoginModel = mongoose.model("Login", LoginSchema);

class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  async login() {
    this.valida();
    if (this.errors.length > 0) return;
    this.user = await LoginModel.findOne({ email: this.body.email });

    if (!this.user) {
      this.errors.push("Usuário não existe.");
      return;
    }
  }

  async register() {
    this.valida();
    if (this.errors.length > 0) return;

    try {
        this.user = await LoginModel.create(this.body);
    } catch (err) {
        console.log(err)
    }

    if (this.errors.length > 0) return;

    
  }

  async userExists() {
    this.user = await LoginModel.findOne({ email: this.body.email });
    if (this.user) this.errors.push("Usuário já existe.");
  }

  valida() {
    this.cleanUp();

    // Validação
    // O e-mail precisa ser válido
    if (!validator.isEmail(this.body.email))
      this.errors.push("E-mail inválido");

    if (this.body.password.length < 3 || this.body.password.length > 50) {
      this.errors.push("A senha precisa ter entre 3 e 50 caracteres.");
    }

    if (!this.body.name || !this.body.surname || !this.body.phone) {
      this.errors.push("Faltando dado obrigatório")
    }
  }

  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] !== "string") {
        this.body[key] = "";
      }
    }

    this.body = {
      email: this.body.email,
      password: this.body.password,
      name: this.body.name,
      surname: this.body.surname,
      phone: this.body.phone,
    };
  }
}

module.exports = Login;
