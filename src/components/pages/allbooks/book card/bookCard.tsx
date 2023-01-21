import { useEffect, useRef } from 'react'
import './bookCard.scss'
import useTheme from "../../../context/themeContext/ThemeProvider";
function bookCard({content}:{content:any}) {
  const bookCardRef = useRef(null)
  function handleClick(e) {
    console.log(e.target)
  }
  useEffect(() => {
    bookCardRef.current.addEventListener('click',handleClick)
    const tempBookCardRef=bookCardRef.current
    return () => {
      tempBookCardRef.removeEventListener('click',handleClick)
    }
  })
  const {theme}=useTheme()
  return (
    <div className="bookcard" ref={bookCardRef}>
        <img src="https://s26162.pcdn.co/wp-content/uploads/2018/12/81A9dFqIEEL.jpg" alt="" className={'bookThumb '+theme}/>
    </div>
  )
}

export default bookCard