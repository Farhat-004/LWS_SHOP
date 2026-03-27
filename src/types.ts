import type { Dispatch } from "react";

export type ProductStatus = "new" | "popular";
export type SortOption = "All" | "popular" | "new" | "lowToHigh" | "HighToLow";
export type StockUpdateSign = "+" | "-";

export interface Product {
    image: string;
    title: string;
    id: number;
    quantity: number;
    ratings: number;
    price: number;
    color: string;
    size: number;
    stock: number;
    status: ProductStatus;
}

export interface ProductsState {
    productList: Product[];
}

export interface CartState {
    cartList: Product[];
}

export type ProductsAction =
    | { type: "SORT"; payload: SortOption }
    | { type: "SEARCH"; payload: string }
    | { type: "UPDATE_STOCK"; product: Product; sign: StockUpdateSign };

export type CartAction =
    | { type: "ADD_TO_CART"; payload: Product }
    | { type: "REMOVE_FROM_CART"; payload: Product }
    | { type: "UPDATE_CART_STOCK"; product: Product; sign: StockUpdateSign };

export interface ProductContextValue {
    productsState: ProductsState;
    productDispatch: Dispatch<ProductsAction>;
}

export interface CartContextValue {
    state: CartState;
    dispatch: Dispatch<CartAction>;
}
