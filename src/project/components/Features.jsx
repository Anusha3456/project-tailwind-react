import React from 'react'

const Features = () => {
    return (
        <section>
            <section className="text-gray-600 body-font bg-BgColor text-TextColor">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-pink-700 mb-4">What we offer...!</h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-pink-600">Discover our wide range of cosmetics designed to enhance your beauty. From skincare and makeup to haircare and fragrances, we offer innovative, inclusive, and sustainable solutions for all your beauty needs..</p>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            
                            <div className="flex-grow">
                                <h2 className=" text-pink-700 text-lg title-font font-medium mb-3">Makeup Marvels</h2>
                                <p className="leading-relaxed text-base  text-pink-600">Our makeup collection includes everything you need to create stunning looks. Explore foundations, concealers, lipsticks, and eyeshadows crafted for long-lasting wear and flawless finishes. Whether for subtle everyday beauty or bold artistic expression, our products are designed to celebrate your individuality and elevate your confidence.</p>
                                
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            
                            <div className="flex-grow">
                                <h2 className=" text-pink-700 text-lg title-font font-medium mb-3">Sustainable Beauty</h2>
                                <p className="leading-relaxed text-base  text-pink-600">We prioritize beauty that’s kind to you and the planet. Offering cruelty-free and vegan options, our products are crafted with sustainable materials and eco-conscious processes. By choosing us, you contribute to a more ethical and environmentally friendly beauty industry.</p>
                                
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            
                            <div className="flex-grow">
                                <h2 className=" text-pink-700 text-lg title-font font-medium mb-3">Personalized Solutions
                                </h2>
                                <p className="leading-relaxed text-base  text-pink-600">Our personalized beauty services cater to your unique needs. From tailored consultations to inclusive products for diverse skin tones and types, we aim to empower every individual. Experience customized recommendations and solutions that make your skincare and makeup routine truly your own.</p>
                               
                            </div>
                        </div>
                    </div>
                    <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                </div>
            </section>
        </section>
    )
}

export default Features
