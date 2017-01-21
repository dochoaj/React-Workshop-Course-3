import Axios from 'axios'

export default Axios.create({
  baseURL: 'http://pokeapi.co/api/v2',
  timeout: 25000,
})
