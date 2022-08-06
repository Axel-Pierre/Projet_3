import React from 'react';
import { useReducer } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import pokeReducer from '../reducers/poke_reducer.js';
const poke_context = React.createContext();
import Pokemon_list from './Pokemon_list'
import Display_pokemon from './display_pokemon_card';
import styles_2 from '../modules_css/Pokemon_card.module.css';
function Index(){
function show() {
  
    const form = document.getElementById('form');
    form.classList.remove(styles_2.hidden)

}
  const [state, dispatch] = useReducer(pokeReducer, []);

  
  function search(){
    const form = document.getElementById('form');
    form.addEventListener('submit',(e)=>{
      e.preventDefault();
      console.log('ok');
    })
  }
return(
  <Router>
    <div id='container'>
    <header>
    <section className="header">
      <nav className="nav">
        <ul className="nav__wrapper">
          <li className="nav__item_1"><Link to="/">Mon Pokedex</Link ></li>
          <li className="nav__item_2">ID</li>
        </ul>
      </nav>
      
    </section>
  </header>
  <main>
   
        <br/>
        
          <Routes>
          <Route path="/" element ={<Pokemon_list/>}/>
          <Route path="*" element ={<Pokemon_list/>}/>
          <Route path="/display_pokemon:id" element ={<Display_pokemon/>}/>
          </Routes>
        <poke_context.Provider value={{state, dispatch}}>
        
        </poke_context.Provider>
        
    </main>
    <footer>
        
    </footer>
  </div>
  </Router>
)

}

export default Index