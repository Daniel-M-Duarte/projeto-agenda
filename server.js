const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const connectDataBase = require("./src/config/db");
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const routes = require("./routes");
const { middlewareGlobal } = require("./src/middlewares/middleware");

app.use(flash());

dotenv.config();
connectDataBase();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
const sessionOptions = session({
  secret: process.env.SESSION_SECRET,
  store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});
app.set("views", path.resolve(__dirname, "src", "view"));
app.set("view engine", "ejs");

app.use(sessionOptions);
app.use(middlewareGlobal);
app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Acessar http://localhost:${port}`);
  console.log(`Servidor executando na porta:${port}`);
});
