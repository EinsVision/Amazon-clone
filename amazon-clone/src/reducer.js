export const initialState = {
  basket: [
  {
    id: "45353453",
    title: "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
    price: 598.99,
    rating: 4,
    image: "https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg"
  },
  {
    id: "45353453",
    title: "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
    price: 598.99,
    rating: 4,
    image: "https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg"
  },
],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch(action.type){
    case 'ADD_TO_BASKET':
      // Logic for adding item to basket
      return { 
        ...state,
        basket: [...state.basket, action.item],

      };
    case 'REMOVE_FROM_BASKET':
      // Logic for Removing item from basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

      if( index >= 0) {
        // item exists in basket, remove it.
        newBasket.splice(index, 1);
            
      } else{
        console.warn(
          `can't remove product (id: ${action.id}) `
        );
      }

      return { 
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
}

export default reducer;