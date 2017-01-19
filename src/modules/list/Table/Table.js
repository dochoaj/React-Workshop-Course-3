import React, { Component } from 'react'
import Row from '../Row'

class Table extends Component {
  constructor(props) {
    super(props)

    this.buildRows = this.buildRows.bind(this)
  }

  buildRows() {
    return this.props.data.map((item) => {
      const pokemon = {
        name: item.name,
        pokedexNumber: item.url.match(/\/\d+\//)[0].replace(/\//g, ''),
      }

      return <Row key={pokemon.name} pokemon={pokemon} />
    })
  }

  render() {
    return (
      <table className="table table-condensed">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {this.buildRows()}
        </tbody>
      </table>
    )
  }
}

Table.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.object),
}

export default Table
