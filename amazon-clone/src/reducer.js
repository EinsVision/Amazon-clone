export const initialState = {
  basket: [],
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