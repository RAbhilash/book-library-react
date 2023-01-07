import "../sidenav/sidenav.scss";
import { useContext } from "react";
import { VisitedContext } from "../../App";
function sidenav() {
  const isFirstVisit=useContext(VisitedContext)
  return (
    <div id="sidenav">
      <div id="sidenav-home">icon</div>
      <div id="sidenav-allbooks">icon</div>
      <div id="sidenav-settings">icon</div>
      <div id="sidenav-info">icon</div>
    </div>
  )
}

export default sidenav