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
function Index(){

  const [state, dispatch] = useReducer(pokeReducer, []);
return(
  <Router>
    <div id='container'>
    <header>
    <section className="header">
      <nav className="nav">
        <ul className="nav__wrapper">
          <li className="nav__item_1"><Link to="/">Mon Pokedex</Link></li>
          <li className="nav__item_2">ID</li>
        </ul>
      </nav>
      <form className="searchform cf">
        <input type="text" placeholder="Is it me you’re looking for?"/>
        <button type="submit">Search</button>
      </form>
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