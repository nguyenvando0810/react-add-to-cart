import * as types from '../constants/actionType'

const initialState = 0

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_TOTAL_CART:
      state = action.totalCart
      return state

    default:
      return state;
  }
}

export default reducer