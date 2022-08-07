
import Generate_pokemon_card from "./Generate_pokemon_card";
import  {getPokemons, getPokemonsUrl} from "../js/Pokemon_service";
import { useState, useEffect  } from "react";
import styles from "../modules_css/PokemonList.module.css";
import {useNavigate} from 'react-router-dom';


 function Pokemon_list(){
    
        
   let  results = getPokemons();
   const url_data = [] ;
   const [windowHeight, setWindowHeight] = useState();
  const [scrollPosition, setScrollPosition] = useState();
   const [pokemons,setPokemons] = useState([]);
   const [filtre, setFiltre] = useState([]);
   const [nextDatas,setNextData] = useState();
  
   //on recupere les resultats et on les stockes dans les states
   useEffect(() =>{
        results.then( res =>{
        setPokemons(res.pokemons); 
        setNextData(res.next_data);
        setFiltre(res.pokemons);
        })
    },[])

    function getScrollPosition(e) {
        e.preventDefault();
        e.stopPropagation();
        const documentHeigth = Math.ceil(document.documentElement.scrollHeight);
        const windowHeight = Math.ceil(window.innerHeight);
        const scroll = Math.ceil(window.scrollY);
        setWindowHeight(scroll);
        setScrollPosition(documentHeigth - windowHeight);
    }
    useEffect(() => {
        window.addEventListener("scroll", getScrollPosition);
        if (
          scrollPosition !== undefined &&
          nextDatas !== undefined &&
          windowHeight !== undefined &&
          windowHeight >= scrollPosition
        ) {
          getPokemons(nextDatas)
            .then((response) => {
              return response;
            })
            .then((res) => {
              setNextData(res.data.next)
                setPokemons((prevState)=>[...prevState, ...res.data.results])
                setFiltre((prevState) => [...prevState,...res.data.results]);
            })
            .catch((error) => {
              console.log(error);
            });
        }
        return () => {
          window.removeEventListener("scroll", getScrollPosition);
        };
      }, [windowHeight]);
      //ps je n'ai pas pu faire de state sur mon display suite à mon bug rencontré sur axios (voir le lisez-moi)
    const pokemon_array = [];
    const display = [];
// du coup j'ai utiliser une alternative me permettant d'envoyer directement l'utilisateur sur la page du pokemon ciblé

    
   let poke_search = "";

    pokemons.map((pokemon) => pokemon_array.push(pokemon.name))
    pokemons.map(pokemon =>  url_data.push(pokemon.url));
   
    
        function  Search (){
        
             poke_search = document.getElementById('poke_name').value;
             if(poke_search !=null){
             let  pokemon_filter  = filtre.filter(pokemon =>{ return pokemon.name.toLowerCase().includes(poke_search)})
                setPokemons(pokemon_filter);
             }
             if(poke_search === ""){
                setPokemons(filtre);
             }
            }
      
    

   for(let i=0; i<pokemons.length;i++){
       display?.push(
            <Generate_pokemon_card name ={pokemons[i].name} id= {pokemons[i].url.split('/').reverse()[1]} key= {i+1}/>,
           
        )
   
    }
   
    return(
        <div>
            
              <form id="form" className={styles.searchform} >
        <input onChange={Search} id='poke_name' type="text" placeholder="Pokemon Name"/>
        <button type='submit'>Search</button>
      </form>
            <div className={styles.pokemon_list}>
              
     { display }        
    
 </div>
 </div>
            
           
           )
           
    
   
}

export default Pokemon_list