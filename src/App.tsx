import { useReducer } from "react";
import "./App.css";
import Announcement from "./components/Announcement";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NewsLetter from "./components/Newsletter";
import { ProductContext } from "./contexts/productContext";
import ProductBoard from "./product/ProductBoard";
import { initialState, productsReducer } from "./reducers/productsReducer";

export default function App() {
    const [productsState, productDispatch] = useReducer(
        productsReducer,
        initialState,
    );

    return (
        <ProductContext value={{ productsState, productDispatch }}>
            <Announcement />
            <Header />
            <ProductBoard />
            <NewsLetter />
            <Footer />
        </ProductContext>
    );
}
