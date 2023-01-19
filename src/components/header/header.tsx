import './header.scss'
import profile from "/profile.webp";
import { themeContext } from "../../App";
import { useContext } from 'react';
function header() {
  const theme = useContext(themeContext)
  return (
    <div className={'header '+theme}>
      <h1 id="wel">Welcome -name-</h1>
      <div id="profile">
        <img src={profile} alt="" />
        <p>username</p>
      </div>
    </div>
  )
}

export default header