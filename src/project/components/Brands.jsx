import React from 'react'

const Brands = () => {
    return (
        <section>
            <section className="text-gray-600 body-font bg-BgColor text-TextColor">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-pink-700">TOP BTANDS</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base  text-pink-600">Cosmetic brands revolutionize beauty with innovative products, offering skincare, makeup, and haircare solutions tailored to diverse consumer needs worldwide.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="public\assets\img1.jpg" />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">L'Oréal Paris</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3"></h1>
                                        <p className="leading-relaxed  text-pink-600">Fenty Beauty is renowned for its commitment to diversity and inclusivity,offering a wide range of shades for all skin tones..</p>
                                    </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="public\assets\img2.jpeg" />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Estée Lauder</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3"></h1>
                                        <p className="leading-relaxed  text-pink-600">Estée Lauder is known for its premium skincare, makeup, and fragrance products. Focuses on anti-aging and luxury beauty..</p>
                                    </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="public\assets\img3.jpg" />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">MAC Cosmetics</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3"></h1>
                                        <p className="leading-relaxed  text-pink-600">MAC is renowned for its professional-grade makeup, vibrant colors, and long-lasting formulations.</p>
                                    </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="public\assets\img4.jpg" />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Maybelline New York</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3"></h1>
                                        <p className="leading-relaxed  text-pink-600">Maybelline offers accessible and trendy makeup products with a focus on mass-market consumers.</p>
                                    </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="public\assets\img5.jpg" />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Dior Beauty
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3"></h1>
                                        <p className="leading-relaxed  text-pink-600">Dior is a luxury brand that provides high-end makeup, skincare, and fragrances..</p>
                                    </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="public\assets\img6.jpg" />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Fenty Beauty</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3"></h1>
                                        <p className="leading-relaxed  text-pink-600"> Fenty Beauty is renowned for its commitment to diversity and inclusivity, offering a wide range of shades for all skin tones.</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Brands
