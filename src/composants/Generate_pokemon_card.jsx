import {Route, Link} from "react-router-dom";
import Pokemon_list from "./Pokemon_list";
import styles from "../modules_css/Pokemon_card.module.css"

function Generate_pokemon_card({name,id}){
    
return(
    <div className={styles.pokemon_card}>        
    <div className={styles.pokemon_img}>
       <img src={`https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} width="100%"/>
       </div>
       <div>
       <Link  className={styles.pokemon_name} to ={`/display_pokemon:${id}`}> {name}</Link>
       </div>
</div>

)}

export default Generate_pokemon_card