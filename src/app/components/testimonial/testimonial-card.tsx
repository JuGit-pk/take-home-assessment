"use client"
import Image from "next/image"

export interface ITestimonial {
  name: string
  text: string
  strategies: string[]
}

export const TestimonialCard = ({
  testimonial,
}: {
  testimonial: ITestimonial
}) => {
  return (
    <div className="shrink-0 bg-[#F3F6FB] rounded-2xl p-4 border border-[#D1D5E2] max-w-[430px] w-full">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full overflow-hidden mr-2.5 relative">
          <Image
            fill
            src="/profile.png"
            alt={`Profile of ${testimonial.name}`}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div>
          <h3 className="font-semibold text-[#252730] text-xl font-poppins">
            {testimonial.name}
          </h3>
          <p className="text-[#4B5162] text-xs font-poppins">
            Founder @GoFundMe
          </p>
        </div>
      </div>
      <p className="text-[#252730] text-base mb-4 leading-relaxed font-poppins">
        {testimonial.text}
      </p>

      <a
        href="#"
        className="text-[#048AF5] text-base font-poppins hover:underline"
      >
        Favourite Strategies
      </a>

      <div className="flex flex-wrap gap-2 mt-3">
        {testimonial.strategies.map((strategy, i) => (
          <span
            key={i}
            className="bg-white text-[#2F363F] text-base px-3 py-1.5 rounded-full"
          >
            {strategy}
          </span>
        ))}
      </div>
    </div>
  )
}
