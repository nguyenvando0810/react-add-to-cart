const initialState = [{
    id: 1,
    name: 'Iphone 6 Plus (512GB)',
    imageUrl: 'https://cdn.tgdd.vn/Products/Images/42/114111/iphone-x-256gb-a1-600x600.jpg',
    description: 'Iphone 6 Plus (512GB)',
    price: 1000,
    inventory: 10,
    rating: 5
  },
  {
    id: 2,
    name: 'Xiaomi Redmi Note 7 64GB',
    imageUrl: 'https://cdn.tgdd.vn/Products/Images/42/167535/xiaomi-redmi-note-7-600x600.jpg',
    description: 'Xiaomi Redmi Note 7 64GB',
    price: 1200,
    inventory: 10,
    rating: 3
  },
  {
    id: 3,
    name: 'Samsung Galaxy S10+ (512GB)',
    imageUrl: 'https://cdn.tgdd.vn/Products/Images/42/198986/samsung-galaxy-s10-plus-512gb-ceramic-black-600x600.jpg',
    description: 'Samsung Galaxy S10+ (512GB)',
    price: 1500,
    inventory: 15,
    rating: 2
  }
]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
}

export default reducer