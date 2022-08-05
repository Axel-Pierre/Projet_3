import React from 'react';
import { useReducer } from 'react';
import pokeReducer from '../reducers/poke_reducer.js';
const poke_context = React.createContext();
import Pokemon_list from './Pokemon_list'
function Index(){

  const [state, dispatch] = useReducer(pokeReducer, []);
return(
    <div id='container'>
    <header>
    <section className="header">
      <nav className="nav">
        <ul className="nav__wrapper">
          <li className="nav__item_1"><a href="#">Mon Pokedex</a></li>
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
        <poke_context.Provider value={{state, dispatch}}>
        <Pokemon_list/>
        </poke_context.Provider>
    </main>
    <footer>
        
    </footer>
  </div>
)

}

export default Index