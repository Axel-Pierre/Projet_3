import {useEffect, useRef, useState } from 'react';
import axios from 'axios';

 const controller = new AbortController();
  
  
/**
 * 
 * @param {url} API_ENDPOINT 
 * @returns 
 *Function permettant de recevoir des données de pokemons
 */
export  async function getPokemons(API_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/' ) {
    
    const {data} = await axios.get(API_ENDPOINT);
    
    return{
        data : data,
        pokemons : data.results,
        next_data : data.next,

    }
    
}
/**
 * 
 * @param {url} API_ENDPOINT 
 * @returns 
 * Destiné pour les données précise sur un pokemon
 */
export  async function getPokemonsUrl(API_ENDPOINT = url) {
    
    const {data} = await axios.get(API_ENDPOINT,{signal: controller.signal});
    
    return data

       
    
   
    
    return poke_data;
    
    
    
}
/**
 * 
 * @param {url} API_ENDPOINT 
 * @returns 
 * plus simple, permet de faire une requete visant à avoir les informations sur les evolutions
 */
export  async function getPokemonsEvolution(API_ENDPOINT = url) {

    const {data} = await axios.get(API_ENDPOINT,{signal: controller.signal});
    
       
    
   
    
    return data;
    
    
    
}
