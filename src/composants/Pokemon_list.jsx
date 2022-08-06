
import Generate_pokemon_card from "./Generate_pokemon_card";
import  {getPokemons, getPokemonsUrl} from "../js/Pokemon_service";
import { useState, useEffect } from "react";
import styles from "../modules_css/PokemonList.module.css";
import { style } from "@mui/system";

 function Pokemon_list(){
    
        
    
    
   
   let  results = getPokemons();
   const url_data = [] ;
   const [pokemons,setPokemons] = useState([]);

   const [nextDatas,setNextData] = useState();
  
   
        if(nextDatas == ""){
        results.then( res =>{
        setPokemons(res.pokemons); 
        setNextData(res.next_data);
            
        //res.signal;
        // data = getPokemonsUrl(pokemons[0].url);
         //data.then( response => console.log(response.sprites.front_default));
        
        })}else{
            results = getPokemons(nextDatas)
            results.then( res =>{
                setPokemons(pokemons.concat(res.pokemons)); 
                setNextData(res.next_data);
                
      
       
        })
    }

    useEffect(()=>{
        const form = document.getElementById('form');
        if(Array.from(form.classList).indexOf('_hidden'))
            form.classList.remove('_hidden')
    })
    const pokemon_array = [];
   
   
    const display = [];
   
    pokemons.map((pokemon) => pokemon_array.push(pokemon.name))
    pokemons.map(pokemon =>  url_data.push(pokemon.url));
   

   for(let i=0; i<pokemon_array.length;i++){
       display.push(
            <Generate_pokemon_card name ={pokemon_array[i]} id= {i+1} key= {i+1}/>,
           
        )
   
    }
       
    return(
        <div>
              <form id="form" className={styles.searchform} >
        <input type="text" placeholder="Pokemon Name"/>
        <button type="submit">Search</button>
      </form>
            <div className={styles.pokemon_list}>
              
    {display}        
    
 </div>
 </div>
            
           
           )
           
    
   
}

export default Pokemon_list