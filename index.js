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

const express = require('express');
const { uuid } = require('uuidv4')
const app = express();

app.use(express.json());

const projects = [];

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
    const { id } = req.params;
    const { title, owner } = req.body;
    // aqui usamos o findIndex para percorrer todo o array atrás do id
    // findIndex vai percorrer todos os projetos, e toda vez que ele percorrer na variavel
    // project, caso ela satisfeita e retornar true, ela vai me retornar o id que estu passando dentro dos parêntesis
    const projectIndex = projects.findIndex(project => project.id === id);

    if(projectIndex<0){
        return res.status(400).json({ error: 'Projeto não foi encontrado'});
    }
    // agora que tenho indice vou criar uma nova informação ao projeto
    const project = {
        id,
        title,
        owner,
    }
    projects[projectIndex] = project;

    return res.json(project);
});

app.delete('/projects/:id', (req,res) => {  ///para alterar tem que passar de onde eu quero alterar
    const { id } = req.params;

    const projectIndex = projects.findIndex(project => project.id === id);

    if(projectIndex<0){
        return res.status(400).json({ error: 'Projeto não foi encontrado'});
    }
    projects.splice(projectIndex, 1);

    return res.status(204).send();
});

app.listen(3000);