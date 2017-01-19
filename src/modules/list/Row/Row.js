import React, { Component } from 'react'
import { Link } from 'react-router'

class Row extends Component {
  render() {
    return (
      <tr>
        <th scope="row">{this.props.pokemon.pokedexNumber}</th>
        <td>
          <Link to={`pokemon/${this.props.pokemon.pokedexNumber}`}>
            {this.props.pokemon.name}
          </Link>
        </td>
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
