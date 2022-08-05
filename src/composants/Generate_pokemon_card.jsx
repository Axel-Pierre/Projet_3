
function Generate_pokemon_card({name,id}){
return(
    <div class="pokemon_card">
             
    <div class="pokemon_img">
       <img src={`https://raw.githubusercontent.com/PokeAPI
       /sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/${id}.png`} width="100%"/>
       </div>
       <div class="pokemon_name">
           <button  onClick={(e)=> console.log(id)}>{name}</button>
       </div>
</div>
)

}

export default Generate_pokemon_card