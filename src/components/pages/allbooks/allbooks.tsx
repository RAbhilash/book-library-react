import { useRef } from "react";
import "./allbooks.scss";
import BookCard from "./book card/bookCard";
function allbooks() {
  const arr = useRef(['first','second','third','third'])
  return (
    <div id="allbooks">
      <input type="text" id='srch' placeholder="Search"/>
      <div id="booklist-wrapper">
        {
          arr.current.map(ele=><BookCard content={ele}/>)
        }
      </div>
    </div>
  )
}
export default allbooks