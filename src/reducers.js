import { combineReducers } from 'redux'
import PokemonListReducer from './modules/list'

const reducers = combineReducers({
  list: PokemonListReducer,
})

export default reducers
