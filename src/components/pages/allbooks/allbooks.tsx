import { useRef } from "react";
import "./allbooks.scss";
function allbooks() {
  const arr = useRef(['first','second','third'])
  return (
    <div id="allbooks">
      <input type="text" id='srch' placeholder="Search"/>
      <ul>
        {
          arr.current.map(ele=><p>{ele}</p>)
        }
      </ul>
    </div>
  )
}

export default allbooks