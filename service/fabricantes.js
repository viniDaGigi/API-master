import { fabricantes } from "../data/data.js"; 

//Retorna os fabricantes
export const buscar = ()=>{
    return fabricantes;
}

//Chama os fabricantes por ID
export const consultarPorId = (id)=>{
    return fabricantes.find(fabricante => fabricante.id == id);
}

//
export const consultarPorNome = (nome)=>{
    return fabricantes.filter(fabric => fabric.nome.toLowerCase() == nome.toLowerCase())
}