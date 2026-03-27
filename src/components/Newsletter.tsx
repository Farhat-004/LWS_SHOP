export default function NewsLetter() {
    return (
        <section className="mt-12 bg-black px-4 py-12 text-white md:px-8">
            <div className="container mx-auto max-w-4xl">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                    STAY UP TO DATE ABOUT
                    <br />
                    OUR LATEST OFFERS
                </h2>

                <div className="mt-8 flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-grow rounded-md bg-white px-4 py-3 text-black"
                    />
                    <button className="rounded-md bg-white px-6 py-3 font-medium text-black transition-colors hover:bg-gray-100">
                        Subscribe to Newsletter
                    </button>
                </div>
            </div>
        </section>
    );
}
