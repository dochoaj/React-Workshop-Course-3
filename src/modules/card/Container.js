import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPokemon } from '../card'

import View from './View'

function mapStateToProps(state) {
  return {
    results: state.list.data.results,
    loading: state.list.loading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPokemon: bindActionCreators(fetchPokemon, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
