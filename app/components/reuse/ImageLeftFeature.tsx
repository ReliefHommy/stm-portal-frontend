import React from "react";
import Link from 'next/link'
import Image from 'next/image'


interface FeatureSectionProps {
  title: string
  description: string
  buttonText: string
  buttonHref: string
  images: string[]  // list of image URLs
  reverse?: boolean // use this for swapping left/right layout
}


export default function ImageLeftFeature({
  title,
  description,
  buttonText,
  buttonHref,
  images,
  reverse = false
}: FeatureSectionProps) {
  return (
    <section
      className={`flex flex-col-reverse lg:flex-row ${
        reverse ? 'lg:flex-row-reverse' : ''
      } items-center gap-10 py-16 px-6 lg:px-20`}
    >
      {/* Left Side — Image / Masonry Grid */}
      <div className="flex-1 grid grid-cols-2 gap-3">
        {images.map((src, i) => (
          <div
            key={i}
            className={`overflow-hidden rounded-2xl shadow-md ${
              i % 3 === 0 ? 'row-span-2' : ''
            }`}
          >
            <Image
              src={src}
              alt={`Feature image ${i + 1}`}
              width={400}
              height={400}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Right Side — Text */}
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h2>
         <p className="text-gray-600 mb-6 leading-relaxed max-w-lg mx-auto lg:mx-0">
          {description}
        </p>
        <Link
          href={buttonHref}
          className="inline-block bg-orange-600 hover:bg-black text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
        >
          {buttonText}
        </Link>
        

      </div>
    </section>
  )
}