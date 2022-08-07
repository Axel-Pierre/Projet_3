
import Generate_pokemon_card from "./Generate_pokemon_card";
import  {getPokemons, getPokemonsUrl} from "../js/Pokemon_service";
import { useState, useEffect  } from "react";
import styles from "../modules_css/PokemonList.module.css";
import {useNavigate} from 'react-router-dom';


 function Pokemon_list(){
    
        
    
    
   
   let  results = getPokemons();
   const url_data = [] ;
   const [pokemons,setPokemons] = useState([]);

   const [nextDatas,setNextData] = useState();
  
   //on recupere les resultats et on les stockes dans les states
        if(nextDatas == ""){
        results.then( res =>{
        setPokemons(res.pokemons); 
        setNextData(res.next_data);
        
        
        })}else{
            results = getPokemons(nextDatas)
            results.then( res =>{
                setPokemons(pokemons.concat(res.pokemons)); 
                setNextData(res.next_data);
                
      
       
        })
    }

      //ps je n'ai pas pu faire de state sur mon display suite à mon bug rencontré sur axios (voir le lisez-moi)
    const pokemon_array = [];
    const display = [];
// du coup j'ai utiliser une alternative me permettant d'envoyer directement l'utilisateur sur la page du pokemon ciblé

    const navigate = useNavigate();
   let poke_search = "";

    pokemons.map((pokemon) => pokemon_array.push(pokemon.name))
    pokemons.map(pokemon =>  url_data.push(pokemon.url));
   
    useEffect(()=>{
       
        const form = document.getElementById('form');
        form.addEventListener('submit',(e)=>{
            e.preventDefault();
             poke_search = document.getElementById('poke_name').value;
            navigate(`/display_pokemon:${poke_search}`);
          
    })})
    

   for(let i=0; i<pokemon_array.length;i++){
       display.push(
            <Generate_pokemon_card name ={pokemon_array[i]} id= {i+1} key= {i+1}/>,
           
        )
   
    }
   
    return(
        <div>
            
              <form id="form" className={styles.searchform} >
        <input  id='poke_name' type="text" placeholder="Pokemon Name or Pokemon ID"/>
        <button type='submit'>Search</button>
      </form>
            <div className={styles.pokemon_list}>
              
     { display }        
    
 </div>
 </div>
            
           
           )
           
    
   
}

export default Pokemon_list