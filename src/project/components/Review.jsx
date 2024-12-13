import React from 'react'

const Review = () => {
    return (
        <section>
            <section className="text-gray-600 body-font bg-BgColor text-TextColor">
            <h2 className=" text-pink-700 font-medium text-center font-serif tracking-wider text[25px]">TESTIMONIALS</h2>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="public\assets\image.jpg" />
                                <h2 className=" text-pink-600 font-medium title-font tracking-wider text-sm">Luminous Glow Foundation by Glamoré</h2>
                                
                                    <p className="leading-relaxed  text-pink-600">This foundation is a game-changer! It blends seamlessly into my skin, giving it a natural, radiant glow that lasts all day. I love how lightweight it feels, yet it provides excellent coverage for blemishes and uneven skin tone. Plus, it doesn’t oxidize or turn cakey, even in humid weather. It’s definitely worth the price, and I’ve already recommended it to all my friends</p>
                                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                  
                                   
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="public\assets\image.jpg" />
                                <h2 className=" text-pink-600 font-medium title-font tracking-wider text-sm">HydraGlow Lip Balm by PureBliss
                                </h2>
                                    
                                    <p className="leading-relaxed  text-pink-600">The HydraGlow Lip Balm is super hydrating and leaves my lips feeling soft and smooth. The sheer tint is perfect for a natural, everyday look, and the subtle vanilla scent is divine. My only gripe is that it needs reapplication every few hours, but I love how it doesn't feel sticky. A must-have for anyone with dry lips</p>
                                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                    
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="public\assets\image.jpg" />
                                <h2 className=" text-pink-600 font-medium title-font tracking-wider text-sm">Charcoal Detox Mask by NatureCure</h2>
                                    <p className="leading-relaxed  text-pink-600">This mask has completely transformed my skincare routine. After just one use, my skin felt so clean and refreshed. It pulls out impurities without leaving my face dry or tight. I use it twice a week, and I’ve noticed a significant reduction in blackheads and breakouts. The natural ingredients and cruelty-free label are big pluses for me. Highly recommended.</p>
                                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                    
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Review
