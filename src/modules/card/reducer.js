import {
  FETCH_POKEMON,
  LOADING_POKEMON,
} from './actions'

const initialState = {
  data: {},
  loading: true,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POKEMON:
      return { ...state, data: action.payload, loading: false }
    case LOADING_POKEMON:
      return { ...state, loading: true }
    default:
      return state
  }
}
