import CartSection from "../components/CartSection";
import ProductSection from "./ProductsSection";
import { CartContext } from "../contexts/CartContext";
import { useReducer } from "react";
import { cartReducer, initialState } from "../reducers/cartReducer";
export default function ProductBoard() {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <main className="container mx-auto px-4 md:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <CartContext value={{ state, dispatch }}>
                    <ProductSection />

                    <CartSection />
                </CartContext>
            </div>
        </main>
    );
}
