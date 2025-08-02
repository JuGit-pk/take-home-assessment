import React from "react"
import AccordianItem from "./accordian-item"
const qnas = [
  {
    q: "What is Surmount and how is it different from a robo-advisor?",
    a: "Surmount is an automation layer that connects to the brokerage accounts you already use and executes fully-tested investment strategies on your behalf. Unlike traditional robo-advisors that confine you to a single custodian and a one-size-fits-all model portfolio, Surmount lets you deploy data-driven strategies—created by our team, by professional quants, or by yourself—across any supported broker. You keep control of your account, we handle the execution logic, and every trade remains fully transparent inside your existing brokerage portal",
  },
  {
    q: "Why does Surmount exist?",
    a: "Surmount is an automation layer that connects to the brokerage accounts you already use and executes fully-tested investment strategies on your behalf. Unlike traditional robo-advisors that confine you to a single custodian and a one-size-fits-all model portfolio, Surmount lets you deploy data-driven strategies—created by our team, by professional quants, or by yourself—across any supported broker. You keep control of your account, we handle the execution logic, and every trade remains fully transparent inside your existing brokerage portal",
  },
  {
    q: "Why would someone share a profitable strategy?",
    a: "Surmount is an automation layer that connects to the brokerage accounts you already use and executes fully-tested investment strategies on your behalf. Unlike traditional robo-advisors that confine you to a single custodian and a one-size-fits-all model portfolio, Surmount lets you deploy data-driven strategies—created by our team, by professional quants, or by yourself—across any supported broker. You keep control of your account, we handle the execution logic, and every trade remains fully transparent inside your existing brokerage portal",
  },
]
const Accordian = () => {
  return (
    <div className="max-w-[770px] w-full mx-auto">
      {/* card */}
      {qnas.map((qna, i) => (
        <AccordianItem key={JSON.stringify(qna) + i} qna={qna} />
      ))}
      {/* a */}
    </div>
  )
}

export default Accordian
