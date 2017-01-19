import React, { Component } from 'react'

class Row extends Component {
  render() {
    return (
      <tr>
        <th scope="row">{this.props.pokemon.pokedexNumber}</th>
        <td>{this.props.pokemon.name}</td>
      </tr>
    )
  }
}

Row.propTypes = {
  pokemon: React.PropTypes.shape({
    pokedexNumber: React.PropTypes.string,
    name: React.PropTypes.string,
  }),
}

export default Row
