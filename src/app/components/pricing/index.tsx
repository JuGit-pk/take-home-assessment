import React from "react"
import FreePlanCard from "./free-plan-card"
import PriceCard from "./card"
const plans = [
  {
    type: "Scale",
    price: "5",
    bg: "/pricing/scale.png",
    featured: "Scale plan includes",
    features: [
      "Connect + automate external accounts",
      "Invest in prebuilt strategies",
      "Personalized recommendations",
    ],
    btn_text: "Get Started",
  },
  {
    type: "Grow",
    price: "10",
    bg: "/pricing/grow.png",
    featured: "Everything in Scale plus…",
    features: [
      "Personalized AI advisor",
      "Custom strategies",
      "+ Crypto & Options",
      "Advanced market research",
    ],
    btn_text: "Get Started",
  },
  {
    type: "Build",
    price: "30",
    bg: "/pricing/build.png",
    featured: "Everything in Grow plus…",
    features: [
      "Full access to strategy creation tools",
      "Full access to 20,000+ datapoints",
      "Strategy sharing",
      "All asset classes",
    ],
    btn_text: "Contact Sales",
  },
]
const Pricing = () => {
  return (
    <section className="max-w-[1200px] mx-auto w-full">
      <div>
        <p className="text-center font-poppins text-[35px] font-medium">
          Simple <span className="font-inter font-light italic">&</span>{" "}
          <span className="font-cardo italic">transparent</span> Pricing
        </p>
        <p className="font-aeonik font-medium text-center text-[#717183] text-lg mt-0.5">
          No hidden fees. Cancel anytime.
        </p>
      </div>
      <FreePlanCard />
      <div className="grid grid-cols-3 gap-6 mt-[46px]">
        {plans &&
          plans.map((plan) => <PriceCard key={plan.type} plan={plan} />)}
      </div>
    </section>
  )
}

export default Pricing
