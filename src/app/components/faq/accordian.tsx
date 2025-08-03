import AccordianItem from "./accordian-item"
import { QNAs } from "@/data"

const Accordian = () => {
  return (
    <div className="max-w-[770px] w-full mx-auto">
      {/* card */}
      {QNAs.map((qna, i) => (
        <AccordianItem key={JSON.stringify(qna) + i} qna={qna} />
      ))}
      {/* a */}
    </div>
  )
}

export default Accordian
