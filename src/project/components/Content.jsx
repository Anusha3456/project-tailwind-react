import React from 'react'

const Content = () => {
    return (
        <div>
            <section>
                <section className="text-gray-600 body-font bg-BgColor text-TextColor">
                    <div className="container px-5 py-24 mx-auto flex flex-col">
                        <div className="lg:w-4/6 mx-auto">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img src="public\assets\content (2).jpg" alt="img" />
                            </div>
                            <div className="flex flex-col sm:flex-row mt-10">
                                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                
                                    <div className="flex flex-col items-center text-center justify-center">
                                        <h2 className="font-medium title-font mt-4 text-pink-700 text-lg">About Us</h2>
                                        <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                        <p className="text-base text-pink-600k  text-pink-600">Enhancing beauty with premium, high-quality cosmetics for every skin type.</p>
                                    </div>
                                </div>
                                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                    <p className="leading-relaxed text-lg mb-4 text-pink-600">At Beauty Vault, we are passionate about empowering your beauty journey with high-quality, innovative cosmetics. Our carefully curated collection includes luxurious skincare, vibrant makeup, and effective beauty solutions designed to suit every skin type and personal style. We believe that beauty is about more than just appearance—it’s about confidence, self-expression, and feeling your best. Our products are crafted with the finest ingredients to ensure optimal results, while promoting healthy, radiant skin. Whether you're seeking everyday essentials or bold, transformative looks, Beauty Vault is here to help you discover your perfect beauty routine. Enhance your glow with us today!</p>
                                    <a className="text-indigo-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Content
