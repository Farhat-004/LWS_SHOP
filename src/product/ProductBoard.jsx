import CartSection from "../components/CartSection";
import ProductSection from "./ProductsSection";
import { CartContext } from "../contexts/CartContext";
import { useState } from "react";
export default function ProductBoard() {
    const [cartList, setCartList] = useState([]);

    return (
        <main className="container mx-auto px-4 md:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <CartContext value={{ cartList, setCartList }}>
                    <ProductSection />

                    <CartSection />
                </CartContext>
            </div>
        </main>
    );
}
