export const actionType = {
  SET_USER: "SET_USER",
  SET_FOOD_ITEM: "SET_FOOD_ITEM",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionType.SER_FOOD_ITEM:
      return {
        ...state,
        foodItems: action.foodItems,
      };
    default:
      return state;
  }
};

export default reducer;
