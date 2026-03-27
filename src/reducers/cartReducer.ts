import type { CartAction, CartState } from "../types";

export const initialState: CartState = {
    cartList: [],
};

export function cartReducer(state: CartState, action: CartAction): CartState {
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
                    (item) => item.id !== action.payload.id,
                ),
            };
        case "UPDATE_CART_STOCK":
            return {
                ...state,
                cartList: state.cartList.map((item) => {
                    if (item.title !== action.product.title) {
                        return item;
                    }

                    return {
                        ...item,
                        quantity:
                            action.sign === "+"
                                ? item.quantity + 1
                                : item.quantity - 1,
                    };
                }),
            };
        default:
            return state;
    }
}
