import React, { Component } from 'react'
import Table from './Table'

class View extends Component {
  componentDidMount() {
    this.props.fetchPokemonList()
  }

  buildContent() {
    if (this.props.loading) {
      return (
        <h2>Loading...</h2>
      )
    }

    return (
      <Table data={this.props.results} />
    )
  }

  render() {
    console.log(this.props.results)
    console.log(this.props.loading)
    return this.buildContent()
  }
}

View.propTypes = {
  results: React.PropTypes.arrayOf(React.PropTypes.object),
  loading: React.PropTypes.bool,
  fetchPokemonList: React.PropTypes.func,
}

export default View
