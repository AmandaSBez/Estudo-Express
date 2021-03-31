const express = require('express');
const app = express();

/**
 * 
 * MÉTODOS:
 * 
 * GET: Buscar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT/PATCH: Alterar uma informação no back-end
 * DELETE: Deletar informações do back-end
 * 
 * PARÂMETROS:
 * Query Params: Vamos usar principalmente para filtros e paginação
 * Rout Params: 
 * Request Params:
 * 
 */

app.get('/projects',(req,res) => {
    const {title, owner} = req.query;

    console.log(title);
    console.log(owner);

    return res.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 100'
    ])
});

app.post('/projects', (req,res) => {
    return res.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4',
        'Projeto 5'
    ]);
});

app.put('/projects/:id', (req,res) => { //passar o id que eu quero alterar
    return res.json([
        'Projeto 50',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4',
        'Projeto 5'
    ]);
});

app.delete('/projects/:id', (req,res) => {  ///para alterar tem que passar de onde eu quero alterar
    return res.json([
        'Projeto 50',
        'Projeto 2'
    ]);
});

app.listen(3000);