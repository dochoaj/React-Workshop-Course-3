import React, { Component } from 'react'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="pokemon-list-container">
        <h1>We all live in a pokemon world!</h1>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.element,
}

export default App
