import React from 'react'

const Gallery = () => {
    return (

        <section>
            <section className="text-gray-600 body-font bg-BgColor text-TextColor">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="public\assets\skin.jpg" />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-indigo-500   font-serif  text-[20px] tracking-widest title-font mb-1">Skin Care Products </h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium"></h2>
                                <p className="mt-1  text-blue-600">$16.00</p>
                            </div> 
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="public\assets\hair.jpg"/>
                            </a>
                            <div className="mt-4">
                                <h3 className="text-indigo-500  font-serif text-[20px]  text-xs tracking-widest title-font mb-1">Hair Care Products</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium"></h2>
                                <p className="mt-1  text-blue-600">$21.15</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="public\assets\makeup.jpg" />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-indigo-500  font-serif text-[20px]  text-xs tracking-widest title-font mb-1">Make Up Products</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium"></h2>
                                <p className="mt-1  text-blue-600">$12.00</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="public\assets\fragrence.jpg" />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-indigo-500  font-serif text-[20px]  text-xs tracking-widest title-font mb-1">Fragrance Products</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium"></h2>
                                <p className="mt-1  text-blue-600">$18.40</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="public\assets\personal.jpg" />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-indigo-500  font-serif text-[20px]  text-xs tracking-widest title-font mb-1">Personal Products</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium"></h2>
                                <p className="mt-1  text-blue-600">$16.00</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="public\assets\body1.jpg" />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-indigo-500  font-serif text-[20px]  text-xs tracking-widest title-font mb-1">Body Care Products</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium"></h2>
                                <p className="mt-1  text-blue-600">$21.15</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="public\assets\oral.jpg" />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-indigo-500  font-serif text-[20px] text-xs tracking-widest title-font mb-1">Oral Care Products</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium"></h2>
                                <p className="mt-1  text-blue-600">$12.00</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="public\assets\sun.jpg" />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-indigo-500  font-serif text-[20px]  text-xs tracking-widest title-font mb-1">Sun Care Produts</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium"></h2>
                                <p className="mt-1  text-blue-600">$18.40</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Gallery
