import { veiculo } from "../data/data.js"; 

//Retorna os veiculo
export const buscar = ()=>{
    return veiculo;
}

//Chama os veiculo por ID
export const consultarPorId = (id)=>{
    return veiculo.find(veiculo => veiculo.id == id);
}