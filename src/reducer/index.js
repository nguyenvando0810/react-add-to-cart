import { combineReducers } from 'redux'
import products from './products'
import cart from '../reducer/cart'

const reducers = combineReducers({
  products,
  cart
})

export default reducers