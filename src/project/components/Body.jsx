import React from 'react'

const Body = () => {
    return (
        <div>
            <section>
                <section className="text-gray-600 body-font bg-BgColor text-TextColor border-radius:10px">
                    <div className="container  mx-100 flex px-5 py-24 items-center justify-center flex-col">
                        <img src="public\assets\body.jpg" alt="img" />
                        <div className="text-center lg:w-2/3 w-full">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 mt-5 font- text-pink-700" >Welcome to The Beauty Vault</h1>
                            <p className="mb-8 leading-relaxed text-pink-600">Discover a world of beauty with our premium cosmetics collection. From skincare essentials to vibrant makeup, we offer high-quality products designed to enhance your natural beauty and boost your confidence.</p>
                            <div className="flex justify-center">
                            
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Body
