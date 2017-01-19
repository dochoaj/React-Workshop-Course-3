import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPokemon, triggerLoading } from '../card'

import View from './View'

function mapStateToProps(state) {
  return {
    pokemon: state.card.data,
    loading: state.card.loading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPokemon: bindActionCreators(fetchPokemon, dispatch),
    triggerLoading: bindActionCreators(triggerLoading, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
