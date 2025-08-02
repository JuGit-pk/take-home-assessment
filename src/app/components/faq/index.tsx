import React from "react"
import Accordian from "./accordian"

const FAQ = () => {
  return (
    <section className="max-w-[1200px] mx-auto w-full mt-1">
      <div className="text-center mb-9">
        <h2 className="text-[34px] font-aeonik font-bold text-[#2F363F]">
          Frequently asked questions
        </h2>
        <p className="text-[#717184] text-base font-aeonik mt-4">
          Explore our frequently asked questions to learn more about Surmount
          features, security, integration capabilities, and more
        </p>
      </div>
      <div className="mt-12">
        <Accordian />
      </div>
    </section>
  )
}

export default FAQ
