const express = require('express');
const router = express.Router();

//RETORNA TODOS OS PASSEIOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota de passeios AAA'
    });
});

//INSERE UM PASSEIO
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o POST dentro da rota de passeios'
    });
});

//RETORNA UM PASSEIO ESPECIFICO
router.get('/:id_tour', (req, res, next) => {
    const id = req.params.id_tour;

    if (id === 'parque') {
        res.status(202).send({
            mensagem: 'Passeio no parque',
            id: id
        });
    } else {
        res.status(202).send({
            mensagem: 'passeio aleatório',
            id: id
        });
    }

});

//ALTERA UM PASSEIO
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Passeio alterado'
    });
});

//DELETA UM PASSEIO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Passeio Deletado'
    });
});

module.exports = router;