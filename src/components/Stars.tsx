interface StarsProps {
    num: number;
}

export function GoldenStars({ num }: StarsProps) {
    const stars = new Array(num).fill(null);

    return (
        <>
            {stars.map((_, index) => (
                <span key={index}>★</span>
            ))}
        </>
    );
}

export function BlackStars({ num }: StarsProps) {
    const stars = new Array(num).fill(null);

    return (
        <>
            {stars.map((_, index) => (
                <span key={index} className="text-gray-300">
                    ★
                </span>
            ))}
        </>
    );
}
