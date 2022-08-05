
import Generate_pokemon_card from "./Generate_pokemon_card";
import  {getPokemons, getPokemonsUrl} from "../js/Pokemon_service";
import { useState, useEffect } from "react";


 function Pokemon_list(){
    
   let  results = getPokemons();
   const url_data = [] ;
   const [pokemons,setPokemons] = useState([]);

   const [nextDatas,setNextData] = useState();
  
    useEffect( ( )=>{
        if(nextDatas == ""){
        results?.then( res =>{
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
        
 }})
   
    const pokemon_array = [];
   
   
    const display = [];
   
    pokemons.map((pokemon) => pokemon_array.push(pokemon.name))
    pokemons.map(pokemon =>  url_data.push(pokemon.url));
   console.log(display);

   for(let i=0; i<pokemon_array.length;i++){
       display.push(
            <Generate_pokemon_card name ={pokemon_array[i]} id= {i+1} key= {i+1}/>,
           
        )
   
    }
       
    return(
            <div className='pokemon_list'>
    {display}        
    
 </div>

            
           
           )
           
    
   
}

export default Pokemon_list