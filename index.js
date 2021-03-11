const express = require("express");

const PORT = 3333;
const HOST = '0.0.0.0';

const app = express();

const routesIndex = require('./routes/index')
const routesTours = require('./routes/tours')

app.use('/', routesIndex)
app.use('/tours', routesTours)

//erro de não encontrar a rota
app.use((req, res, next) => {
    const erro = new Error("Não encontrado");
    erro.status = 404;
    next(erro);
});

//erro de banco
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.mensage
        }
    })
});


app.listen(PORT, HOST);
