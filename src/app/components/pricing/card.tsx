"use client"
import { Icon } from "@/app/components/icon"
import React from "react"

interface IProps {
  plan: IPlan
}
interface IPlan {
  type: string
  price: string
  bg: string
  featured: string
  features: string[]
  btn_text: string
}
const PriceCard = ({ plan }: IProps) => {
  return (
    <article
      className="p-6 rounded-2xl flex flex-col justify-between"
      style={{ backgroundImage: `url('${plan.bg}')` }}
    >
      <div>
        <p className="font-inter font-semibold text-sm text-white">
          {plan.type}
        </p>
        <div className="pt-4 pb-6">
          <p className="font-inter flex items-center gap-x-1.5">
            <span className="font-semibold text-[43px] text-white">
              ${plan.price}
            </span>
            <span className="font-inter font-medium text-sm text-white/55">
              / month
            </span>
          </p>
        </div>
        <ul className="mb-4">
          <p className="py-[14px] font-inter font-medium text-sm text-white">
            {plan.featured}
          </p>
          <div className="divide-y-[1px] divide-white/15">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start py-3">
                <Icon.checkOutlineIcon
                  fill="#76F9AC"
                  className="mr-3 flex-shrink-0"
                />{" "}
                <p className="font-inter font-medium text-sm text-white">
                  {feature}
                </p>
              </li>
            ))}
          </div>
        </ul>
      </div>
      <div>
        <button
          type="button"
          onClick={() => console.log("clicked")}
          className="bg-[#156FEE] rounded-full w-full cursor-pointer py-3"
        >
          <span className="text-white font-inter font-medium text-base">
            {plan.btn_text}
          </span>
        </button>
      </div>
    </article>
  )
}

export default PriceCard
