import './header.scss'
import profile from "/profile.webp";
import useTheme from "../context/themeContext/ThemeProvider";
function header() {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={'header ' + theme}>
      <h1 id="wel">Welcome -name-</h1>
      <div id="profile">
        <img src={profile} alt="" />
        <p>username</p>
      </div>
      <div id="bat"><button onClick={toggleTheme}>{theme}</button></div>
    </div>
  )
}

export default header