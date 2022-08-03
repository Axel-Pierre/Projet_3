

import Pokemon_list from './Pokemon_list'
function Index(){
    
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
        
        <Pokemon_list/>
        
    </main>
    <footer>
        <button>Prev</button> <button>Next</button>
    </footer>
  </div>
)

}

export default Index