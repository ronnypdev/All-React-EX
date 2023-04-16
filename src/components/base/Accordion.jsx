import { useState } from "react"
import "../../App.css"

export default function Accordion() {
  const [expand, setExpand] = useState(false);

  function toggleExpand() {
    setExpand(prevExpand => !prevExpand);
  }

  return (
    <div className="accordion">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={toggleExpand}>
        header <span>{expand ? "-" : "+"}</span></button>
      { expand && <div className="content">this is accordion content</div> }
    </div>
  )
}
