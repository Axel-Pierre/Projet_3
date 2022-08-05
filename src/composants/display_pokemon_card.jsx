import { TextareaAutosize } from "@mui/material";
import { useEffect ,useState } from "react"
import { getPokemonsUrl } from "../js/Pokemon_service"
import Pokemon_list from "./Pokemon_list";
const controller = new AbortController();
 function Display_pokemon(){
    const id =  location.href.split(':')[3]
    const moves = [];
    const [pokemonData,setPokemonData] = useState({});
    const types = [];
    const abilities = [];
   
        getPokemonsUrl(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
           
            (response) => {
                console.log(response);
                response.types.forEach(e => types.push(e.type.name));
                response.moves.forEach( e => moves.push(e.move.name))
                response.abilities.forEach(e => abilities.push(e.ability.name));
                setPokemonData({
                name : response.name,
                hp : response.stats[0].base_stat,
                attack :  response.stats[1].base_stat,
                defense : response.stats[2].base_stat,
                spAttack : response.stats[3].base_stat,
                spDefense : response.stats[4].base_stat,
                speed: response.stats[5].base_stat,
                type : types.toString(),
                weight : response.weight /100,
                height: response.height /10,
                abilities : abilities.toString(),
                moves : moves.toString(),
                
            })
        })
        getPokemonsUrl(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then(
            (response) =>{
                const egg_group = [];
                response.egg_groups.forEach(e => egg_group.push(e.name))
               setPokemonData(Object.assign(pokemonData,{egg_groups : egg_group.toString(),}))
                //setPokemonData(Object.assign(pokemonData,{egg_group : response.egg_groups}))
               setPokemonData(Object.assign(pokemonData,
                {description : response.flavor_text_entries[16].flavor_text,
            }))
                
               
            }
        )    
            
            
        ;
            
           // console.log(response)
    

    console.log(pokemonData);
    console.log(moves);
    return(
     <div>
        <p style ={{textAlign:'center'}}>
           {pokemonData.name}
        </p>
        <p style ={{textAlign:'center'}}>
           {pokemonData.description}
        </p>
        
     </div>
     
    )

}

export default Display_pokemon