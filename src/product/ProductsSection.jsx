import ProductsBar from "./ProductsBar";
import ProductsGrid from "./ProductsGrid";

export default function ProductSection() {
    return (
        <div className="lg:col-span-2">
            <ProductsBar />
            <ProductsGrid />
        </div>
    );
}
