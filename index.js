require("dotenv-safe").config();
const jwt = require("jsonwebtoken");

//index.js
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {
    res.json({ message: "Tudo ok por aqui!" });
})

app.get("/clientes", verifyJWT, (req, res) => { 
    console.log("Retornou todos clientes!");
    res.json([{id:1,nome:'luiz'}]);
})

app.listen(3000, () => console.log("Servidor escutando na porta 3000..."));

const blacklist = {};

app.post("/logout", verifyJWT, (req, res) => {

    const token = req.headers["authorization"].replace("Bearer ", "");
    blacklist[token] = true;
    setTimeout(() => delete blacklist[token], parseInt(process.env.JWT_EXPIRES) * 1000);
    res.json({ token: null });
})

