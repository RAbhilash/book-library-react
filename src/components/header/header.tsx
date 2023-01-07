import './header.scss'
import profile from "/profile.webp";
function header() {
  return (
    <div id="header">
      <h1 id="wel">Welcome -name-</h1>
      <div id="profile">
        <img src={profile} alt="" />
        <p>username</p>
      </div>
    </div>
  )
}

export default header