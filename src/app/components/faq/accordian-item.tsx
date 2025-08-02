"use client"
import { cn } from "@/app/utils"
import React, { useState } from "react"
import { Icon } from "../icon"

const AccordianItem = ({ qna }: { qna: { q: string; a: string } }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      className={cn(
        "mx-auto  border-b-[1px]",
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
        <span>{isOpen ? <Icon.chevronUp /> : <Icon.chevronDown />}</span>
      </div>
      {isOpen && (
        <div className="pb-6 text-[#4B5162] font-aeonik font-[15px]">
          <p>{qna.a}</p>
        </div>
      )}
    </div>
  )
}

export default AccordianItem
