import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPokemonList } from '../list'

import View from './View'

function mapStateToProps(state) {
  return {
    results: state.list.data.results,
    loading: state.list.loading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPokemonList: bindActionCreators(fetchPokemonList, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
