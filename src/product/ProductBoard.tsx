import { useReducer } from "react";
import CartSection from "../components/CartSection";
import { CartContext } from "../contexts/CartContext";
import { cartReducer, initialState } from "../reducers/cartReducer";
import ProductSection from "./ProductsSection";

export default function ProductBoard() {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <main className="container mx-auto px-4 py-8 md:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <CartContext value={{ state, dispatch }}>
                    <ProductSection />
                    <CartSection />
                </CartContext>
            </div>
        </main>
    );
}
