import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'
import { Container as PokemonList } from './modules/list'
import { Container as PokemonCard } from './modules/card'

export default(
  <Route path="/" component={App}>
    <IndexRoute component={PokemonList} />
    <Route path="pokemons" component={PokemonList} />
    <Route path="pokemon/:id" component={PokemonCard} />
  </Route>
)
