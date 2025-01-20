import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonState {
  favorites:{[key: string]: SimplePokemon};
}
// const getInitialState = ():PokemonState => {
//     const favorites = JSON.parse(localStorage.getItem('favoritePokemons')?? '{}');
//     return favorites
// }
const initialState:PokemonState = {
favorites:{},
}

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritesPokemons: (state, action: PayloadAction<{[key: string]: SimplePokemon}>) => {
        state.favorites = action.payload;
    },
    toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
        const pokemon = action.payload;
        const { id} = pokemon;
        if(!!state.favorites[id]){
            delete state.favorites[id];
            return;
        }else{
            state.favorites[id]= pokemon;
        }
        localStorage.setItem('favoritePokemons', JSON.stringify(state.favorites))
    },
  }
});

export const {toggleFavorite, setFavoritesPokemons} = pokemonSlice.actions

export default pokemonSlice.reducer