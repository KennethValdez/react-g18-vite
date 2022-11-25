import { useEffect, useState } from "react";
import { getDataFromPokemon } from "../Services";
import {Container, Card, CardContent, CardMedia, Grid} from "@mui/material";


const Home = () => {
    const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

    //vamos a crear hooks que manejen el estado

    const [pokemons,setPokemon]=useState([]);

    //debemos crear una funcion que se encargue de ejecutar a getData FromPokemon
    const fetchPokemonList = async ()=>{
        const listPokemones = await getDataFromPokemon();
        console.log ("lista",listPokemones.results);
        setPokemon(listPokemones.results);
    }

    //en react existe una funcion llamada useEffect esta funcion ejecuta la pagina 
    // lo primero que le como peticion

useEffect(()=>{
    //importante por ahira en el useEffect es necesario colocarle un array vacio al termino ya que sino esto generaria un bucle infinito en la peticion 
fetchPokemonList();
},[]) 
//al colocar los corchetes dentro de useEffect terminas la peticion

    return(
        <Container>
            <h1>Pokedex</h1>
            <Grid spacing ={3}>
                {pokemons.map((pokemon,index)=>(
                //aca el codigo visual
                <Grid item xs={12} md= {4} lg={4} sm={12}>
                <Card className= "card-pokemon">
                    <CardMedia 
                    component="img" 
                    className = "img-pokemon" 
                    image = {`${imgUrl}${index + 1}.svg`}
                    />  
                        <CardContent>
                            <h3>{pokemon.name}</h3>
                        </CardContent>
                </Card>
            </Grid>
            ))}
            </Grid>
        </Container>
    );
};

export default Home;

