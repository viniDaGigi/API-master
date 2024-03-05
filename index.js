import express from 'express';
import * as fabricante from './service/fabricantes.js';
import * as veiculo from './service/veiculo.js';

//cria a constante do express
const app = express();

//chama os fabricantes
app.get('/fabricantes',(req,res)=>{
    res.status(200).json(buscar());
});

//Chama os fabricantes por ID
app.get('/fabricantes/:id',(req,res)=>{
    let id = req.params.id;
    let resultConsulta = fabricante.consultarPorId(id);
    if(resultConsulta){
        res.status(200).json(resultConsulta);
    }
    else{
        res.status(404).json({"erro":"recurso não encontrado"});
    }
});

app.get('/fabricantes/nome/:valor',(req,res)=>{
    let nome = req.params.valor;
    let resultConsulta = fabricante.consultarPorNome(nome);
    if(resultConsulta){
        res.status(200).json(resultConsulta);
    }
    else{
        res.status(404).json({"erro":"recurso não encontrado"});
    }
});

//chama os veiculo
app.get('/veiculo',(req,res)=>{
    res.status(200).json(veiculo.buscar());
});

//Chama os veiculo por ID
app.get('/veiculo/:id',(req,res)=>{
    let id = req.params.id;
    let resultConsulta = veiculo.consultarPorId(id);
    if(resultConsulta){
        res.status(200).json(resultConsulta);
    }
    else{
        res.status(404).json({"erro":"recurso não encontrado"});
    }
})

app.listen(80);