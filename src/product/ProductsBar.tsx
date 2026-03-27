import { useContext } from "react";
import { ProductContext } from "../contexts/productContext";
import type { SortOption } from "../types";

export default function ProductsBar() {
    const productContext = useContext(ProductContext);

    if (!productContext) {
        throw new Error("ProductsBar must be used within ProductContext.");
    }

    const { productDispatch } = productContext;

    const handleSort = (text: SortOption) => {
        productDispatch({
            type: "SORT",
            payload: text,
        });
    };

    return (
        <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Your Products</h2>
            <div className="flex items-center space-x-2">
                <span className="text-sm">Sort by:</span>
                <select
                    onChange={(e) =>
                        handleSort(e.target.value as SortOption)
                    }
                    className="rounded-md border px-2 py-1 text-sm"
                >
                    <option value="All">All</option>
                    <option value="popular">Most Popular</option>
                    <option value="new">Newest</option>
                    <option value="lowToHigh">Price: Low to High</option>
                    <option value="HighToLow">Price: High to Low</option>
                </select>
            </div>
        </div>
    );
}
