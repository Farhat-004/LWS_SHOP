import { useState } from "react";

export default function Announcement() {
    const [show, setShow] = useState(true);

    return (
        <>
            {show && (
                <div className="relative bg-black px-4 py-2 text-center text-sm text-white">
                    <p>
                        Sign up and get 20% off to your first order.{" "}
                        <a href="#" className="font-medium underline">
                            Sign Up Now
                        </a>
                    </p>
                    <button
                        type="button"
                        onClick={() => setShow(false)}
                        className="absolute right-4 top-2 text-white"
                    >
                        ×
                    </button>
                </div>
            )}
        </>
    );
}
