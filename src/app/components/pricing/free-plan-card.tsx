"use client"
import { Icon } from "@/app/components/icon"
import React from "react"

const features = [
  "Unlimited Connected Broker Accounts",
  "Unlimited Paper Accounts",
  "Unlimited Automated Trading on Paper Accounts",
  "Unlimited ETF Strategy Creation / Backtesting",
]
// TODO: need font aenonik 500 and 600 and make it pixel perfect
const FreePlanCard = () => {
  return (
    <div className="bg-violet-500 w-full p-7 pt-5 mt-5 rounded-2xl flex justify-between bg-[url('/pricing/free.png')] text-white">
      <div className="min-w-[344px] flex flex-col justify-between">
        <div className="font-aeonik font-medium">
          <p className="text-4xl text-[40px]">Free Plan</p>
          <p className="text-sm">Create a Surmount account</p>
          <p className="font-inter gap-x-1.5 flex items-center mt-[15px]">
            <span className="font-semibold text-[43px]">$0</span>
            <span className="text-sm font-medium text-white/55">/ month</span>
          </p>
        </div>
        <button
          type="button"
          onClick={() => console.log("clicked")}
          className="bg-white rounded-full w-full py-3 cursor-pointer"
        >
          <span className="text-[#156FEE] font-inter font-medium text-base">
            Get Started
          </span>{" "}
        </button>
      </div>
      <div className="font-aeonik font-medium space-y-16 max-w-[470px]">
        <p className="text-sm">
          Surmount is an AI-powered investment platform that lets users
          automate, personalize, and execute sophisticated portfolios no coding
          required using professional-grade strategies and real-time data-driven
          intelligence.
        </p>
        <ul className="text-base space-y-2.5 -ml-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-start">
              <Icon.checkOutlineIcon className="mr-2 flex-shrink-0" />{" "}
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FreePlanCard
