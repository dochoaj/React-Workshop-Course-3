import { combineReducers } from 'redux'
import PokemonListReducer from './modules/list'
import PokemonCardReducer from './modules/card'

const reducers = combineReducers({
  list: PokemonListReducer,
  card: PokemonCardReducer,
})

export default reducers
