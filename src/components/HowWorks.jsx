const HowWorks = () => {
    return (
        <div>
            <section>
                <div className="skew skew-top mr-for-radius">
                    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                        <polygon fill="currentColor" points="0 0 10 10 0 10" />
                    </svg>
                </div>
                <div className="skew skew-top ml-for-radius">
                    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                        <polygon fill="currentColor" points="0 10 10 0 10 10" />
                    </svg>
                </div>
                <div className="py-20 bg-gray-50 radius-for-skewed">
                    <div className="container mx-auto px-4">
                        <div className="mb-16 max-w-md text-center mx-auto">
                            <span className="text-green-600 font-bold">
                                Dolor sit amet consectutar
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                                Build &amp; Launch without problems
                            </h2>
                        </div>
                        <div className="relative flex flex-wrap -mx-4 z-0">
                            <div className="hidden lg:block absolute inset-x-0 max-w-2xl xl:max-w-3xl mx-auto py-px rounded bg-green-600" style={{ top: "10%", zIndex: -1 }}/>
                            <div className="mb-8 w-full lg:w-1/3 px-4 text-center">
                                <span className="relative mb-6 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center bg-green-600 rounded-full text-white text-2xl">
                                    1
                                </span>
                                <h3 className="mb-4 text-2xl font-bold font-heading">
                                    Lorem ipsum dolor sit amet consectutar
                                </h3>
                                <p className="text-gray-500 leading-loose">
                                    Fusce quam tellus, placerat eu metus ut, viverra aliquet purus.
                                    Suspendisse potenti. Nulla non nibh feugiat.
                                </p>
                            </div>
                            <div className="mb-8 w-full lg:w-1/3 px-4 text-center">
                                <span className="mb-4 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center bg-green-600 rounded-full text-white text-2xl">
                                    2
                                </span>
                                <h3 className="mb-4 text-2xl font-bold font-heading">
                                    Lorem ipsum dolor sit amet consectutar
                                </h3>
                                <p className="text-gray-500 leading-loose">
                                    Fusce quam tellus, placerat eu metus ut, viverra aliquet purus.
                                    Suspendisse potenti. Nulla non nibh feugiat.
                                </p>
                            </div>
                            <div className="w-full lg:w-1/3 px-4 text-center">
                                <span className="mb-4 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center bg-green-600 rounded-full text-white text-2xl">
                                    3
                                </span>
                                <h3 className="mb-4 text-2xl font-bold font-heading">
                                    Lorem ipsum dolor sit amet consectutar
                                </h3>
                                <p className="text-gray-500 leading-loose">
                                    Fusce quam tellus, placerat eu metus ut, viverra aliquet purus.
                                    Suspendisse potenti. Nulla non nibh feugiat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skew skew-bottom mr-for-radius">
                    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                        <polygon fill="currentColor" points="0 0 10 0 0 10" />
                    </svg>
                </div>
                <div className="skew skew-bottom ml-for-radius">
                    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                        <polygon fill="currentColor" points="0 0 10 0 10 10" />
                    </svg>
                </div>
            </section>
        </div>
    );
};
export default HowWorks;