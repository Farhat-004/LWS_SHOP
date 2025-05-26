import { products } from "../data/products";

const initialState = {
    productList: [...products],
};
function productsReducer(state, action) {
    switch (action.type) {
        case "SORT": {
            let sortedList;
            if (action.payload == "All") {
                sortedList = products;
            } else if (action.payload == "popular") {
                let newProducts = [
                    ...state.productList.filter(
                        (item) => item.ratings == 4 || item.ratings == 5
                    ),
                ];
                sortedList = newProducts;
            } else if (action.payload == "new") {
                let newProducts = [
                    ...state.productList.filter((item) => item.status == "new"),
                ];
                sortedList = newProducts;
            } else if (action.payload == "lowToHigh") {
                let lowProducts = [
                    ...state.productList.sort((l, h) => l.price - h.price),
                ];
                sortedList = lowProducts;
            } else if (action.payload == "HighToLow") {
                let highProducts = [
                    ...state.productList.sort((l, h) => h.price - l.price),
                ];
                sortedList = highProducts;
            }
            return {
                ...state,
                productList: sortedList,
            };
        }
        case "UPDATE_STOCK": {
            let updatedStock = { ...state };
            updatedStock = updatedStock.productList.map((item) => {
                if (item.title == action.product.title && action.sign == "+") {
                    return {
                        ...item,
                        stock: item.stock - 1,
                        quantity: item.quantity + 1,
                    };
                } else if (
                    item.title == action.product.title &&
                    action.sign == "-"
                ) {
                    return {
                        ...item,
                        stock: item.stock + item.quantity - 1,
                        quantity: 1,
                    };
                } else {
                    return item;
                }
            });
            return {
                ...state,
                productList: updatedStock,
            };
        }
        default:
            return state;
    }
}

export { initialState, productsReducer };
