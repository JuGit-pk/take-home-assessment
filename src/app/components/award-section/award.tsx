import Image from "next/image"

export interface IAwards {
  src: string
  alt: string
}
export const AwardItem = ({ src, alt }: IAwards) => {
  return (
    <div className="w-[212px] h-[110px] relative">
      <Image
        src={src}
        alt={alt}
        className="w-full h-auto object-contain object-center"
        fill
      />
    </div>
  )
}
