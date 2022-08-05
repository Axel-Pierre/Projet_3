import {Route, Link} from "react-router-dom";
import Pokemon_list from "./Pokemon_list";
function Generate_pokemon_card({name,id}){
return(
    <div class="pokemon_card">
             
    <div class="pokemon_img">
       <img src={`https://raw.githubusercontent.com/PokeAPI
       /sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/${id}.png`} width="100%"/>
       </div>
       <div class="pokemon_name">
       <Link to ={`/display_pokemon:${id}`}> {name}</Link>
       </div>
</div>

)}

export default Generate_pokemon_card