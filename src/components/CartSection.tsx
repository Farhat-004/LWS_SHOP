import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/productContext";
import type { Product, StockUpdateSign } from "../types";
import getImgUrl from "../utils/imgUrl";

export default function CartSection() {
    const productContext = useContext(ProductContext);
    const cartContext = useContext(CartContext);

    if (!productContext || !cartContext) {
        throw new Error("CartSection must be used within the shop providers.");
    }

    const { productDispatch } = productContext;
    const { state, dispatch } = cartContext;
    const totalPrice = state.cartList.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
    );
    const discount = totalPrice * 0.2;
    const total = state.cartList.length > 0 ? totalPrice - discount + 15 : 0;

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

    const handleUpdateStock = (product: Product, sign: StockUpdateSign) => {
        productDispatch({
            type: "UPDATE_STOCK",
            product,
            sign,
        });

        dispatch({
            type: "UPDATE_CART_STOCK",
            product,
            sign,
        });
    };

    return (
        <div className="lg:col-span-1">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
                <h2 className="mb-6 text-2xl font-bold">YOUR CART</h2>

                {state.cartList.map((item) => (
                    <div
                        key={item.title}
                        className="mb-4 flex items-start space-x-4 border-b border-gray-200 pb-4"
                    >
                        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded bg-gray-100">
                            <img
                                src={getImgUrl(item.image)}
                                alt={item.title}
                                className="h-full w-auto object-cover"
                            />
                        </div>
                        <div className="flex-grow">
                            <div className="flex justify-between">
                                <h3 className="font-medium">{item.title}</h3>
                                <button
                                    type="button"
                                    onClick={() => handleRemoveFromCart(item)}
                                    className="text-sm text-red-500"
                                >
                                    ×
                                </button>
                            </div>
                            <p className="text-sm text-gray-500">
                                Size: {item.size}
                            </p>
                            <p className="text-sm text-gray-500">
                                Color: {item.color}
                            </p>
                            <div className="mt-2 flex items-center justify-between">
                                <p className="font-bold">{item.price}</p>
                                <div className="flex items-center space-x-2">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleUpdateStock(item, "-")
                                        }
                                        className="flex h-6 w-6 items-center justify-center rounded bg-gray-100"
                                        disabled={item.quantity === 1}
                                    >
                                        −
                                    </button>
                                    <span className="text-sm">
                                        {item.quantity}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleUpdateStock(item, "+")
                                        }
                                        className="flex h-6 w-6 items-center justify-center rounded bg-gray-100"
                                        disabled={item.quantity === item.stock}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
                    <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
                        <img
                            src="./assets/img/image 9-2.png"
                            alt="Checkered Shirt"
                            className="h-full w-auto object-cover"
                        />
                    </div>
                    <div className="flex-grow">
                        <div className="flex justify-between">
                            <h3 className="font-medium">Checkered Shirt</h3>
                            <span className="text-red-500 text-sm">×</span>
                        </div>
                        <p className="text-sm text-gray-500">Size: Medium</p>
                        <p className="text-sm text-gray-500">Color: Red</p>
                        <div className="flex justify-between items-center mt-2">
                            <p className="font-bold">$180</p>
                            <div className="flex items-center space-x-2">
                                <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                                    −
                                </button>
                                <span className="text-sm">1</span>
                                <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
                    <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
                        <img
                            src="./assets/img/image 9-2.png"
                            alt="Skinny Fit Jeans"
                            className="h-full w-auto object-cover"
                        />
                    </div>
                    <div className="flex-grow">
                        <div className="flex justify-between">
                            <h3 className="font-medium">Skinny Fit Jeans</h3>
                            <span className="text-red-500 text-sm">×</span>
                        </div>
                        <p className="text-sm text-gray-500">Size: Large</p>
                        <p className="text-sm text-gray-500">Color: Blue</p>
                        <div className="flex justify-between items-center mt-2">
                            <p className="font-bold">$240</p>
                            <div className="flex items-center space-x-2">
                                <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                                    −
                                </button>
                                <span className="text-sm">1</span>
                                <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/*  */}
                {/*  */}
                {/* Summary */}
                {/*  */}
                {/*  */}
                <div className="mt-6">
                    <h3 className="mb-4 text-lg font-bold">Order Summary</h3>

                    <div className="mb-4 space-y-2">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-medium">${totalPrice}</span>
                        </div>
                        <div className="flex justify-between text-red-500">
                            <span>Discount (-20%)</span>
                            <span>-${discount}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Delivery Fee</span>
                            <span className="font-medium">$15</span>
                        </div>
                        <div className="flex justify-between border-t border-gray-200 pt-2 text-lg font-bold">
                            <span>Total</span>
                            <span>$ {total}</span>
                        </div>
                    </div>

                    <div className="mb-6 flex items-center space-x-2">
                        <div className="relative flex-grow">
                            <input
                                type="text"
                                placeholder="Add promo code"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                            />
                            {/* <span className="absolute left-3 top-2.5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                    />
                                </svg>
                            // unnecessary coupon logo </span> */}
                        </div>
                        <button className="rounded-md bg-black px-4 py-2 text-sm text-white">
                            Apply
                        </button>
                    </div>

                    <a
                        href="#"
                        className="block rounded-md bg-black py-3 text-center text-white transition-colors hover:bg-gray-800"
                    >
                        Go to Checkout
                        <span className="ml-2 inline-block">→</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
