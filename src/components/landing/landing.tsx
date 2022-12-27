import Slidein from "./currentlyReading/currentlyReading";
import "./landing.scss";
interface Bool {
  isFirstVisit: boolean;
}
function landing(props:boolean) {
  return (
    <div id="landing">
      {props.isFirstVisit ? (
        <div id="intro-wrap">
          <h1 className="intro one">GREETINGS READER</h1>
          <h1 className="intro two">TEXT 2</h1>
          <h1 className="intro three">TEXT 3</h1>
        </div>
      ) : (
        <h1>loda</h1>
      )}
    </div>
  );
}

export default landing;
