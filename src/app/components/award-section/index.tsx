import { AwardItem, IAwards } from "./award"

const awards: IAwards[] = [
  {
    src: "/awards/best-natural-language-23.svg",
    alt: "Best Natural Language 23",
  },
  {
    src: "/awards/best-trading-application-23.svg",
    alt: "Best Investment Platform 23",
  },
  {
    src: "/awards/best-trading-application-24.svg",
    alt: "Best Investment Platform 24",
  },
  {
    src: "/awards/best-trading-sol-provider-23.svg",
    alt: "Best Trading Sol Provider 23",
  },
]

const AwardsSection = () => {
  return (
    <section className="max-w-[1200px] mx-auto w-full py-[71px] px-1">
      <div className="flex items-center justify-between">
        {/* Left column: Text content */}
        <div className="flex-1 text-left">
          <h2 className="font-aeonik font-bold text-[34px] leading-[116%] tracking-[0.2%] text-[#404040] mb-5">
            We&apos;re proud to be at the forefront of intelligent, automated
            investing
          </h2>
          <p className="font-aeonik font-medium text-base leading-[161%] text-[#717184]">
            trusted by both experts and everyday investors.
          </p>
        </div>

        {/* Right column: Awards grid */}
        <div className="max-w-[487px] w-full grid grid-cols-2 gap-14">
          {awards.map((award, index) => (
            <AwardItem
              key={award.src + index}
              src={award.src}
              alt={award.alt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AwardsSection
