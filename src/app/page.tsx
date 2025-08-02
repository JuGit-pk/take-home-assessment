import AwardsSection from "./components/award-section"
import FAQ from "./components/faq"
import Header from "./components/header"
import Pricing from "./components/pricing"
import TestimonialsSection from "./components/testimonial"

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen mt-[15px] mb-[337px]">
      <Header />
      <Pricing />
      <AwardsSection />
      <TestimonialsSection />
      <FAQ />
    </div>
  )
}
