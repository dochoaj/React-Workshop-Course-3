import React, { Component } from 'react'
import { Link } from 'react-router'

import './PokemonCard.scss'

class PokemonCard extends Component {
  buildTypes() {
    return this.props.types.map((typeItem) => {
      const key = typeItem.slot
      const name = typeItem.type.name

      return (
        <div
          className="pokemon-type"
          key={key}
          >
          {name}
        </div>
      )
    })
  }

  render() {
    return (
      <div className="pokemon-card">
        <div className="pokemon-title">
          <div className="pokemon-image">
            <img
              className="img img-circle"
              src={this.props.sprites.front_default}
              alt={this.props.name}
            />
          </div>
          <div className="pokemon-name">
            {`# ${this.props.id} ${this.props.name}`}
          </div>
        </div>
        <div className="pokemon-data">
          <div className="pokemon-types">
            {this.buildTypes()}
          </div>
          <div className="pokemon-data-row">
            <span className="title">Height:</span>
            <span className="value">{this.props.height / 10} mts.</span>
          </div>
          <div className="pokemon-data-row">
            <span className="title">Width:</span>
            <span className="value">{this.props.weight / 10} kgs.</span>
          </div>
        </div>
        <Link to="/">
          Back to list
        </Link>
      </div>
    )
  }
}

PokemonCard.propTypes = {
  id: React.PropTypes.number,
  sprites: React.PropTypes.shape({
    front_default: React.PropTypes.string,
  }),
  name: React.PropTypes.string,
  weight: React.PropTypes.number,
  height: React.PropTypes.number,
  types: React.PropTypes.arrayOf(React.PropTypes.object),
}

export default PokemonCard
