import { pokemonApi } from "../../../api/pokemonsApi";
import { setPokemons, startLoadingPokemos } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
    return async(dispatch, getState) => {
        dispatch(startLoadingPokemos());
        const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page*10}`)
        dispatch(setPokemons({pokemons: data.results, page: page + 1}))
    }
}