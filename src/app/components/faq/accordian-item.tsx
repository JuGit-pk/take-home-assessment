"use client"
import { cn } from "@/app/utils"
import React, { useState } from "react"
import { Icon } from "../icon"
import { motion, AnimatePresence } from "framer-motion"

const AccordianItem = ({ qna }: { qna: { q: string; a: string } }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={cn(
        "mx-auto border-b-[1px] transition-colors duration-300",
        isOpen ? "border-b-black/30" : "border-b-black/10"
      )}
    >
      <div
        className="flex justify-between py-6 cursor-pointer select-none"
        onClick={() => setIsOpen((pre) => !pre)}
      >
        <div className="flex items-center space-x-4">
          <div className="h-[14px] w-1 bg-blue-500 rounded-xs"></div>
          <p className="font-medium font-aeonik text-base">{qna.q}</p>
        </div>
        <span
          className={cn(
            "transition-transform duration-300",
            isOpen ? "rotate-180" : "rotate-0"
          )}
        >
          {<Icon.chevronDown />}
        </span>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-[#4B5162] font-aeonik text-[15px]">
              <p>{qna.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AccordianItem
