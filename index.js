/* REQUIRES */
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3030;
const indexRouter = require("./routes");
const formularioRouter = require("./routes/formulario");
const session = require('express-session');
const cookieParser = require('cookie-parser');

/* Template engine Config. */
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

/* MIDLEWWARES GLOBAL */
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session( {
    secret: "tpSessionYCookies",
    resave: false,
    saveUninitialized: true
}));
app.use(cookieParser());

/* RUOTES -MIDDLEWARES */
app.use("/", indexRouter);

app.use("/formulario", formularioRouter);

/* Servidor local */
app.listen( PORT, ()=>console.log(`servidor levantado en el puerto ${PORT}\n http://localhost:${PORT}` ));