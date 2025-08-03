import Image from "next/image"

const Header = () => {
  return (
    <header className="py-5">
      <div className="flex justify-center space-x-1">
        <div className="relative w-12">
          {/* w 48px h auto */}
          <Image
            src="/logo.svg"
            alt="Vercel Logo"
            className="w-12 h-auto"
            fill
          />
        </div>
        <p className="font-poppins text-[22px] font-semibold">Surmount.ai</p>
      </div>
    </header>
  )
}

export default Header
