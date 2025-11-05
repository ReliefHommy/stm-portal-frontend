'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

interface FeatureSectionProps {
  title: string
  description: string
  buttonText: string
  buttonHref: string
  images: string[]
}

export default function ImageRightFeature({
  title,
  description,
  buttonText,
  buttonHref,
  images
}: FeatureSectionProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section
      ref={ref}
      className="flex flex-col lg:flex-row-reverse items-center gap-10 py-16 px-6 lg:px-20"
    >
      {/* 🖼️ Right Side – Masonry Layout */}
      {/* Right Side — Image / Masonry Grid */}
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

      {/* 📝 Left Side – Text + CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center lg:text-left">
          {title}
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed text-center lg:text-left max-w-md">
          {description}
        </p>
        <Link
          href={buttonHref}
          className="inline-block bg-orange-500 hover:bg-black text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
        >
          {buttonText}
        </Link>
      </motion.div>
    </section>
  )
}

