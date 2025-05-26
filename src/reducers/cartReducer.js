const initialState = {
    cartList: [],
};

function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cartList: [...state.cartList, action.payload],
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartList: state.cartList.filter(
                    (item) => item.id !== action.payload.id
                ),
            };
        case "UPDATE_CART_STOCK": {
            return {
                ...state,
                cartList: [
                    ...state.cartList.map((item) => {
                        if (
                            item.title == action.product.title &&
                            action.sign == "+"
                        ) {
                            return {
                                ...item,
                                quantity: item.quantity + 1,
                            };
                        } else if (
                            item.title == action.product.title &&
                            action.sign == "-"
                        ) {
                            return {
                                ...item,
                                quantity: item.quantity - 1,
                            };
                        } else {
                            return item;
                        }
                    }),
                ],
            };
        }
        default:
            return state;
    }
}

export { initialState, cartReducer };
