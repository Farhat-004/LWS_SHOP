import { useContext, useState } from "react";
import "./App.css";
import Announcement from "./components/Announcement";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NewsLetter from "./components/Newsletter";
import ProductBoard from "./product/ProductBoard";
import { ProductContext } from "./contexts/productContext";
import { products } from "./data/products";
function App() {
    const [productList, setProductList] = useState(products);
    return (
        <ProductContext value={{ productList, setProductList }}>
            <Announcement />
            <Header />
            <ProductBoard />
            <NewsLetter />
            <Footer />
        </ProductContext>
    );
}

export default App;
