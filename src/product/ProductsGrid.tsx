import { useContext } from "react";
import { BlackStars, GoldenStars } from "../components/Stars";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/productContext";
import type { Product } from "../types";
import getImgUrl from "../utils/imgUrl";

export default function ProductsGrid() {
    const productContext = useContext(ProductContext);
    const cartContext = useContext(CartContext);

    if (!productContext || !cartContext) {
        throw new Error("ProductsGrid must be used within the shop providers.");
    }

    const { productsState, productDispatch } = productContext;
    const { state, dispatch } = cartContext;

    const handleAddToCart = (product: Product) => {
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

    const handleRemoveFromCart = (product: Product) => {
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
            {productsState.productList.length === 0 && (
                <h1 className="text-center text-3xl text-red-500">
                    No products found
                </h1>
            )}
            {productsState.productList.length >= 1 &&
                productsState.productList.map((product) => (
                    <div
                        key={product.id}
                        className="overflow-hidden rounded-lg bg-gray-100 transition-transform duration-300 hover:scale-[1.02]"
                    >
                        <div className="flex h-48 items-center justify-center bg-gray-200">
                            <img
                                src={getImgUrl(product.image)}
                                alt={product.title}
                                className="h-full w-auto object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="font-medium">{product.title}</h3>
                            <div className="flex items-center justify-between">
                                <div className="my-1 flex items-center">
                                    <div className="flex text-yellow-400">
                                        <GoldenStars num={product.ratings} />
                                        <BlackStars num={5 - product.ratings} />
                                    </div>
                                    <span className="ml-1 text-xs text-gray-500">
                                        {product.ratings}/5
                                    </span>
                                </div>
                                <span className="text-xs text-gray-700">
                                    ({product.stock} pcs left)
                                </span>
                            </div>
                            <p className="font-bold">${product.price}</p>

                            {state.cartList.some(
                                (item) => item.id === product.id,
                            ) ? (
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleRemoveFromCart(product)
                                    }
                                    className="mt-2 flex w-full items-center justify-center rounded bg-red-800 py-1 text-gray-100"
                                >
                                    Remove from Cart
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => handleAddToCart(product)}
                                    className="mt-2 flex w-full items-center justify-center rounded bg-gray-800 py-1 text-gray-100 transition-all active:translate-y-1 active:bg-gray-900 disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-gray-400"
                                    disabled={product.stock === 0}
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
