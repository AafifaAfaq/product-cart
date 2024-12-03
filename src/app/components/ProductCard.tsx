import Image from "next/image";

export default function ProductCard() {
    return (
        <div className="flex flex-wrap justify-center gap-8 px-5 py-20 bg-gradient-to-b from-gray-50 to-gray-100">
            {/* Product 1 */}
            <div className="w-full sm:w-full md:w-5/12 lg:w-3/12 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center h-[300px] bg-gray-50">
                    <Image
                        src="/product1.jpg"
                        alt="Product One"
                        width={250}
                        height={250}
                        className="object-contain"
                    />
                </div>
                <div className="p-6">
                    <p className="text-2xl font-bold text-gray-800 mb-3">
                        PKR <span className="text-blue-600">1,000</span>
                    </p>
                    <button className="w-full py-3 text-lg font-medium text-white bg-blue-900 rounded-lg shadow-md hover:from-purple-600 hover:to-blue-500 transition-all duration-300">
                        Buy Now
                    </button>
                </div>
            </div>

            {/* Product 2 */}
            <div className="w-full sm:w-full md:w-5/12 lg:w-3/12 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center h-[300px] bg-gray-50">
                    <Image
                        src="/product2.jpg"
                        alt="Product Two"
                        width={300}
                        height={300}
                        className="object-contain"
                    />
                </div>
                <div className="p-6">
                    <p className="text-2xl font-bold text-gray-800 mb-3">
                        PKR <span className="text-blue-600">1,500</span>
                    </p>
                    <button className="w-full py-3 text-lg font-medium text-white bg-blue-900 rounded-lg shadow-md hover:from-purple-600 hover:to-blue-500 transition-all duration-300">
                        Buy Now
                    </button>
                </div>
            </div>

            {/* Product 3 */}
            <div className="w-full sm:w-full md:w-5/12 lg:w-3/12 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center h-[300px] bg-gray-50">
                    <Image
                        src="/product3.jpg"
                        alt="Product Three"
                        width={200}
                        height={200}
                        className="object-contain"
                    />
                </div>
                <div className="p-6">
                    <p className="text-2xl font-bold text-gray-800 mb-3">
                        PKR <span className="text-blue-600">2,000</span>
                    </p>
                    <button className="w-full py-3 text-lg font-medium text-white bg-blue-900 rounded-lg shadow-md hover:from-purple-600 hover:to-blue-500 transition-all duration-300">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}
