export function GoldenStars({ num }) {
    const stars = new Array(num).fill(null);
    return (
        <>
            {" "}
            {stars.map((star, index) => (
                <span key={index}>★</span>
            ))}
        </>
    );
}
export function BlackStars({ num }) {
    const stars = new Array(num).fill(null);
    return (
        <>
            {" "}
            {stars.map((star, index) => (
                <span key={index} className="text-gray-300">
                    ★
                </span>
            ))}
        </>
    );
}
