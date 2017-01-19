import React, { Component } from 'react'
import PokemonCard from './PokemonCard'

class View extends Component {
  componentWillMount() {
    this.props.triggerLoading()
  }

  componentDidMount() {
    this.props.fetchPokemon(this.props.params.number)
  }

  buildContent() {
    if (this.props.loading) {
      return <h1>Loading ...</h1>
    }

    return (
      <PokemonCard {...this.props.pokemon} />
    )
  }

  render() {
    return this.buildContent()
  }
}

View.propTypes = {
  params: React.PropTypes.shape({
    number: React.PropTypes.string,
  }),
  pokemon: React.PropTypes.shape({
    sprites: React.PropTypes.shape({
      front_default: React.PropTypes.string,
    }),
    name: React.PropTypes.string,
    weight: React.PropTypes.number,
    height: React.PropTypes.number,
    types: React.PropTypes.arrayOf(React.PropTypes.object),
  }),
  loading: React.PropTypes.bool,
  fetchPokemon: React.PropTypes.func,
  triggerLoading: React.PropTypes.func,
}

export default View
