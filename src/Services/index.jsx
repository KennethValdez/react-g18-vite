// nuestro archivo donde tendremos nuestro ervicio

const BASE_URL="https://pokeapi.co/api/v2/pokemon?limit=200";
//esta es una funcion generica
//cuando el parametro que usa la funcion .  en este caso usa url va a llamar los datos de pokemon
// trae informacion de otra API

export const getDataFromPokemon = async (url = BASE_URL)=>{
    try{const response = await fetch(url);
    const data = await response.json();
    console.log("data",data);
    return data;
    //ahora debemos ejecutar
}catch(error){
    console.log(error.message)
}
}