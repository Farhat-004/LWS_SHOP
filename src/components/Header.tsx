import { useContext, useState } from "react";
import { ProductContext } from "../contexts/productContext";

export default function Header() {
    const [text, setText] = useState("");
    const productContext = useContext(ProductContext);

    if (!productContext) {
        throw new Error("Header must be used within ProductContext.");
    }

    const { productDispatch } = productContext;

    const handleSearch = (input: string) => {
        setText(input);
        productDispatch({
            type: "SEARCH",
            payload: input,
        });
    };

    return (
        <header className="border-b border-gray-200 px-4 py-4 md:px-8">
            <div className="container mx-auto flex items-center justify-between">
                <a href="#" className="text-2xl font-bold">
                    LWS.SHOP
                </a>

                <nav className="hidden space-x-6 md:flex">
                    <a href="#" className="transition-colors hover:text-gray-500">
                        Shop
                    </a>
                    <a href="#" className="transition-colors hover:text-gray-500">
                        On Sale
                    </a>
                    <a href="#" className="transition-colors hover:text-gray-500">
                        New Arrivals
                    </a>
                    <a href="#" className="transition-colors hover:text-gray-500">
                        Brands
                    </a>
                </nav>

                <div className="flex items-center space-x-4">
                    <div className="relative hidden w-64 md:block">
                        <input
                            type="text"
                            value={text}
                            onChange={(e) => handleSearch(e.target.value)}
                            placeholder="Search for products..."
                            className="w-full rounded-full bg-gray-100 px-4 py-2 text-sm"
                        />
                        <span className="absolute right-3 top-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </span>
                    </div>

                    <a href="#" className="transition-colors hover:text-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                            />
                        </svg>
                    </a>

                    <a href="#" className="transition-colors hover:text-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </header>
    );
}
