import { useContext } from "react";
import { ProductContext } from "../contexts/productContext";
import getImgUrl from "../utils/imgUrl";
import { GoldenStars, BlackStars } from "../components/Stars";
import { CartContext } from "../contexts/CartContext";
// import { cartReducer, initialState } from "../reducers/cartReducer";

export default function ProductsGrid() {
    const { productsState, productDispatch } = useContext(ProductContext);
    const { state, dispatch } = useContext(CartContext);

    // const HandleUpdateStock = (product, sign) => {
    //     let nextProductList = productsState.productList.map((item) => {
    //         if (item.title == product.title && sign == "+") {
    //             return {
    //                 ...item,
    //                 stock: item.stock - 1,
    //                 quantity: item.quantity + 1,
    //             };
    //         } else if (item.title == product.title && sign == "-") {
    //             return {
    //                 ...item,
    //                 stock: item.stock + 1,
    //                 quantity: item.quantity - 1,
    //             };
    //         } else {
    //             return item;
    //         }
    //     });
    //     setProductList(nextProductList);
    // };
    const handleAddToCart = (product) => {
        productDispatch({
            type: "UPDATE_STOCK",
            product,
            sign: "+",
        });
        dispatch({
            type: "ADD_TO_CART",
            payload: product,
        });
    };

    const handleRemoveFromCart = (product) => {
        productDispatch({
            type: "UPDATE_STOCK",
            product,
            sign: "-",
        });
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: product,
        });
    };

    return (
        <div className="product-grid">
            {productsState.productList.length == 0 && (
                <h1 className="text-red-500 text-center  text-3xl">
                    No products found
                </h1>
            )}
            {productsState.productList.length >= 1 &&
                productsState.productList.map((product) => (
                    <div
                        key={product.id}
                        className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300"
                    >
                        <div className="h-48 bg-gray-200 flex items-center justify-center">
                            <img
                                src={getImgUrl(product.image)}
                                alt={product.title}
                                className="h-full w-auto object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="font-medium">{product.title}</h3>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center my-1">
                                    <div className="flex text-yellow-400">
                                        <GoldenStars num={product.ratings} />
                                        <BlackStars num={5 - product.ratings} />
                                    </div>
                                    <span className="text-xs text-gray-500 ml-1">
                                        {product.ratings}/5
                                    </span>
                                </div>
                                <span className="text-xs text-gray-700">
                                    ({product.stock} pcs left)
                                </span>
                            </div>
                            <p className="font-bold">${product.price}</p>

                            {state?.cartList.some(
                                (item) => item.id === product.id
                            ) ? (
                                <button
                                    onClick={() =>
                                        handleRemoveFromCart(product)
                                    }
                                    className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center"
                                >
                                    Remove from Cart
                                </button>
                            ) : (
                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900"
                                    disabled={product.stock == 0}
                                >
                                    Add to Cart
                                </button>
                            )}
                        </div>
                    </div>
                ))}
        </div>
    );
}
