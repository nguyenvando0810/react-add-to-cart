import * as types from './../constants/actionType'

export const addToCart = (product, quantity) => {
  return {
    type: types.ADD_TO_CART,
    product,
    quantity
  }
}

export const deleteCart = (id) => {
  return {
    type: types.DELETE_ITEM_CART,
    id
  }
}

export const updateProductCart = (product, quantity) => {
  return {
    type: types.UPDATE_QUANTITY_CART,
    product,
    quantity
  }
}

export const completePurchase = (totalCart) => {
  return {
    type: types.UPDATE_TOTAL_CART,
    totalCart
  }
}