'use client'
import { Provider } from "react-redux"
import { store } from "."
import { useEffect } from "react"
import { setFavoritesPokemons } from "./pokemons/pokemons"

interface Props {
    children: React.ReactNode

}
export const Providers=({children}:Props)=>{
    useEffect(()=>{
        const pokemons = JSON.parse(localStorage.getItem('favoritePokemons')?? '{}')
        store.dispatch(setFavoritesPokemons(pokemons))
    },[])
    return(
        <Provider store={store}>
        {children}
        </Provider>
    )
}