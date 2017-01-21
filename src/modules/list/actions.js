import { PokemonAxios } from '../../utils'

export const FETCH_POKEMON_LIST = 'FETCH_POKEMON_LIST'
export const LOADING_POKEMON_LIST = 'LOADING_POKEMON_LIST'

export function fetchPokemonList() {
  return dispatch => {
    dispatch({ type: LOADING_POKEMON_LIST, payload: true })

    PokemonAxios.get('/pokemon')
      .then(response => {
        dispatch({ type: FETCH_POKEMON_LIST, payload: response.data })
      })
  }
}
