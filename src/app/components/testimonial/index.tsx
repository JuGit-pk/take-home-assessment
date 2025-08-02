"use client"
import React from "react"
import { ITestimonial, TestimonialCard } from "./testimonial-card"

const testimonials: ITestimonial[] = [
  {
    name: "David Cohe",
    text: "Surmount is truly changing the game. Really easy to use. Logan and the team are doing great work to make wealth building more accessible to anyone.",
    strategies: ["Strategy 1", "Strategy 2"],
  },
  {
    name: "David Cohe",
    text: "The product is awesome! I have only ever known buy and hold to be my strategy and Surmount has opened up an entire new world of investing for me. My Robinhood account is doing better than it would be if it was still just me managing it.",
    strategies: ["Strategy 1", "Strategy 2"],
  },
  {
    name: "David Cohe",
    text: "Surmount is truly changing the game. Really easy to use. Logan and the team are doing great work to make wealth building more accessible to anyone.",
    strategies: ["Strategy 1", "Strategy 2"],
  },
  {
    name: "David Cohe",
    text: "As a former quant, I was excited to use a platform that Logan and the team have built to bring the power of professional family offices to everyday investors. After a year of due diligence, I found more in Surmount than I ever could on my own.",
    strategies: ["Strategy 1", "Strategy 2"],
  },
  {
    name: "David Cohe",
    text: "When I saw the amazing team and the edge funds and the founders. As I dug into it I was even more to impress",
    strategies: ["Strategy 1", "Strategy 2"],
  },
]

const TestimonialsSection = () => {
  return (
    <section className="my-[25px] overflow-hidden">
      <div className="text-center mb-9">
        <h2 className="text-[34px] font-aeonik font-bold text-[#2F363F]">
          What our users are saying
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex items-start gap-[25px] mb-3">
          {[...testimonials].map((testimonial, index) => (
            <TestimonialCard
              key={`row-testimonial-${index}`}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex items-start gap-[25px]  -translate-x-[240px]">
          {[...testimonials].map((testimonial, index) => (
            <TestimonialCard
              key={`row-testimonial-${index}`}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
