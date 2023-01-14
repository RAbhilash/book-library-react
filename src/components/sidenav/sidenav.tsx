import "../sidenav/sidenav.scss";
import { Link, useLocation } from "react-router-dom";
function sidenav() {
  const route = useLocation()
  return (
    <div id="sidenav">
      {route.pathname !== "/" ? <Link to="/">
        <div id="sidenav-home">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2932/2932143.png"
            alt=""
          />
        </div>
      </Link> :
        <></>}
      <Link to="/allbooks">
        <div id="sidenav-allbooks">
          <img
            src="https://cdn-icons-png.flaticon.com/512/8022/8022304.png"
            alt=""
          />
        </div>
      </Link>
      <Link to="/settings">
        <div id="sidenav-settings">
          <img
            src="https://cdn-icons-png.flaticon.com/512/70/70314.png"
            alt=""
          />
        </div>
      </Link>
      <Link to="/info">
        <div id="sidenav-info">
          <img
            src="https://cdn-icons-png.flaticon.com/512/471/471662.png"
            alt=""
          />
        </div>
      </Link>
    </div>
  );
}

export default sidenav;
