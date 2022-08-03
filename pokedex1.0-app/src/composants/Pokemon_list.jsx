
import Generate_pokemon_card from "./Generate_pokemon_card";
import  {getPokemons} from "../js/Pokemon_service";
import { useState, useEffect } from "react";
  

 function Pokemon_list(){
    let url ='https://pokeapi.co/api/v2/pokemon/';
    const [pokemons, setPokemons] = useState([]);

    getPokemons(url).then((response) => {setPokemons(response)
    return pokemons});

        console.log(pokemons)
 
    return(
            <div className="pokemon_list">
            <Generate_pokemon_card />
            </div>
    )

}

export default Pokemon_list