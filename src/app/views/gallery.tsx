import React from 'react'
import Image from 'next/image'

export default function Gallery() {
  return (
    < div id="gallery" className="scroll-mt-20">

    
    <div className="mt-10 ">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-serif text-orange-500 text-xl">Gallery</h1>
        <h1 className="font-serif text-xl mt-5 text-black">
          Some Photos From Our Restaurant
        </h1>
      </div>
      <div>
        {/* Grid with responsive columns and image sizes */}
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3 px-4 gap-2 mt-10 sm:px-8">
          {["/pic1.jpg", "/pic2.jpg", "/pic3.jpg", "/pic1.jpg", "/pic4.jpg", "/pic5.jpg", "/pic6.jpg", "/pic1.jpg"].map(
            (src, index) => (
              <div
                key={index}
                className="relative w-full sm:w-[300px] md:w-[350px] lg:w-[300px] h-[300px] overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={src}
                  alt={`image-${index}`}
                  layout="fill"
                  className="object-cover"
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
    </div>
  )
}
