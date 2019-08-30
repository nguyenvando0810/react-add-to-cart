import * as types from '../constants/actionType'

const data = JSON.parse(localStorage.getItem('CART'))
const initialState = data ? data : []

const CartReducer = (state = initialState, action) => {
  let indexCart = -1

  switch (action.type) {
    case types.ADD_TO_CART:
      indexCart = findIndexCart(state, action.product)

      if (indexCart !== -1) {
        state[indexCart].quantity += action.quantity
      } else {
        state = [...state, {
          product: action.product,
          quantity: action.quantity
        }]
      }

      localStorage.setItem('CART', JSON.stringify(state))

      return [...state];

    case types.DELETE_ITEM_CART:
      let newCart = state.filter((product) => {
        return product.product.id !== action.id
      })

      state = [...newCart]

      localStorage.setItem('CART', JSON.stringify(state))

      return [...state];

    case types.UPDATE_QUANTITY_CART:
      indexCart = findIndexCart(state, action.product)

      if (indexCart !== -1) {
        state[indexCart].quantity = action.quantity
      }

      localStorage.setItem('CART', JSON.stringify(state))

      return [...state];
    default:
      return [...state];
  }
}

let findIndexCart = (cart, product) => {
  let indexCart = -1

  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) {
        indexCart = i
        break
      }
    }
  }

  return indexCart
}

export default CartReducer;