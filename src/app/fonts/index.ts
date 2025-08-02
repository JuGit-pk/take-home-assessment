import { Inter, Poppins, Cardo } from "next/font/google"
import localFont from "next/font/local"

export const cardo = Cardo({
  variable: "--font-cardo",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
})
export const inter = Inter({
  variable: "--font-inter",
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})
export const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})
export const aeonik = localFont({
  variable: "--font-aeonik",
  display: "swap",
  src: [
    {
      path: "../../../public/fonts/aeonik/AeonikTRIAL-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/aeonik/AeonikTRIAL-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../../public/fonts/aeonik/AeonikTRIAL-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/aeonik/AeonikTRIAL-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../public/fonts/aeonik/AeonikTRIAL-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/aeonik/AeonikTRIAL-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
})
