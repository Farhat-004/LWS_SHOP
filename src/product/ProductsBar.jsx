import { useContext } from "react";
import { ProductContext } from "../contexts/productContext";
import { products } from "../data/products";
export default function ProductsBar() {
    const { productList, setProductList } = useContext(ProductContext);
    const handleSort = (text) => {
        setProductList(products);
        if (text == "All") {
            setProductList(products);
        } else if (text == "popular") {
            let newProducts = [
                ...productList.filter(
                    (item) => item.ratings == 4 || item.ratings == 5
                ),
            ];
            setProductList(newProducts);
        } else if (text == "new") {
            let newProducts = [
                ...productList.filter((item) => item.status == "new"),
            ];
            setProductList(newProducts);
        } else if (text == "lowToHigh") {
            let lowProducts = [
                ...productList.sort((l, h) => l.price - h.price),
            ];
            setProductList(lowProducts);
        } else if (text == "HighToLow") {
            let highProducts = [
                ...productList.sort((l, h) => h.price - l.price),
            ];
            setProductList(highProducts);
        }
    };
    return (
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Your Products</h2>
            <div className="flex items-center space-x-2">
                <span className="text-sm">Sort by:</span>
                <select
                    onChange={(e) => handleSort(e.target.value)}
                    className="border rounded-md px-2 py-1 text-sm"
                >
                    <option value={"All"}>All</option>
                    <option value={"popular"}>Most Popular</option>
                    <option value={"new"}>Newest</option>
                    <option value={"lowToHigh"}>Price: Low to High</option>
                    <option value={"HighToLow"}>Price: High to Low</option>
                </select>
            </div>
        </div>
    );
}
