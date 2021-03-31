const express = require('express');
const { uuid } = require('uuidv4')
const app = express();

app.use(express.json());

const projects = [];
/**
 * CRUD
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
 * Rout Params: Identificar recursos na hora de atualizar ou deletar
 * Request Body: Resto do conteúdo na hora de criar ou editar um recurso
 * 
 */

app.get('/projects',(req,res) => {
    //const {title, owner} = req.query;
    
    return res.json(projects);
});

app.post('/projects', (req,res) => {
    const {title, owner} = req.body;
   
    const project = {id : uuid(), title, owner}; //projeto recem criado

    projects.push(project); //esse push vai jogar a criação do nosso projeto para o nosso array
    
    //const body = req.body;  Preciso informar para o express que quer em JSON
    // console.log(body);  Ai muda isso colocando .json la no app.use(express)

    return res.json(project); //retorna project porque ele eh o recém criado e nunca se retona a lista completa
});

app.put('/projects/:id', (req,res) => { //passar o id que eu quero alterar
    const params = req.params;

    console.log(params);
    
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