import { TextareaAutosize } from "@mui/material";
import { style } from "@mui/system";
import { useEffect ,useState } from "react"
import { getPokemonsUrl, getPokemonsEvolution } from "../js/Pokemon_service"
import styles from '../modules_css/Card_pokemon.module.css'
const controller = new AbortController();
 function Display_pokemon(){

// cette fonction permet de recuperer les informations des evolutions
  async function evolution (url){
       
        getPokemonsEvolution(url).then(   
            response => {
               
               if(response?.chain.species.name == pokemonData.name ){
                
                setActualPokemon(Object.assign(pokemonData,{Actual_pokemon :response.chain.species.url.split('/').reverse()[1]}))
                setUrlImg(Object.assign(pokemonData,{evolution_one_img :response.chain.species.url.split('/').reverse()[1]}))
                setEvolves(Object.assign(pokemonData,{evolution_one : pokemonData.name}))

                setEvolves(Object.assign(pokemonData,{evolution_two : response.chain.evolves_to[0].species.name}))
                setUrlImg(Object.assign(pokemonData,{evolution_two_img :response.chain.evolves_to[0].species.url.split('/').reverse()[1]}))

                setEvolves(Object.assign(pokemonData,{evolution_three: response.chain.evolves_to[0].evolves_to[0].species.name}))
                setUrlImg(Object.assign(pokemonData,{evolution_three_img: response.chain.evolves_to[0].evolves_to[0].species.url.split('/').reverse()[1]}))

               }else if(response?.chain.evolves_to[0].species.name == pokemonData.name ){
               
                setActualPokemon(Object.assign(pokemonData,{Actual_pokemon : response.chain.evolves_to[0].species.url.split('/').reverse()[1]}))

                setEvolves(Object.assign(pokemonData,{evolution_one : response.chain.species.name}))
                setUrlImg(Object.assign(pokemonData,{evolution_one_img :response.chain.species.url.split('/').reverse()[1]}))

                setEvolves(Object.assign(pokemonData,{evolution_two : pokemonData.name}))
                setUrlImg(Object.assign(pokemonData,{evolution_two_img :response.chain.evolves_to[0].species.url.split('/').reverse()[1]}))
               
                setEvolves(Object.assign(pokemonData,{evolution_three : response.chain.evolves_to[0].evolves_to[0].species.name}))
                setUrlImg(Object.assign(pokemonData,{evolution_three_img: response.chain.evolves_to[0].evolves_to[0].species.url.split('/').reverse()[1]}))

               }else if(response?.chain.evolves_to[0].evolves_to[0].species.name == pokemonData.name){
                setActualPokemon(Object.assign(pokemonData,{Actual_pokemon : response.chain.evolves_to[0].evolves_to[0].species.url.split('/').reverse()[1]}))

                setUrlImg(Object.assign(pokemonData,{evolution_one_img :response.chain.species.url.split('/').reverse()[1]}))
                setEvolves(Object.assign(pokemonData,{evolution_one : response.chain.species.name}))

                setEvolves(Object.assign(pokemonData,{evolution_two : response.chain.evolves_to[0].species.name}))
                setUrlImg(Object.assign(pokemonData,{evolution_two_img :response.chain.evolves_to[0].species.url.split('/').reverse()[1]}))

                setEvolves(Object.assign(pokemonData,{evolution_three: pokemonData.name}))
                setUrlImg(Object.assign(pokemonData,{evolution_three_img: response.chain.evolves_to[0].evolves_to[0].species.url.split('/').reverse()[1]}))
               }
            })}
            
    // cette function permet de recuperer le description et la categorie du pokemon
    async function data_sup (){
        getPokemonsUrl(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then(
         (response) =>{
          
        setUrl(response.evolution_chain.url);
             const egg_group = [];
             response.egg_groups.forEach(e => egg_group.push(e.name))
            setSupData(Object.assign(pokemonData,{egg_groups : egg_group.toString(),}))
             //setPokemonData(Object.assign(pokemonData,{egg_group : response.egg_groups}))
            setSupData(Object.assign(pokemonData,
             {description : response.flavor_text_entries[16].flavor_text,
         }))
         }
     )}

   // cela permet de recuperer l'id qui est dans l'url 
    const id =  location.href.split(':')[3]

    // declaration des states
    const moves = [];
    const [actualPokemon,setActualPokemon] = useState({});
    const [url,setUrl] = useState();
    const [url_img,setUrlImg] = useState({});
    const [pokemonData,setPokemonData] = useState({});
    const [supData,setSupData] = useState({});
    const [evolves,setEvolves] = useState({
        evolution_one : '',
        evolution_two : '',
        evolution_three :''
    });
    
    const types = [];
    const abilities = [];
    //requete permettant de recevoir les informations cl?? du pokemon (sa taille,son poids, ses stats...)
    getPokemonsUrl(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
            (response) => {
                
                
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
                weight : response.weight /10,
                height: response.height /10,
                abilities : abilities.toString(),
                moves : moves.toString(),
                
            })
            
        })
        .then(data_sup())
        .then(evolution(url))
       
        useEffect (()=> {
        if(evolves.evolution_one == ""
         && evolves.evolution_two == "" 
         && evolves.evolution_three == ""){console.log('no_evolution')}
         
        })
            
    
    return(
     <div className={styles.card}>
        <div className={styles.name}>
        <p style ={{textAlign:'center'}}>
           
            Types : {pokemonData.type} 
        </p>
        <div className={styles.details}>
           <p> Hp : {pokemonData.hp} </p>
           <p> Attack : {pokemonData.attack} </p>
           <p> Defense {pokemonData.defense} </p>
           <p> SpecialAttack : {pokemonData.spAttack} </p>
           <p> SpecialDefense : {pokemonData.spDefense} </p>
           <p> Speed : {pokemonData.speed}</p>
           <p> Height :{pokemonData.height}m</p>
           <p> Weight : {pokemonData.weight} Kg</p>
           <p>Abilities : {pokemonData.abilities}</p>
        </div>
        <div className={styles.imgPrincipal}>
        <img src={`https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${actualPokemon.Actual_pokemon}.png`} width='50%'/>
        <p>{pokemonData.name}</p>  <p>id:{actualPokemon.Actual_pokemon}</p>
       </div>
        </div>
        <div className={styles.description}>
          <div className={styles.desc}> 
        <p style ={{textAlign:'center'}}>
           {supData.description}
        </p>  
        </div> 
        <div className={styles.evolution}>
            <div>
                
          <p> {evolves.evolution_one} </p>
          <br/> 
           <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url_img.evolution_one_img}.png`}></img>
       </div>
         {evolves.evolution_two ?
       <div>
         
       <p>{'evolve to '+ evolves.evolution_two}</p>
       <br/> 
       <img  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url_img.evolution_two_img}.png`}/>
       </div> : ""}
            
          {evolves.evolution_three?<div> <p>{'evolve to '+ evolves.evolution_three}</p> 
          <br/> 
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url_img.evolution_three_img}.png`}/>
          </div>: ""} 
          
       </div>
        </div>
        </div>
     
     
    )

}

export default Display_pokemon