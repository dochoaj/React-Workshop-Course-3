import React, { Component } from 'react'

class View extends Component {
  componentDidMount() {
    this.props.fetchPokemonList()
  }

  render() {
    console.log(this.props.results)
    console.log(this.props.loading)

    return (
      <h1>We all live in a pokemon world!</h1>
    )
  }
}

View.propTypes = {
  results: React.PropTypes.arrayOf(React.PropTypes.object),
  loading: React.PropTypes.bool,
  fetchPokemonList: React.PropTypes.func,
}

export default View
