import {useEffect, useRef, useState } from 'react';
import axios from 'axios';

 const controller = new AbortController();
  
  

export  async function getPokemons(API_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/' ) {
    
    const {data} = await axios.get(API_ENDPOINT);
    
    return{
        data : data,
        pokemons : data.results,
        next_data : data.next,

    }
    
}

export  async function getPokemonsUrl(API_ENDPOINT = url) {
    
    const [poke_data,setdatas] = useState([]);
    const [loading, setLoading] = useState(true);
    const {data} = await axios.get(API_ENDPOINT,{signal: controller.signal});
    
    
        switch(loading){
            case true :
                
                setdatas(data)
                if(poke_data.length != 0){
                    setLoading(false);
                } 
                break;
            case  false : 
            useEffect(() => controller.abort()  )
            setLoading(true);
            setdatas("")
            break;
        }
       
    
   
    
    return poke_data;
    
    
    
}

export  async function getPokemonsEvolution(API_ENDPOINT = url) {

    const {data} = await axios.get(API_ENDPOINT,{signal: controller.signal});
    
       
    
   
    
    return data;
    
    
    
}
