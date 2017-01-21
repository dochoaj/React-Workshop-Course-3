import { PokemonAxios } from '../../utils'

export const FETCH_POKEMON = 'FETCH_POKEMON'
export const LOADING_POKEMON = 'LOADING_POKEMON'

export function fetchPokemon(id) {
  return dispatch => {
    PokemonAxios.get(`/pokemon/${id}`)
      .then(response => {
        dispatch({ type: FETCH_POKEMON, payload: response.data })
      })
  }
}

export function triggerLoading() {
  return dispatch => {
    dispatch({ type: LOADING_POKEMON, payload: true })
  }
}
