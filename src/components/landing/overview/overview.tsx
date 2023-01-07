import Sidenav from "../../sidenav/sidenav";
import Header from "../../header/header";
import "./overview.scss";
import { VisitedContext } from "../../../App";
import { useContext } from "react";
function overview() {
const first = useContext(VisitedContext);
  function onStatsHover() {
    console.log(first);
  }
  return (
    <div id="overview">
      <Header />
      <Sidenav />
      <div id="quote">
        <p>
          You are the shuckiest shuck faced shuck in the world!” “I'm
          unpredictable, I never know where I'm going until I get there, I'm so
          random, I'm always growing, learning, changing, I'm never the same
          person twice. But one thing you can be sure of about me; is I will
          always do exactly what I want to do.
        </p>
      </div>
      <div id="stats" onClick={onStatsHover}>
        <h2>
          Nothing yet... <br />
          Start building your library{"->"}
        </h2>
      </div>
      <div id="gif">
        <img
          src="https://media.tenor.com/9XiRPDIVL-EAAAAd/trashcan-animation-random.gif"
          alt=""
        />
      </div>
    </div>
  );
}

export default overview;
