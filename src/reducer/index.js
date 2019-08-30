import { combineReducers } from 'redux'
import products from './products'
import cart from '../reducer/cart'
import totalCart from '../reducer/totalCart'

const reducers = combineReducers({
  products,
  cart,
  totalCart
})

export default reducers