import { useContext } from "react";
import { ProductContext } from "../contexts/productContext";

export default function ProductsBar() {
    const { productDispatch } = useContext(ProductContext);
    const handleSort = (text) => {
        productDispatch({
            type: "SORT",
            payload: text,
        });
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
