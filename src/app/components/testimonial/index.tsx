"use client"

import { motion } from "framer-motion"

import { TestimonialCard } from "./testimonial-card"
import { TESTIMONIALS } from "@/data"

const TestimonialsSection = () => {
  return (
    <section className="my-[25px] overflow-hidden">
      <div className="text-center mb-9">
        <h2 className="text-[34px] font-aeonik font-bold text-[#2F363F]">
          What our users are saying
        </h2>
      </div>

      <div className="relative overflow-hidden">
        {/* Animated Marquee Row */}
        <motion.div
          className="flex items-start gap-[25px] mb-3 w-fit"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
            <TestimonialCard
              key={`marquee-testimonial-${index}`}
              testimonial={testimonial}
            />
          ))}
        </motion.div>
        <motion.div
          className="flex items-start gap-[25px] mb-3 w-fit"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
            <TestimonialCard
              key={`marquee-faster-testimonial-${index}`}
              testimonial={testimonial}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
