import * as types from '../constants/actionType'

// const data = JSON.parse(localStorage.getItem('CART'))
const initialState = [{
    product: {
      id: 2,
      name: 'Xiaomi Redmi Note 7 64GB',
      imageUrl: 'https://cdn.tgdd.vn/Products/Images/42/167535/xiaomi-redmi-note-7-600x600.jpg',
      description: 'Xiaomi Redmi Note 7 64GB',
      price: 1200,
      inventory: 10,
      rating: 3
    },
    quantity: 4
  },
  {
    product: {
      id: 3,
      name: 'Samsung Galaxy S10+ (512GB)',
      imageUrl: 'https://cdn.tgdd.vn/Products/Images/42/198986/samsung-galaxy-s10-plus-512gb-ceramic-black-600x600.jpg',
      description: 'Samsung Galaxy S10+ (512GB)',
      price: 1500,
      inventory: 15,
      rating: 2
    },
    quantity: 2
  }
]

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      state = [...state, {
        product: action.product,
        quantity: action.quantity
      }]

      return [...state];

    default:
      return [...state];
  }
}

export default CartReducer