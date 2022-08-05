
import axios from 'axios';
const controller = new AbortController();

export  async function getPokemons(API_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/' ) {
    
    const {data} = await axios.get(API_ENDPOINT,{signal: controller.signal});
    
    return{
        data : data,
        pokemons : data.results,
        next_data : data.next,

    }
    
}

export  async function getPokemonsUrl(url) {
    
    const {data} = await axios.get(url);
    return data;
    
        
    
    
}


