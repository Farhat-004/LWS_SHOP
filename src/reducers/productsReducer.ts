import { products } from "../data/products";
import type { Product, ProductsAction, ProductsState } from "../types";

const filterBySearch = (productList: Product[], query: string): Product[] => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
        return [...products];
    }

    return productList.filter((product) =>
        product.title.toLowerCase().includes(normalizedQuery),
    );
};

export const initialState: ProductsState = {
    productList: [...products],
};

export function productsReducer(
    state: ProductsState,
    action: ProductsAction,
): ProductsState {
    switch (action.type) {
        case "SORT": {
            let sortedList: Product[];

            if (action.payload === "All") {
                sortedList = [...products];
            } else if (action.payload === "popular") {
                sortedList = state.productList.filter(
                    (item) => item.ratings === 4 || item.ratings === 5,
                );
            } else if (action.payload === "new") {
                sortedList = state.productList.filter(
                    (item) => item.status === "new",
                );
            } else if (action.payload === "lowToHigh") {
                sortedList = [...state.productList].sort(
                    (low, high) => low.price - high.price,
                );
            } else {
                sortedList = [...state.productList].sort(
                    (low, high) => high.price - low.price,
                );
            }

            return {
                ...state,
                productList: sortedList,
            };
        }
        case "SEARCH":
            return {
                ...state,
                productList: filterBySearch(products, action.payload),
            };
        case "UPDATE_STOCK":
            return {
                ...state,
                productList: state.productList.map((item) => {
                    if (item.title !== action.product.title) {
                        return item;
                    }

                    if (action.sign === "+") {
                        return {
                            ...item,
                            stock: item.stock - 1,
                            quantity: item.quantity + 1,
                        };
                    }

                    return {
                        ...item,
                        stock: item.stock + item.quantity - 1,
                        quantity: 1,
                    };
                }),
            };
        default:
            return state;
    }
}
