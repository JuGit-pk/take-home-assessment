import { PLANS } from "@/data"
import FreePlanCard from "./free-plan-card"
import PriceCard from "./card"

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
        {PLANS &&
          PLANS.map((plan) => <PriceCard key={plan.type} plan={plan} />)}
      </div>
    </section>
  )
}

export default Pricing
